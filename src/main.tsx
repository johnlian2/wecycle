import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary
    fallback={
      <div
        style={{
          padding: "5px",
        }}
      >
        Something went wrong while rendering the app :(
        <br />
        Please refresh and try again!
      </div>
    }
  >
    <App />
  </ErrorBoundary>
);
