export type ReminderForm = {
  title: string;
  detail?: string;
  dueDate: Date | undefined;
  dueTime: string;
};
