import { endChatReq } from "@/api/http/chat/end";
import { newChatReq, newMessageReq } from "@/api/http/chat/new";
import { repliesReq } from "@/api/http/chat/replies";
import { getStreamReqPath } from "@/api/http/chat/stream";
import { useUserProfile } from "@/api/swr/user/profile";
import { toastErrorConfig, toastSuccessConfig } from "@/constants/ToastConfig";
import { USER_TOKEN } from "@/constants/Token";
import { imgHost } from "@/constants/imgHost";
import { SERVER_URL } from "@/constants/request";
import type { MyIMessage } from "@/types/ChatPage";
import generateID from "@/utils/generateId";
import { getTime } from "@/utils/getTime";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import RNEventSource from "react-native-event-source";
import { GiftedChat, User } from "react-native-gifted-chat";
import Toast from "react-native-root-toast";
import CustomBubble from "./components/CustomBubble";
import { renderSend } from "./components/CustomInput";

const symptomMessage = (values: any[]) => {
  return {
    _id: generateID(),
    text: "感谢咨询，请在下方选择你的症状，可以多选",
    createdAt: getTime(new Date()),
    user: {
      _id: 1,
      name: "Bot",
      avatar: `${imgHost}bot.png`,
    },
    quickReplies: {
      type: "checkbox",
      keepIt: true,
      values: values,
    },
  };
};

export default function Dialog() {
  const [messages, setMessages] = useState<MyIMessage[]>([]);
  const [chatId, setChatId] = useState<string>("" as string);
  const [isHistoryLoading, setIsHistoryLoading] = useState<boolean>(false);
  // 判断机器人是否在思考，此时应该禁止用户发送消息
  const [isThinking, setIsThinking] = useState<boolean>(false);
  // 判断机器人是否正在生成 quick replies
  const [isReplying, setIsReplying] = useState<boolean>(false);
  // 判断是否应该发起新的一轮对话
  const [isNewChat, setIsNewChat] = useState<boolean>(true);
  // 消息流对象
  const [messageStream, setMessageStream] = useState<RNEventSource | null>(
    null
  );
  // 用户 token
  const [token, setToken] = useState<string>("" as string);
  // stream chat 选项
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  }

  // 获取用户发送的信息
  const { profile } = useUserProfile();
  // 聊天记录里的 user 字段
  const user = useMemo(
    () => ({
      _id: profile?._id,
      name: profile?.name,
      avatar: profile?.avatar,
    }),
    [profile?._id, profile?.name, profile?.avatar]
  );

  // 获取历史消息
  // const { history, isMessagesLoading, setLocalHistory } = useChatMessageHistory(
  //   { _id: chatId }
  // );

  // 设置用户 token
  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem(USER_TOKEN);
      setToken(token as string);
    };
    getToken();
  }, [profile?._id]);

  // 如果 history 收到的结果大于消息数组，则替换消息数组
  // useEffect(() => {
  //   if (!history) return;
  //   if (history.messages.length > messages.length) {
  //     setMessages(history.messages as MyIMessage[]);
  //     // 结束思考
  //     setIsThinking(false);
  //   }
  // }, [history, messages]);

  // 新开始一轮对话的时候载入初始消息
  useEffect(() => {
    const getNewMessages = async () => {
      const res = await newChatReq();
      if (res) {
        // setLocalHistory(undefined);
        setChatId(res._id);
        setMessages(res.messages as MyIMessage[]);
      }
    };
    if (!isHistoryLoading && isNewChat) {
      getNewMessages();
      setIsNewChat(false);
    }
  }, [isHistoryLoading, isNewChat]);

  // 创建并监听消息流
  function connectStream() {
    const stream = new RNEventSource(`${SERVER_URL}${getStreamReqPath}${chatId}`, options);
    stream.addEventListener("message", handleStreamMessage);
    setMessageStream(stream);
  }

  // 处理消息流
  function handleStreamMessage(data: any) {
    console.log("stream message", data);
  }

  // 关闭消息流
  function closeStream() {
    if (messageStream) {
      messageStream.removeAllListeners();
      messageStream.close();
    }
  }

  const onQuickReply = async (replies: any[]) => {
    if (isReplying) return;
    setIsReplying(true);
    // 获取第一个回复，检查是不是结束问诊
    const reply = replies[0];
    if (reply.value === "end") {
      // 结束问诊
      // 发送结束问诊的请求
      const res = await endChatReq({ _id: chatId });
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [symptomMessage(res) as MyIMessage])
      );
    } else {
      // 发送症状信息
      try {
        const res = await repliesReq({ _id: chatId, replies: replies });
        Toast.show("症状发送成功！即将开启新的对话😚", toastSuccessConfig);
        setTimeout(() => setIsNewChat(true), 1000);
      } catch (error) {
        Toast.show("症状发送失败，请重试！", toastErrorConfig);
      }
    }

    setIsReplying(false);
  };

  // 处理用户发送的信息
  const onSend = useCallback(
    (messages: MyIMessage[] = []) => {
      // 给 messages 添加正确的时间戳和用户信息
      const newMessages = messages.map((message) => {
        return {
          ...message,
          createdAt: getTime(new Date()),
          user: user as User,
        };
      });

      // 发送消息
      // TODO: 发送失败的错误处理
      newMessageReq({
        _id: chatId,
        message: newMessages[0] as MyIMessage,
      });

      // 禁止用户发消息
      setIsThinking(true);

      // 更新现有的消息数组
      setMessages((previousMessages) => {
        const endMessage = previousMessages[0];
        const noEndMessage = previousMessages.slice(1);
        const updatedMessages = [endMessage, ...newMessages];
        return GiftedChat.append(noEndMessage, updatedMessages as MyIMessage[]);
      });

      // 建立 stream 连接
      connectStream();
    },
    [chatId, user]
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={user as User}
      renderBubble={CustomBubble}
      alwaysShowSend={true}
      renderSend={renderSend}
      onQuickReply={onQuickReply}
      showAvatarForEveryMessage={true}
      alignTop={true}
      renderAvatarOnTop={true}
      disableComposer={isThinking}
      placeholder={isThinking ? "机器人正在思考中..." : "此处输入消息..."}
    />
  );
}
