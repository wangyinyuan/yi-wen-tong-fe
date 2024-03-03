import { request } from "@/api/request";
import type { FoodCardData, FoodDetails } from "@/types/Food";

export const getFoodCardsReq = () => {
  return request<FoodCardData[]>({
    url: "/advice/food",
    method: "get",
  });
};

export const getFoodDetailReq = ({ _id }: { _id: string }) => {
  return request<FoodDetails>({
    url: `/advice/food/${_id}`,
    method: "get",
    // params: {
    //   _id,
    // },
  });
};
