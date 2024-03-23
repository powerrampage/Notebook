import { FC } from "react";
import Image from "next/image";
import { Avatar, Divider } from "@nextui-org/react";
import { CategoryBadge } from "@/components";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { User } from "@prisma/client";

import Logo from "@/assets/images/kanagawa.png";

export interface PostCardProps {
  categories: string[];
  description: string;
  title: string;
  user: User | null;
  createdAt: string;
  image: string | null;
}

export const PostCard: FC<PostCardProps> = ({
  title,
  categories,
  description,
  user,
  createdAt,
}) => {
  return (
    <article className="flex gap-3 sm:gap-5 md:gap-[34px] flex-col sm:flex-row lg: mb-12">
      <Image
        src={Logo}
        alt="post-image"
        // width={266}
        // height={180}
        className="bg-[#D9D9D9] rounded-[5px] sm:w-[266px] sm:h-[180px] object-cover"
      />
      <div>
        <div className="flex gap-1 mb-2">
          {categories.map((category) => (
            <CategoryBadge key={category} className="!bg-primary-light">
              {category}
            </CategoryBadge>
          ))}
        </div>
        <Link
          href="#"
          className="block text-xl md:text-[27px] text-darker mb-2.5 sm:mb-4 font-semibold capitalize hover:underline"
        >
          {title}
        </Link>

        <div className="flex items-center space-x-2 mb-2.5 sm:mb-4 text-secondary text-xs h-3">
          <Link href="#" className="flex items-center space-x-2">
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              alt="avatar"
              className="bg-[#D9D9D9] rounded-full grow-0 shrink-0 basis-[18px] w-[18px] h-[18px] object-cover"
            />
            <p>{user?.firstName}</p>
          </Link>

          <Divider orientation="vertical" />

          <div className="flex items-center gap-[6px]">
            <CalendarDays size={15} className="text-gray" />
            <p>{createdAt}</p>
          </div>

          <Divider orientation="vertical" />

          <div className="flex items-center gap-[6px]">
            <Clock size={15} className="text-gray" />
            <p>3 min. to read</p>
          </div>
        </div>
        <p className="text-gray text-[15px]">{description}</p>
      </div>
    </article>
  );
};
