import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { LoadingProvider } from "./providers/LoadingProvider";
import { InternalServerProvider } from "./providers/InternalServerProvider.tsx";
import UpcomingFeatureProvider from "./providers/UpcomingFeatureProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InternalServerProvider>
      <LoadingProvider>
        <UpcomingFeatureProvider>
          <App />
        </UpcomingFeatureProvider>
      </LoadingProvider>
    </InternalServerProvider>
  </StrictMode>,
);
