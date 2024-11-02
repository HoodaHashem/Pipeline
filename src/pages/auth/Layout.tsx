import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import InternalServerError from "../../components/Ui/InternalServerError";
import useInternalServerError from "../../hooks/useInternalServerError";
import { useEffect, useState } from "react";
import PrimaryLoader from "../../components/Ui/PrimaryLoader";
import { END_POINTS } from "../../lib/apiCenter/apiConfig";

const AuthLayout = () => {
  const { isInternalServerError, setIsInternalServerError } =
    useInternalServerError();
  const [isAuth, setIsAuth] = useState<boolean | null | "serverDown">(null);

  const authenticate = async () => {
    const response = await fetch(END_POINTS.IS_LOGGED_IN, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
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

  if (isAuth === true) return <Navigate to={"/app"} replace />;

  if (isAuth === "serverDown") return <Navigate to={"/server-down"} />;

  return (
    <div className="h-screen bg-bg ">
      <Navbar />
      <InternalServerError
        open={isInternalServerError}
        onClose={() => setIsInternalServerError(false)}
      />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
