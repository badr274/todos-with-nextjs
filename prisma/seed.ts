import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.createMany({
  //   data: Array.from({ length: 20 }, () => {
  //     return {
  //       email: faker.internet.email(),
  //       name: faker.internet.username(),
  //     };
  //   }),
  // });
  await prisma.todo.createMany({
    data: Array.from({ length: 20 }, () => {
      return {
        title: faker.lorem.words({ max: 5, min: 1 }),
        body: faker.lorem.words({ max: 10, min: 2 }),
      };
    }),
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
