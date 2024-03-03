import { request } from "@/api/request";
import { ReportsData } from "@/types/Reports";

export const getReportsReq = () => {
  return request<ReportsData>({
    url: "/reports",
    method: "get",
  });
};
