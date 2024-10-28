import { useEffect, useState } from "react";
import fetchWrapper from "../../lib/apiCenter/fetchWrapper";
import { END_POINTS } from "../../lib/apiCenter/apiConfig";
import { Navigate } from "react-router-dom";
import PrimaryLoader from "../../components/Ui/PrimaryLoader";

const ServerDown = () => {
  const [isHealthy, setIsHealthy] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    const checkHealth = async () => {
      return await fetchWrapper({
        url: END_POINTS.GET_HEALTH,
        options: { method: "GET" },
      });
    };
    const getHealth = async () => {
      setIsLoading(true);
      const result = await checkHealth();
      setIsLoading(false);

      if (result.status === "success") setIsHealthy(true);
    };
    getHealth();
  });
  if (isLoading) return <PrimaryLoader />;
  if (isHealthy) return <Navigate to={"/app"} />;
  if (!isHealthy)
    return (
      <div className="bg-bg min-h-screen overflow-auto flex flex-col lg:flex-row justify-center items-center p-10 lg:p-20">
        <div className="flex flex-col justify-center items-center text-center space-y-5 lg:w-1/2">
          <img src="./logo.svg" alt="logo" className="w-1/2 lg:w-2/3 mb-4" />
          <h1 className="text-3xl lg:text-4xl font-bold text-second">
            Oops! Something Went Wrong
          </h1>
          <p className="text-lg lg:text-xl text-text">
            Our servers are currently experiencing issues. We're working to fix
            this as soon as possible. Please try again later.
          </p>
        </div>

        <div className="flex justify-center items-center mt-10 lg:mt-0 lg:w-1/2">
          <img
            src="./serverError.svg"
            alt="server error"
            className="w-3/4 lg:w-full"
          />
        </div>
      </div>
    );
};
export default ServerDown;
