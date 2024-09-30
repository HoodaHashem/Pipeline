import { createContext } from "react";

interface IProp {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoadingContext = createContext<IProp>({
  isLoading: false,
  setIsLoading: () => {},
});

export default LoadingContext;
