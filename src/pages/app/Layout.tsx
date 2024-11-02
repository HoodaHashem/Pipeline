import { Navigate, Outlet } from "react-router-dom";
import Modal from "../../components/Ui/Modal";
import InternalServerError from "../../components/Ui/InternalServerError";
import useInternalServerError from "../../hooks/useInternalServerError";
import Sidebar from "../../components/App/Sidebar";
import useUpcomingFeature from "../../hooks/useUpcomingFeature";
import UpcomingFeature from "../../components/Ui/UpcomingFeature";
import { useEffect, useState } from "react";
import PrimaryLoader from "../../components/Ui/PrimaryLoader";
import { END_POINTS } from "../../lib/apiCenter/apiConfig";

const AppLayout = () => {
  const { isInternalServerError, setIsInternalServerError } =
    useInternalServerError();
  const { isOpen, setIsOpen } = useUpcomingFeature();
  const [isAuth, setIsAuth] = useState<boolean | null | "serverDown">(null);

  const authenticate = async () => {
    const response = await fetch(END_POINTS.IS_LOGGED_IN, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      setIsAuth(true);
    }

    if (response.status === 401) {
      setIsAuth(false);
    }

    if (response.status === 500) {
      setIsAuth("serverDown");
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  if (isAuth === null) return <PrimaryLoader />;

  if (isAuth === "serverDown") return <Navigate to={"/server-down"} />;

  if (isAuth === false) return <Navigate to={"/auth"} />;

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
