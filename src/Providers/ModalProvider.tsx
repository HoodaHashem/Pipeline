import { ReactNode, useState } from "react";
import ModalContext from "../Contexts/ModalContext";

interface IProp {
  children: ReactNode;
}
export const ModalProvider = ({ children }: IProp) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
