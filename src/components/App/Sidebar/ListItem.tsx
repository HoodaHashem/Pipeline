import { ReactNode } from "react";
import useUpcomingFeature from "../../../hooks/useUpcomingFeature";

interface IProp {
  children: ReactNode;
}
const ListItem = ({ children }: IProp) => {
  const { setIsOpen } = useUpcomingFeature();

  return (
    <li
      className="p-3 rounded-md hover:bg-gray-400 dark:hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
      {children}
    </li>
  );
};

export default ListItem;
