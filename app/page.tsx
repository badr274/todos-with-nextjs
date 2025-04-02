import { getTodoListAction } from "@/actions/todoActions";
import AddTodoForm from "@/components/AddTodoForm";
import { ModeToggle } from "@/components/ModeToggle";
import TodoList from "@/components/TodoList";

const Home = async () => {
  const todos = await getTodoListAction();
  return (
    <main className="container mx-auto">
      <div className="flex items-center justify-between mt-2 mb-5">
        <ModeToggle />
        <AddTodoForm />
      </div>
      <TodoList todos={todos} />
    </main>
  );
};
export default Home;
