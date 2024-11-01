import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { LoadingProvider } from "./providers/LoadingProvider";
import { InternalServerProvider } from "./providers/InternalServerProvider.tsx";
import UpcomingFeatureProvider from "./providers/UpcomingFeatureProvider.tsx";
import SocketProvider from "./providers/SocketProvider.tsx";
import UserProvider from "./providers/UserProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InternalServerProvider>
      <UserProvider>
        <SocketProvider>
          <LoadingProvider>
            <UpcomingFeatureProvider>
              <App />
            </UpcomingFeatureProvider>
          </LoadingProvider>
        </SocketProvider>
      </UserProvider>
    </InternalServerProvider>
  </StrictMode>,
);
