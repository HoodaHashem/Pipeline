import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import InternalServerError from "../../components/Ui/InternalServerError";
import useInternalServerError from "../../hooks/useInternalServerError";
import { useEffect, useState } from "react";
import { isLoggedIn } from "../../lib/apiCenter";
import PrimaryLoader from "../../components/Ui/PrimaryLoader";
const AuthLayout = () => {
  const { isInternalServerError, setIsInternalServerError } =
    useInternalServerError();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  const authenticate = async () => {
    const result = await isLoggedIn();
    console.log(result);
    if (result.status === "success") {
      setIsAuth(true);
    }
    if (result.status === "fail") {
      setIsAuth(false);
    }
    if (result.status === "error") {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  if (isAuth === null) return <PrimaryLoader />;

  if (isAuth === true) return <Navigate to={"/app"} replace />;

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
