import { createContext } from "react";

interface IProp {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalContext = createContext<IProp>({
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export default ModalContext;
