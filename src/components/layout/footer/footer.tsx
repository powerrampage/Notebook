import { FC } from "react";
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
    <footer className="py-10 md:py-[66px] dark:bg-dark-bg">
      <Container>
        <nav
          className="grid lg:gap-20
            md:grid-cols-[minmax(150px,_236px)_minmax(140px,_1fr)_minmax(120px,_1fr)_minmax(230px,_395px)] md:gap-8
            sm:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] sm:gap-10
            grid-cols-2 gap-8
          "
        >
          <div className="col-span-2 sm:col-auto">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="image"
                className="mb-6"
                width={119}
                height={27}
              />
            </Link>
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
                    className="inline-flex transition-colors text-gray dark:text-white hover:text-primary dark:hover:text-primary"
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
                    className="inline-flex transition-colors text-gray dark:text-white hover:text-primary dark:hover:text-primary"
                    href={link}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-3 md:col-auto">
            <h3 className="mb-6 font-semibold">Subscribe for newsletter</h3>
            <div className="flex sm:mb-[42px] mb-8">
              <Input
                type="email"
                className="rounded-l-lg"
                placeholder="Your Email"
                classNames={{
                  input: "!text-[#777]",
                  inputWrapper: "rounded-r-none !bg-primary-light",
                }}
              />
              <Button className="rounded-r-lg rounded-l-none h-auto !w-[145px]">
                Subscribe
              </Button>
            </div>
            <h3 className="mb-[26px] font-semibold">Follow On:</h3>
            <ButtonGroup className="gap-3">
              <Button
                as="a"
                accessKey="t"
                href="#"
                target="_blank"
                className="!p-1 h-fit min-w-fit"
                aria-label="Social Twitter"
              >
                <Twitter />
              </Button>
              <Button
                as="a"
                accessKey="f"
                href="#"
                target="_blank"
                className="!p-1 h-fit min-w-fit"
                aria-label="Social Facebook"
              >
                <Facebook />
              </Button>
              <Button
                as="a"
                accessKey="i"
                href="#"
                target="_blank"
                className="!p-1 h-fit min-w-fit"
                aria-label="Social Instagram"
              >
                <Instagram />
              </Button>
            </ButtonGroup>
          </div>
        </nav>
      </Container>
    </footer>
  );
};
