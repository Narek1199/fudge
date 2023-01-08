import { ReactNode } from "react";

const Box = ({
  classes,
  children,
}: {
  classes: string;
  children: ReactNode;
}) => <div className={`flex rounded ${classes}`}>{children}</div>;

export default Box;
