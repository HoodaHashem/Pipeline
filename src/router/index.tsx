import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../pages";
import AuthPage from "../pages/auth";
import AuthLayout from "../pages/auth/Layout";
import App from "../pages/app";
import AppLayout from "../pages/app/Layout";
import ServerDown from "../pages/serverDown";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthPage />} />
      </Route>
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<App />} />
      </Route>
      <Route path="/server-down">
        <Route index element={<ServerDown />} />
      </Route>
    </>,
  ),
);

export default router;
