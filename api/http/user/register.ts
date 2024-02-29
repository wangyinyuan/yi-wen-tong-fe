import { request } from "@/api/request";
import { UserToken } from "@/types/User";

export const registerReq = ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  return request<UserToken>({
    url: "/user/register",
    method: "post",
    data: {
      name,
      email,
      password,
    },
  });
};
