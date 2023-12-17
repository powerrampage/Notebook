import { FC } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Button } from "@/components";
import Link from "next/link";
import Navigation from "./navigation";
import ThemeSwitcher from "./theme-switcher";
import Image from "next/image";

export const Header: FC = () => {
  return (
    <Navbar className="bg-primary-light text-secondary" maxWidth="xl">
      <Navigation />
      <NavbarBrand className="justify-center">
        <Image src="/logo.svg" alt="image" priority width={119} height={27} />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
