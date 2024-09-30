import { RouterProvider } from "react-router-dom";
import router from "./router";
import PrimaryLoader from "./components/Ui/PrimaryLoader/PrimaryLoader";
function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <PrimaryLoader />
    </>
  );
}

export default App;
