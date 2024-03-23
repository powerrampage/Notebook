import { prisma } from ".";

export const getCategoryById = async (categoryId: number) => {
  return await prisma.category.findUnique({
    where: { id: categoryId },
  });
};

export const getAllCategories = async () => {
  return await prisma.category.findMany();
};
