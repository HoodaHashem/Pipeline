import { Outlet } from "react-router-dom";
import Modal from "../../components/Ui/Modal";
import InternalServerError from "../../components/Ui/InternalServerError";
import Sidebar from "../../components/App/Sidebar/Sidebar";
import useInternalServerError from "../../hooks/useInternalServerError";

const AppLayout = () => {
  const { isInternalServerError, setIsInternalServerError } =
    useInternalServerError();
  return (
    <div className="bg-bg flex flex-row ">
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
