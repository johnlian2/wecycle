import { useAppStore } from "../modules/utils";
import wecycleLogo from "../assets/wecycle_logo.png";
import { useShallow } from "zustand/react/shallow";

export function Header() {
  const { page, setPage } = useAppStore(
    useShallow((state) => ({
      page: state.page,
      setPage: state.setPage,
    }))
  );
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
      <a
        href="/wecycle/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img
          src={wecycleLogo}
          style={{
            width: "40px",
            height: "40px",
          }}
        />
        <span
          className="fs-4"
          style={{
            fontFamily: "Newsreader",
            color: "#F0C7BC",
          }}
        >
          &nbsp;&nbsp;wecycle
        </span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <span
            onClick={() => setPage("Calendar")}
            className="nav-link hoverLink"
          >
            My Calendar
          </span>
        </li>
        <li className="nav-item">
          <span onClick={() => setPage("Sleep")} className="nav-link hoverLink">
            Sleep & Energy
          </span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => setPage("CalorieLog")}
            className="nav-link hoverLink"
          >
            Nutrition Log
          </span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => setPage("Assistant")}
            className="nav-link hoverLink"
          >
            Assistant
          </span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => setPage("Home")}
            className="nav-link active"
            style={{
              backgroundColor: "#F0C7BC",
              fontSize: "20px",
              cursor: "pointer",
            }}
            aria-current="page"
          >
            HOME
          </span>
        </li>
      </ul>
    </header>
  );
}
