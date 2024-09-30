import React from "react";

interface IProp {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalContext = React.createContext<IProp>({
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export default ModalContext;
