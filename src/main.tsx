import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { ModalProvider } from "./Providers/ModalProvider.tsx";
import { LoadingProvider } from "./Providers/LoadingProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoadingProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </LoadingProvider>
  </StrictMode>,
);
