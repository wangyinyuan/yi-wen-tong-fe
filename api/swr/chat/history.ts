import { getHistoryReq } from "@/api/http/chat/history";
import useSWR from "swr";
import { useState } from "react";
import type { Messages } from "@/types/ChatPage";

export function useChatMessageHistory(param: { _id: string }) {
  const [localHistory, setLocalHistory] = useState<Messages | undefined>();

  const shouldFetch = param._id ? `/chat/history/one/${param._id}` : null;

  const { data, error, mutate } = useSWR(
    shouldFetch,
    () => getHistoryReq(param),
    {
      refreshInterval: 2000,
      onSuccess: (newData) => {
        if (
          !localHistory ||
          newData.messages.length > localHistory.messages.length
        ) {
          setLocalHistory(newData);
          mutate(newData, false);
        }
      },
    }
  );
  return {
    history: localHistory || data,
    isMessagesLoading: !data && !error,
    isMessagesError: error,
    setLocalHistory,
    mutate,
  };
}
