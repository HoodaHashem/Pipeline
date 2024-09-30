import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import Modal from "../../components/Ui/Modal";
import InternalServerError from "../../components/Ui/InternalServerError";
import useInternalServerError from "../../hooks/useInternalServerError";
const AuthLayout = () => {
  const { isInternalServerError, setIsInternalServerError } =
    useInternalServerError();
  return (
    <div className="h-screen bg-bg">
      <Navbar />
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

export default AuthLayout;
