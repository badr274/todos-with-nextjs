"use server";

import { todoFormSchema } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany();
};
export const createTodoAction = async ({
  title,
  body,
}: // completed,
z.infer<typeof todoFormSchema>) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      // completed,
    },
  });
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async () => {};
