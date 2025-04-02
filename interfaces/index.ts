export interface ITodo {
  id?: string;
  title: string;
  body?: string | null | undefined;
  completed: boolean;
  createdAt?: Date;
}
