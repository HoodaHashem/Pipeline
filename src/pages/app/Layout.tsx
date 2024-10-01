import { Outlet } from "react-router-dom";
import Modal from "../../components/Ui/Modal";
import InternalServerError from "../../components/Ui/InternalServerError";
import useInternalServerError from "../../hooks/useInternalServerError";
import Sidebar from "../../components/App/Sidebar";

const AppLayout = () => {
  const { isInternalServerError, setIsInternalServerError } =
    useInternalServerError();
  return (
    <div className="transition-all duration-500 bg-bg flex flex-row ">
      <Sidebar />

      <Modal
        open={isInternalServerError}
        onClose={() => setIsInternalServerError(false)}
      >
        <InternalServerError close={() => setIsInternalServerError(false)} />
      </Modal>
      <Outlet />
    </div>
  );
};

export default AppLayout;
