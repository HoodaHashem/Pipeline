import { Outlet } from "react-router-dom";
import Modal from "../../components/Ui/Modal";
import { useContext } from "react";
import ModalContext from "../../lib/Contexts/ModalContext";
import InternalServerError from "../../components/Ui/InternalServerError";
import Sidebar from "../../components/App/Sidebar/Sidebar";

const AppLayout = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  return (
    <div className="h-screen bg-bg">
      <Sidebar />
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <InternalServerError close={() => setIsModalOpen(false)} />
      </Modal>
      <Outlet />
    </div>
  );
};

export default AppLayout;
