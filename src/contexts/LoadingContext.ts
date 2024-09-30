import React from "react";

interface IProp {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoadingContext = React.createContext<IProp>({
  isLoading: false,
  setIsLoading: () => {},
});

export default LoadingContext;
