import generateID from "@/utils/generateId";
import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import CustomBubble from "./components/CustomBubble";
import { renderSend } from "./components/CustomInput";
import testData from "./data/test";

const endTitle = "如果你要结束问诊，请点击这个对话框下面的“结束问诊”按钮";

const endMessage = (title: string) => {
  return {
    _id: generateID(),
    text: title,
    createdAt: new Date(),
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
    createdAt: new Date(),
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
  }
}

export default function Dialog() {
  const [messages, setMessages] = useState<IMessage[]>(testData as IMessage[]);

  const onQuickReply = (replies: any[]) => {
    if (replies.length === 1) {
      const reply = replies[0];
      if (reply.value === "end") {
        // 结束问诊
        setMessages((previousMessages) => GiftedChat.append(previousMessages, [symptomMessage() as IMessage]));
      }
    }
  };

  const onSend = useCallback((messages: IMessage[] = []) => {
    // 给 messages 添加正确的时间戳和用户信息
    setMessages((previousMessages) => {
      const noEndMessages = previousMessages.slice(1);
      const updatedMessages = [endMessage(endTitle) as IMessage, ...messages];
      return GiftedChat.append(noEndMessages, updatedMessages);
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
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
