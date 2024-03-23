import { ComponentProps, FC, PropsWithChildren } from "react";
import classes from "./tag.module.scss";
import clsx from "clsx";

export interface TagProps extends ComponentProps<"div"> {
  active?: boolean;
}

export const Tag: FC<PropsWithChildren<TagProps>> = ({
  children,
  active,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(className, classes.tag, active && classes.tagActive)}
    >
      {children}
    </div>
  );
};
