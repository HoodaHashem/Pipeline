import { useContext } from "react";
import InternalServerContext from "../contexts/InternalServerContext";

const useInternalServerError = () => {
  const context = useContext(InternalServerContext);
  return context;
};

export default useInternalServerError;
