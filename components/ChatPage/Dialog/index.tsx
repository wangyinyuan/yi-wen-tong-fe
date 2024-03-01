import { newChatReq, newMessageReq } from "@/api/http/chat/new";
import { useChatMessageHistory } from "@/api/swr/chat/history";
import { useUserProfile } from "@/api/swr/user/profile";
import type { MyIMessage } from "@/types/ChatPage";
import generateID from "@/utils/generateId";
import { getTime } from "@/utils/getTime";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GiftedChat, User } from "react-native-gifted-chat";
import CustomBubble from "./components/CustomBubble";
import { renderSend } from "./components/CustomInput";

const endTitle = "如果你要结束问诊，请点击这个对话框下面的“结束问诊”按钮";

// 生成结束问诊消息（需要传入文本）
const endMessage = (title: string) => {
  return {
    _id: generateID(),
    text: title,
    createdAt: getTime(new Date()),
    user: {
      _id: 1,
      name: "Bot",
      avatar:
        "https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/319b0fdf8cc9bb8ee9d281e3c970c72d.png",
    },
    quickReplies: {
      type: "radio",
      keepIt: true,
      values: [
        {
          title: "😘 结束问诊",
          value: "end",
        },
      ],
    },
  };
};

const symptomMessage = () => {
  return {
    _id: generateID(),
    text: "感谢咨询，请在下方选择你的症状，可以多选",
    createdAt: getTime(new Date()),
    user: {
      _id: 1,
      name: "Bot",
      avatar:
        "https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/319b0fdf8cc9bb8ee9d281e3c970c72d.png",
    },
    quickReplies: {
      type: "checkbox",
      keepIt: true,
      values: [
        {
          title: "头痛",
          value: "headache",
        },
        {
          title: "咳嗽",
          value: "cough",
        },
        {
          title: "发烧",
          value: "fever",
        },
      ],
    },
  };
};

export default function Dialog() {
  const [messages, setMessages] = useState<MyIMessage[]>([]);
  const [chatId, setChatId] = useState<string>("" as string);
  const [isHistoryLoading, setIsHistoryLoading] = useState<boolean>(false);

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

  useEffect(() => {
    console.log("user is :", user);
    console.log("profile is:", profile);
  }, [user, profile]);

  // 获取历史消息
  const { history, isMessagesLoading } = useChatMessageHistory({ _id: chatId });
  useEffect(() => {
    console.log(history);
  }, [history]);

  // 新开始一轮对话的时候载入初始消息
  useEffect(() => {
    const getNewMessages = async () => {
      const res = await newChatReq();
      if (res) {
        setChatId(res._id);
        setMessages(res.messages as MyIMessage[]);
      }
    };
    if (!isHistoryLoading) {
      getNewMessages();
    }
  }, []);

  const onQuickReply = (replies: any[]) => {
    if (replies.length === 1) {
      const reply = replies[0];
      if (reply.value === "end") {
        // 结束问诊
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [symptomMessage() as MyIMessage])
        );
      }
    }
  };

  // 处理用户发送的信息
  const onSend = useCallback((messages: MyIMessage[] = []) => {
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

    console.log(chatId);
    newMessageReq({
      _id: chatId,
      message: newMessages[0] as MyIMessage,
    });

    console.log(newMessages);

    setMessages((previousMessages) => {
      const endMessage = previousMessages[0];
      const noEndMessage = previousMessages.slice(1);
      const updatedMessages = [endMessage, ...newMessages];
      return GiftedChat.append(noEndMessage, updatedMessages as MyIMessage[]);
    });
  }, [chatId, user]);

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
    />
  );
}
