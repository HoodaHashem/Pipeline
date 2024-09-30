import { ReactNode } from "react";

interface IProp {
  children: ReactNode;
}
const ListItem = ({ children }: IProp) => {
  return <li className="p-5">{children}</li>;
};

export default ListItem;
