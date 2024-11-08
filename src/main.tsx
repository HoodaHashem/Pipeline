import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { LoadingProvider } from "./providers/LoadingProvider";
import UpcomingFeatureProvider from "./providers/UpcomingFeatureProvider.tsx";
import SocketProvider from "./providers/SocketProvider.tsx";
import UserProvider from "./providers/UserProvider.tsx";
import ChatsProvider from "./providers/ChatsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <SocketProvider>
        <ChatsProvider>
          <LoadingProvider>
            <UpcomingFeatureProvider>
              <App />
            </UpcomingFeatureProvider>
          </LoadingProvider>
        </ChatsProvider>
      </SocketProvider>
    </UserProvider>
  </StrictMode>,
);
