"use client";
import { deleteTodoAction } from "@/actions/todoActions";
import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";
import Spinner from "./Spinner";
import { useState } from "react";

interface IProps {
  id: string;
}
const TodosTableActions = ({ id }: IProps) => {
  const [loading, setLoading] = useState(false);
  const handleDelete = async (id: string) => {
    setLoading(true);
    await deleteTodoAction(id);
    setLoading(false);
  };
  return (
    <>
      <Button size={"icon"} variant={"outline"}>
        <Pen size={16} />
      </Button>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={() => handleDelete(id)}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
