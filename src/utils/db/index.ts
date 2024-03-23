import { PrismaClient } from "@prisma/client";

export const prisma = ((
  globalThis as typeof globalThis & {
    prisma: InstanceType<typeof PrismaClient>;
  }
).prisma ??= new PrismaClient());

export * from "./category";
export * from "./post";
export * from "./user";
