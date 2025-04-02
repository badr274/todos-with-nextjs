"use server";

import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodoListAction = async (userId: string | null) => {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    return await prisma.todo.findMany({
      where: { user_id: userId },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
    return []; // يمكنك إرجاع [] إذا كنت تفضل ذلك
  }
};

export const createTodoAction = async ({
  title,
  body,
  completed,
  userId,
}: {
  title: string;
  body?: string;
  completed: boolean;
  userId: string | null;
}) => {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    await prisma.todo.create({
      data: { title, body, completed, user_id: userId },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Error creating todo:", error);
  }
};

export const updateTodoAction = async ({
  id,
  title,
  body,
  completed,
}: ITodo) => {
  try {
    await prisma.todo.update({
      where: { id },
      data: { title, body, completed },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};

export const deleteTodoAction = async (id: string) => {
  try {
    await prisma.todo.delete({ where: { id } });

    revalidatePath("/");
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};
