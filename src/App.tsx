import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Header } from "./Elements/Header";
import { MOBILE_WIDTH, useAppStore } from "./modules/utils";
import { useShallow } from "zustand/react/shallow";
import { CalendarPage } from "./Pages/CalendarPage";
import { SleepPage } from "./Pages/SleepPage";
import { HomePage } from "./Pages/HomePage";
import calorieLogDemo from "./assets/calorieLogDemo.mov";
import assistant from "./assets/assistant.mov";
import { PageTitle } from "./Elements/PageTitle";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: ${MOBILE_WIDTH})` });
  const { page, setPage } = useAppStore(
    useShallow((state) => ({
      page: state.page,
      setPage: state.setPage,
    }))
  );
  return (
    <QueryClientProvider client={queryClient}>
      {page === "Home" ? (
        <HomePage />
      ) : (
        <Container>
          <Header />
          {page === "CalorieLog" ? (
            <div>
              <PageTitle title="Calorie Log (video demo)" />
              <video
                style={{
                  width: "100%",
                }}
                controls
                autoPlay
                loop
              >
                <source src={calorieLogDemo} />
              </video>
            </div>
          ) : null}
          {page === "Assistant" ? (
            <div>
              <PageTitle title="Assistant (video demo)" />
              <video
                style={{
                  width: "100%",
                }}
                controls
                autoPlay
                loop
              >
                <source src={assistant} />
              </video>
              <a href="https://github.com/Osaru1/wecyclehealth">Github Repo</a>
            </div>
          ) : null}
          {page === "Calendar" ? <CalendarPage /> : null}
          {page === "Sleep" ? <SleepPage /> : null}
        </Container>
      )}
    </QueryClientProvider>
  );
}

export default App;
