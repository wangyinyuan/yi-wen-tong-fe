import { request } from "@/api/request";
import { SportsData } from "@/types/Sports";

export const getSportsReq = () => {
  return request<SportsData>({
    url: "/advice/sports",
    method: "get",
  });
};
