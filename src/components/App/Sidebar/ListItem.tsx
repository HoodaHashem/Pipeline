import { ReactNode } from "react";

interface IProp {
  children: ReactNode;
}
const ListItem = ({ children }: IProp) => {
  return (
    <li className="p-3 rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
      {children}
    </li>
  );
};

export default ListItem;
