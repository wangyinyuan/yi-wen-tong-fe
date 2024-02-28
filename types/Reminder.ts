export type ReminderForm = {
  title: string;
  detail?: string;
  dueDate: Date | undefined;
  dueTime: string;
};

export type ReminderCardProps = {
  title: string;
  detail?: string;
  dueDate: Date | undefined;
  dueTime: string;
  index?: number;
};
