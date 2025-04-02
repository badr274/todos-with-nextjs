import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "./ui/badge";
import { ITodo } from "@/interfaces";
import TodosTableActions from "./TodosTableActions";

interface IProps {
  todos: ITodo[];
}
const TodoList = ({ todos }: IProps) => {
  return (
    <Table>
      <TableCaption>A list of your todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-muted-foreground">ID</TableHead>
          <TableHead className="w-[100px]  text-muted-foreground">
            Title
          </TableHead>
          <TableHead className=" text-muted-foreground">Status</TableHead>
          <TableHead className="text-right  text-muted-foreground">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.length
          ? todos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell className="font-medium">{todo.id}</TableCell>
                <TableCell className="font-medium">{todo.title}</TableCell>
                <TableCell>
                  {todo.completed ? (
                    <Badge variant={"default"}>Completed</Badge>
                  ) : (
                    <Badge variant={"secondary"}>UnCompleted</Badge>
                  )}
                </TableCell>
                <TableCell className="flex items-center justify-end space-x-2">
                  <TodosTableActions todo={todo} />
                </TableCell>
              </TableRow>
            ))
          : null}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell colSpan={2}></TableCell>
          <TableCell className="text-right">
            {!todos.length ? "YOU DON'T HAVE ANY TODO YET!" : todos.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
export default TodoList;
