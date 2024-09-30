import { createContext, Dispatch, SetStateAction } from "react";

interface IProp {
  isInternalServerError: boolean;
  setIsInternalServerError: Dispatch<SetStateAction<boolean>>;
}

const InternalServerContext = createContext<IProp>({
  isInternalServerError: false,
  setIsInternalServerError: () => {},
});

export default InternalServerContext;
