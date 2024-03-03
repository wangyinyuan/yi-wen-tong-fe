import { getFoodCardsReq, getFoodDetailReq } from "@/api/http/advice/food";
import useSWR from "swr";

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
  const shouldFetch = !!_id;

  const { data, error, mutate } = useSWR(
    () => (shouldFetch ? `/advice/food/${_id}` : ""),
    () => getFoodDetailReq({ _id })
  );

  return {
    foodDetail: data,
    isLoading: !data && !error,
    isError: error,
    mutate,
  };
};
