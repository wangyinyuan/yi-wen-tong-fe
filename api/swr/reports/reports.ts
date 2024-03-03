import { getReportsReq } from "@/api/http/reports/reports";
import useSWR from "swr";

export const useReports = () => {
  const { data, error, mutate } = useSWR("/reports", () => getReportsReq());
  return {
    reports: data,
    isLoading: !data && !error,
    isError: error,
    mutate,
  };
};
