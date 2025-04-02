import { getTodoListAction } from "@/actions/todoActions";
import AddTodoDialog from "@/components/AddTodoDialog";
import TodoList from "@/components/TodoList";
import { auth } from "@clerk/nextjs/server";

const Home = async () => {
  const { userId } = await auth();

  const todos = await getTodoListAction(userId);
  return (
    <main className="container mx-auto">
      <div className="text-right">
        <AddTodoDialog userId={userId} />
      </div>
      <TodoList todos={todos} />
    </main>
  );
};
export default Home;
