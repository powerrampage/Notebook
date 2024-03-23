import { ComponentProps, FC, PropsWithChildren } from "react";
import classes from "./title.module.scss";
import clsx from "clsx";

interface TitleComposition {
  Mark: FC<PropsWithChildren<ComponentProps<"mark">>>;
}

export const Title: FC<PropsWithChildren<ComponentProps<"h2">>> &
  TitleComposition = ({ className, children, ...props }) => {
  return (
    <h3 {...props} className={clsx(classes.title, className)}>
      {children}
    </h3>
  );
};

export const Mark: FC<PropsWithChildren<ComponentProps<"mark">>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <mark {...props} className={clsx(classes.mark, className)}>
      {children}
    </mark>
  );
};

Title.Mark = Mark;
