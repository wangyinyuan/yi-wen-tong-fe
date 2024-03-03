import useSWR from "swr";
import { getTasksReq } from "@/api/http/task/task";

export const useTasksList = () => {
  const { data, error, mutate } = useSWR("/task", () => getTasksReq());

  return {
    tasks: data,
    isLoading: !data && !error,
    isError: error,
    mutate,
  };
};
