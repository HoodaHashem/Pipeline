import { Outlet } from "react-router-dom";
import Modal from "../../components/Ui/Modal";
import InternalServerError from "../../components/Ui/InternalServerError";
import useInternalServerError from "../../hooks/useInternalServerError";
import Sidebar from "../../components/App/Sidebar";
import useUpcomingFeature from "../../hooks/useUpcomingFeature";
import UpcomingFeature from "../../components/Ui/UpcomingFeature";

const AppLayout = () => {
  const { isInternalServerError, setIsInternalServerError } =
    useInternalServerError();
  const { isOpen, setIsOpen } = useUpcomingFeature();
  return (
    <div className="transition-all duration-500 bg-bg flex flex-row h-screen overflow-hidden">
      <Sidebar />
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <UpcomingFeature close={() => setIsOpen(false)} />
      </Modal>

      <InternalServerError
        open={isInternalServerError}
        onClose={() => setIsInternalServerError(false)}
      />
      <Outlet />
    </div>
  );
};

export default AppLayout;
