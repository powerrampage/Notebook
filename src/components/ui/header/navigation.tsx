"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

const Navigation: FC = () => {
  return (
    <NavbarContent className="hidden sm:flex gap-10">
      <Dropdown>
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className="text-[15px] text-[dark] bg-[transparent] px-0 min-w-0"
              // endContent={<Image src={arrowDown} alt="arrow" />}
            >
              Homepages
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          aria-label="ACME features"
          className="w-[340px]"
          itemClasses={{
            base: "gap-4",
          }}
        >
          <DropdownItem
            key="autoscaling"
            description="ACME scales apps to meet user demand, automagically, based on load."
          >
            Autoscaling
          </DropdownItem>
          <DropdownItem
            key="usage_metrics"
            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
          >
            Usage Metrics
          </DropdownItem>
          <DropdownItem
            key="production_ready"
            description="ACME runs on ACME, join us and others serving requests at web scale."
          >
            Production Ready
          </DropdownItem>
          <DropdownItem
            key="99_uptime"
            description="Applications stay on the grid with high availability and high uptime guarantees."
          >
            +99% Uptime
          </DropdownItem>
          <DropdownItem
            key="supreme_support"
            description="Overcome any challenge with a supporting team ready to respond."
          >
            +Supreme Support
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavbarItem>
        <Link href="#">About</Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="#" className="text-[15px] text-[dark]">
          Categories
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="#" className="text-[15px] text-[dark]">
          Pages
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};

export default Navigation;
