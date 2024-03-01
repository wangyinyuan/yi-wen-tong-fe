import { request } from "@/api/request";
import type { Profile } from "@/types/User";

export const getUserProfileReq = () => {
  return request<Profile>({
    url: "/user/profile",
    method: "get",
  });
};
