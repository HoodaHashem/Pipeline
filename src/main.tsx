import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { ModalProvider } from "./providers/ModalProvider";
import { LoadingProvider } from "./providers/LoadingProvider";
import { InternalServerProvider } from "./providers/InternalServerProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InternalServerProvider>
      <LoadingProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </LoadingProvider>
    </InternalServerProvider>
  </StrictMode>,
);
