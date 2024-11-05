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
    try {
      const response = await fetch(END_POINTS.IS_LOGGED_IN, {
        method: "GET",
        credentials: "include",
      });

      if (response.status === 401) {
        setIsAuth(false);
      }

      if (response.status === 500) {
        setIsAuth("serverDown");
      }
      if (response.status === 200) {
        setIsAuth(true);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (
          error.message.includes("Failed to fetch") ||
          error.message.includes("NetworkError")
        ) {
          window.location.href = "/server-down";
          return;
        }
      }
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  if (isAuth === null) return <PrimaryLoader />;

  if (isAuth === true) return <Navigate to={"/app"} />;

  if (isAuth === "serverDown") return <Navigate to={"/server-down"} />;
  if (isAuth === false) {
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
  }
};

export default AuthLayout;
