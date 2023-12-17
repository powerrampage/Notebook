import { FC, useState } from "react";
import Image from "next/image";
import { ButtonGroup, Input } from "@nextui-org/react";
import { Button, Container } from "@/components";
import { Twitter, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const blogItems = [
  { title: "Travel", link: "#" },
  { title: "Technology", link: "#" },
  { title: "Lifestyle", link: "#" },
  { title: "Fashion", link: "#" },
  { title: "Business", link: "#" },
];

const quickLinkItems = [
  { title: "FAQ", link: "#" },
  { title: "Terms & Conditions", link: "#" },
  { title: "Support", link: "#" },
  { title: "Privacy Policy", link: "#" },
];

export const Footer: FC = () => {
  return (
    <footer className="py-[66px] dark:bg-dark-bg">
      <Container>
        <nav className="grid grid-cols-4 gap-16">
          <div>
            <Image
              src="/logo.svg"
              alt="image"
              className="mb-6"
              width={119}
              height={27}
            />
            <p>
              Did you come here for something in particular or just general
              Riker
            </p>
          </div>
          <div>
            <h3 className="mb-6 bold font-semibold">Blogs</h3>
            <ul>
              {blogItems.map(({ link, title }) => (
                <li key={title} className="mb-4">
                  <Link
                    className="inline-flex text-[#555] hover:text-primary transition-colors"
                    href={link}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-semibold">Quick Links</h3>
            <ul>
              {quickLinkItems.map(({ link, title }) => (
                <li key={title} className="mb-4">
                  <Link
                    className="inline-flex text-[#555] hover:text-primary transition-colors"
                    href={link}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-semibold">Subscribe for newsletter</h3>
            <div className="flex mb-[42px]">
              <Input className="rounded-l-lg" placeholder="Your Email" />
              <Button className="rounded-r-lg">Subscribe</Button>
            </div>
            <h3 className="mb-[26px] font-semibold">Follow On:</h3>
            <ButtonGroup className="gap-3">
              <Button className="!p-1 h-fit min-w-fit">
                <Twitter />
              </Button>
              <Button className="!p-1 h-fit min-w-fit">
                <Facebook />
              </Button>
              <Button className="!p-1 h-fit min-w-fit">
                <Instagram />
              </Button>
            </ButtonGroup>
          </div>
        </nav>
      </Container>
    </footer>
  );
};
