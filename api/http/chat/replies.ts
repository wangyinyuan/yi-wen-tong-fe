import { ReplyContent } from "@/types/ChatPage";
import { request } from "@/api/request";

export const repliesReq = ({
  _id,
  replies,
}: {
  _id: string;
  replies: ReplyContent[];
}) => {
  return request({
    url: "/chat/replies",
    method: "post",
    data: {
      _id,
      replies,
    },
  });
};
