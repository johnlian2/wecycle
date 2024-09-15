import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Header } from "./Elements/Header";
import { MOBILE_WIDTH, useAppStore } from "./modules/utils";
import { useShallow } from "zustand/react/shallow";
import { CalendarPage } from "./Pages/CalendarPage";
import { SleepPage } from "./Pages/SleepPage";
import { HomePage } from "./Pages/HomePage";

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
          {page === "Calendar" ? <CalendarPage /> : null}
          {page === "Sleep" ? <SleepPage /> : null}
        </Container>
      )}
    </QueryClientProvider>
  );
}

export default App;
