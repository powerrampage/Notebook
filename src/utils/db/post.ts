import { Post } from "@prisma/client";
import { prisma } from ".";
import { getCategoryById } from "./category";
import { getUserById } from "./user";
import dayjs from "dayjs";
import { RECENTLY_PERIOD_DAY, UI_DATE_FORMAT } from "@/constants";

export const getPostById = async (postId: number) => {
  return await prisma.post.findUnique({
    where: { id: postId },
  });
};

export const _transformPostData = async (posts: Post[]) => {
  return await Promise.all(
    posts.map(
      async ({ authorId, categoryId, createdAt, updatedAt, ...item }) => {
        return {
          ...item,
          categories: [(await getCategoryById(categoryId!))?.name!],
          user: await getUserById(authorId),
          createdAt: dayjs(createdAt).format(UI_DATE_FORMAT),
          updatedAt: dayjs(updatedAt).format(UI_DATE_FORMAT),
        };
      }
    )
  );
};

export const getAllPosts = async () => {
  const posts = await prisma.post.findMany({});

  return await _transformPostData(posts);
};

export const getRecentlyPosts = async () => {
  const posts = await prisma.post.findMany({
    where: {
      createdAt: {
        gte: dayjs().subtract(RECENTLY_PERIOD_DAY, "day").toDate(),
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return await _transformPostData(posts);
};
