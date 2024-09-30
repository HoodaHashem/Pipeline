import { useContext } from "react";
import LoadingContext from "../contexts/LoadingContext";

const useLoad = () => {
  const context = useContext(LoadingContext);
  return context;
};

export default useLoad;
