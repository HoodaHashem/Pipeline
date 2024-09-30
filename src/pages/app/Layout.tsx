import { Outlet } from "react-router-dom";
import Modal from "../../components/Ui/Modal";
import InternalServerError from "../../components/Ui/InternalServerError";
import Sidebar from "../../components/App/Sidebar/Sidebar";
import useModal from "../../hooks/useModal";

const AppLayout = () => {
  const { isModalOpen, setIsModalOpen } = useModal();
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
