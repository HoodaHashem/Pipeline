import { ReactNode, useState } from "react";
import LoadingContext from "../contexts/LoadingContext";

interface IProp {
  children: ReactNode;
}
export const LoadingProvider = ({ children }: IProp) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
