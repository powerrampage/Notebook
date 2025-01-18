// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  // Create a new User Role (if needed)
  const role = await prisma.userRole.upsert({
    where: { name: "Admin" },
    update: {},
    create: { name: "Admin" },
  });

  // Seed some users
  const user1 = await prisma.user.create({
    data: {
      username: "john_doe",
      firstName: "John",
      lastName: "Doe",
      roleId: role.id,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: "jane_smith",
      firstName: "Jane",
      lastName: "Smith",
      roleId: role.id,
    },
  });

  // Seed categories
  const category1 = await prisma.category.create({
    data: { name: "Technology" },
  });

  const category2 = await prisma.category.create({
    data: { name: "Lifestyle" },
  });

  // Seed posts
  await prisma.post.create({
    data: {
      title: "Next.js is Amazing!",
      description:
        "Next.js allows server-side rendering and static site generation.",
      categories: ["JavaScript", "React"],
      authorId: user1.id,
      categoryId: category1.id,
    },
  });

  await prisma.post.create({
    data: {
      title: "My Life in Code",
      description:
        "A personal journey through the world of software development.",
      categories: ["Lifestyle"],
      authorId: user2.id,
      categoryId: category2.id,
    },
  });

  console.log("Seeding completed!");
}

seed()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
