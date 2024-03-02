import { endChatReq } from "./../../http/chat/end";
import useSWR from "swr";
import { getFoodCardsReq, getFoodDetailReq } from "@/api/http/advice/food";

export const useFoodCardsInfo = () => {
  const { data, error, mutate } = useSWR("/advice/food", () =>
    getFoodCardsReq()
  );

  return {
    foodCards: data,
    isLoading: !data && !error,
    isError: error,
    mutate,
  };
};

export const useFoodDetailInfo = (_id: string) => {
  const { data, error, mutate } = useSWR("/advice/food", () =>
    getFoodDetailReq({ _id })
  );

  return {
    foodDetail: data,
    isLoading: !data && !error,
    isError: error,
    mutate,
  };
};
