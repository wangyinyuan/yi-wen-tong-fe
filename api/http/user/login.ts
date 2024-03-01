import type { UserToken } from "@/types/User";
import { request } from "@/api/request";

export const loginReq = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return request<UserToken>({
    url: "/user/login",
    method: "post",
    data: {
      email,
      password,
    },
    // @ts-ignore
    skipAuth: true,
  });
};
