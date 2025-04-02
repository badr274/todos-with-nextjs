"use client";
import { deleteTodoAction } from "@/actions/todoActions";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import Spinner from "./Spinner";
import { useState } from "react";
import EditTodoDialog from "./EditTodoDialog";
import { ITodo } from "@/interfaces";

interface IProps {
  todo: ITodo;
}
const TodosTableActions = ({ todo }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleDelete = async (id: string) => {
    setLoading(true);
    await deleteTodoAction(id);
    setLoading(false);
  };
  return (
    <>
      <EditTodoDialog open={open} setOpen={setOpen} todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={() => handleDelete(todo.id)}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
