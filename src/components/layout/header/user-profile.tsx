"use client";

import { Button } from "@/components";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarContent,
  NavbarItem,
  Skeleton,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserProfile: FC = () => {
  const { status, data } = useSession();
  const router = useRouter();

  function onLogout() {
    signOut();
    // router.push("/auth/sign-in");
  }

  if (status === "loading") {
    return <Skeleton className="flex rounded-full w-10 h-10" />;
  }

  if (status === "authenticated") {
    const { image, email, name } = data?.user!;

    return (
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={name!}
              size="sm"
              src={image!}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={onLogout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    );
  }

  return (
    <>
      <NavbarItem className="hidden lg:flex">
        <Link href="/api/auth/signin">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="/auth/sign-up" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </>
  );
};

export default UserProfile;
