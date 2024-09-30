import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import Modal from "../../components/Ui/Modal";
import InternalServerError from "../../components/Ui/InternalServerError";
import useModal from "../../hooks/useModal";

const AuthLayout = () => {
  const { isModalOpen, setIsModalOpen } = useModal();
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
