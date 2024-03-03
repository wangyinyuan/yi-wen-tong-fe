import { request } from "@/api/request";
import { ReminderForm } from "@/types/Reminder";

export const getTasksReq = () => {
  return request<ReminderForm>({
    url: "/task",
    method: "get",
  });
};

export const taskReq = (form: ReminderForm) => {
  return request({
    url: "/task",
    method: "post",
    data: form,
  });
};
