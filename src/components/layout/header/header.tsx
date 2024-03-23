import { FC } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import Navigation from "./navigation";
import ThemeSwitcher from "./theme-switcher";
import Image from "next/image";
import UserProfile from "./user-profile";

export const Header: FC = () => {
  return (
    <Navbar
      className="bg-primary-light text-secondary dark:bg-dark-bg"
      maxWidth="xl"
    >
      <Navigation />
      <NavbarBrand as={Link} href="/" className="inline-flex justify-center">
        <Image src="/logo.svg" alt="image" priority width={119} height={27} />
      </NavbarBrand>
      <NavbarContent justify="end">
        <UserProfile />
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
