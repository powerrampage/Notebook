import Image from "next/image";
import {
  Button,
  CategoryBadge,
  Container,
  PostCard,
  Tag,
  Title,
} from "@/components";
import { Avatar, ButtonGroup, Divider } from "@nextui-org/react";
import Logo from "@/assets/images/kanagawa.png";
import Link from "next/link";
import {
  CalendarDays,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { getAllPosts, getAllUsers, getRecentlyPosts, prisma } from "@/utils";

interface Post {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  time: string;
  categories: string[];
  user: { pic: string; name: string };
}

const mockData: Post[] = [
  {
    id: 1,
    title: "Design is the Mix of emotions",
    categories: ["Travel"],
    description:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into",
    image: "",
    user: { name: "Jenny kiaa", pic: "" },
    date: "12.05.2023",
    time: "",
  },
];

export default async function Home() {
  const recentlyPosts = await getRecentlyPosts();
  const users = await getAllUsers();

  console.log("recentlyPosts", recentlyPosts);

  return (
    <Container>
      <div className="flex justify-between gap-8">
        <section>
          <Title className="mb-8 mt-8">
            <Title.Mark>Recently</Title.Mark> Posted
          </Title>
          <div>
            {recentlyPosts.map(({ id, ...post }) => {
              return <PostCard key={id} {...post} />;
            })}
          </div>
        </section>
        <aside className="basis-[360px]">
          <div>
            <Title className="mb-8 mt-8">
              <Title.Mark>Top</Title.Mark> Authors
            </Title>
          </div>

          <div>
            {users.map(({ id, firstName, username, lastName, bio }) => {
              const userLink = `/${username}`;

              return (
                <article key={id} className="flex gap-6">
                  <Link
                    href={userLink}
                    className="rounded-full h-20 basis-20 bg-gray-400"
                  >
                    <Image
                      src={Logo}
                      alt="Profile image"
                      className="h-full w-full object-cover rounded-full"
                    />
                  </Link>
                  <div>
                    <Link
                      href={userLink}
                      className="font-bold text-lg hover:underline"
                    >
                      {firstName} {lastName}
                    </Link>
                    <p>{bio}</p>
                    {/* <ButtonGroup className="gap-3">
                      <Link
                        accessKey="t"
                        href="#"
                        target="_blank"
                        className="!p-1 h-fit min-w-fit"
                        aria-label="Social Twitter"
                      >
                        <Twitter />
                      </Link>
                      <Link
                        accessKey="f"
                        href="#"
                        target="_blank"
                        className="!p-1 h-fit min-w-fit"
                        aria-label="Social Facebook"
                      >
                        <Facebook />
                      </Link>
                      <Link
                        accessKey="i"
                        href="#"
                        target="_blank"
                        className="!p-1 h-fit min-w-fit"
                        aria-label="Social Instagram"
                      >
                        <Instagram />
                      </Link>
                    </ButtonGroup> */}
                  </div>
                </article>
              );
            })}
          </div>
        </aside>
      </div>
    </Container>
  );
}
