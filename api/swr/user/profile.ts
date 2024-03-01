import { getUserProfileReq } from "@/api/http/user/profile";
import useSWR from "swr";

export function useUserProfile() {
  const { data, error, mutate } = useSWR("/user/profile", () =>
    getUserProfileReq()
  );

  return {
    profile: data,
    isProfileLoading: !error && !data,
    isProfileError: error,
    mutate,
  };
}
