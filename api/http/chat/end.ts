import { request } from "@/api/request";
import { ReplyContent } from "@/types/ChatPage";

export const endChatReq = ({ _id }: { _id: string }) => {
  return request<ReplyContent>({
    url: "/chat/end",
    method: "post",
    params: {
      _id,
    },
  });
};
