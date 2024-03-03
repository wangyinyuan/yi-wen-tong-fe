import useSWR from "swr";
import { getSportsReq } from "@/api/http/advice/sports";

export const useSportsInfo = () => {
  const { data, error, mutate } = useSWR("/advice/sports", () =>
    getSportsReq()
  );

  return {
    sports: data,
    isLoading: !data && !error,
    isError: error,
    mutate,
  };
};
