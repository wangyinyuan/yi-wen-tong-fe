import { request } from "@/api/request";
import type { History, Messages } from "@/types/ChatPage";

export const getAllHistoryReq = () => {
  return request<History[] | null>({
    url: "/chat/history",
    method: "get",
  });
};

export const getHistoryReq = ({ _id }: { _id: string }) => {
  return request<Messages>({
    url: "/chat/history/one",
    method: "get",
    params: {
      _id,
    },
  });
};
