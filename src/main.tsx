import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { ModalProvider } from "./components/Providers/ModalProvider.tsx";
import { LoadingProvider } from "./components/Providers/LoadingProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoadingProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </LoadingProvider>
  </StrictMode>,
);
