// types/database.d.ts
export type Task = {
  id: number;
  created_at: string;
  title: string | null;
  task_description: string | null;
  productive_time: number | null;
  leisure_time: number | null;
};