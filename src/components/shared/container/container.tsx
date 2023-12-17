import { FC, PropsWithChildren } from "react";

export interface ContainerProps {}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
}) => {
  return <div className="max-w-screen-xl mx-auto px-4">{children}</div>;
};
