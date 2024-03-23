import { ComponentProps, FC, PropsWithChildren } from "react";
import classes from "./category-badge.module.scss";
import clsx from "clsx";

export interface CategoryBadgeProps extends ComponentProps<"div"> {
  active?: boolean;
}

export const CategoryBadge: FC<PropsWithChildren<CategoryBadgeProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={clsx(className, classes.badge)}>
      {children}
    </div>
  );
};
