import React, { useCallback, useState } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import messagesData from "./data/messages";
import CustomBubble from "./components/CustomBubble";
import { renderSend } from "./components/CustomInput";

export default function Dialog() {
  const [messages, setMessages] = useState<IMessage[]>(
    messagesData as IMessage[]
  );
  const onSend = useCallback((messages: IMessage[] = []) => {
    // 给 messages 添加正确的时间戳和用户信息
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  // console.log(messages)
  // console.log(new Date());
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      renderBubble={CustomBubble}
      alwaysShowSend={true}
      renderSend={renderSend}
    />
  );
}
