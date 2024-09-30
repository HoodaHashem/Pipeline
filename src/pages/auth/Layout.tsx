import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import Modal from "../../components/Ui/Modal";
import { useContext } from "react";
import ModalContext from "../../lib/Contexts/ModalContext";
import InternalServerError from "../../components/Ui/InternalServerError";

const AuthLayout = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  return (
    <div className="h-screen bg-bg">
      <Navbar />
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <InternalServerError close={() => setIsModalOpen(false)} />
      </Modal>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
