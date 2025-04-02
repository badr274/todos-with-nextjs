"use server";

import { todoFormSchema } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
};
export const createTodoAction = async ({
  title,
  body,
  completed,
}: z.infer<typeof todoFormSchema>) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
    },
  });
  revalidatePath("/");
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};
