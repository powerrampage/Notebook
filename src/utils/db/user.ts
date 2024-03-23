import { prisma } from ".";

export const getUserById = async (userId: number) => {
  return await prisma.user.findUnique({
    where: { id: userId },
  });
};

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};
