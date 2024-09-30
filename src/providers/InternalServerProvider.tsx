import { ReactNode, useState } from "react";
import InternalServerContext from "../contexts/InternalServerContext";

interface IProp {
  children: ReactNode;
}
export const InternalServerProvider = ({ children }: IProp) => {
  const [isInternalServerError, setIsInternalServerError] = useState(false);

  return (
    <InternalServerContext.Provider
      value={{ isInternalServerError, setIsInternalServerError }}
    >
      {children}
    </InternalServerContext.Provider>
  );
};
