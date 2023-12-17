"use client";
import {
  Accordion,
  AccordionProps,
  AccordionItem,
  AccordionItemProps,
} from "@nextui-org/react";
import Image from "next/image";
import { ForwardRefExoticComponent, RefAttributes, forwardRef } from "react";
import IconMinus from "@/assets/images/minus.svg";
import IconPlus from "@/assets/images/plus.svg";
import "./collapse.scss";

export interface CollapseProps
  extends Omit<AccordionProps, "items" | "children"> {
  items?: Partial<AccordionItemProps>[];
  children?: never;
}

export type CollapseRef = HTMLDivElement | null;

export const Collapse = forwardRef<CollapseRef, CollapseProps>(
  ({ items, ...props }, ref) => {
    return (
      <Accordion {...props} ref={ref}>
        {items?.length ? (
          items.map(({ key, ...props }) => (
            <AccordionItem
              key={key}
              {...props}
              classNames={{
                ...props.classNames,
                heading: "collapse-heading px-[18px]",
                content: "px-[20px] text-[15px]"
              }}
              indicator={({ isOpen }) =>
                isOpen ? (
                  <Image src={IconMinus} alt="close" className="rotate-90" />
                ) : (
                  <Image src={IconPlus} alt="open" />
                )
              }
            />
          ))
        ) : (
          <></>
        )}
      </Accordion>
    );
  }
) as CompoundedComponent;

interface CompoundedComponent
  extends ForwardRefExoticComponent<
    CollapseProps & RefAttributes<CollapseRef>
  > {
  Item: typeof AccordionItem;
}

Collapse.displayName = "Collapse";
Collapse.Item = AccordionItem;
