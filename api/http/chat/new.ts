import { request } from "@/api/request";
import { MyIMessage, NewChatData } from "@/types/ChatPage";

export const newChatReq = () => {
  return request<NewChatData>({
    url: "/chat/new",
    method: "post",
  });
};

export const newMessageReq = ({
  _id,
  message,
}: {
  _id: string;
  message: MyIMessage;
}) => {
  return request({
    url: "/chat/new/message",
    method: "post",
    data: {
      _id,
      message,
    },
  });
};
