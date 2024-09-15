import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Calendar from "react-calendar";
import ovariesImage from "../assets/ovaries.png";
import { PageTitle } from "../Elements/PageTitle";
import { isDefined } from "../modules/utils";
import Joyride from "react-joyride";

const steps = [
  {
    target: ".my-first-step",
    content:
      "Select the dates of your last two periods (older first) to recieve personalized information.",
  },
];

export function CalendarPage() {
  const [offCanvasState, setOffCanvasState] = useState<null | Date>(null);
  const [lastPickedDates, setLastPickedDates] = useState<Date[]>([]);
  return (
    <>
      <Joyride steps={steps} />
      <div className="my-first-step">
        <PageTitle title="My Calendar" />
      </div>
      <Calendar
        onClickDay={(value) =>
          setLastPickedDates(lastPickedDates.concat([value]))
        }
        value={new Date()}
        calendarType="gregory"
        formatWeekday={(locale, date) =>
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ][date.getDay()] as string
        }
        formatShortWeekday={(locale, date) =>
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ][date.getDay()] as string
        }
      />
      <Offcanvas
        show={isDefined(offCanvasState)}
        onHide={() => setOffCanvasState(null)}
        placement="end"
      >
        <Offcanvas.Body
          style={{
            fontFamily: "Inter, sans-serif",
          }}
        >
          <img src={ovariesImage} />
          <p
            style={{
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "0px",
            }}
          >
            Your period is <b>irregular</b>
          </p>
          <p
            style={{
              color: "#74B0AF",
              marginBottom: "12px",
            }}
          >
            <a
              style={{
                color: "#74B0AF",
              }}
              href="#"
              className="underline-on-hover"
            >
              see more information about PCOS
            </a>
          </p>
          <p>
            PCOS stands for polycystotic ovary syndrome, a common hormonal
            condition that is caused by an imbalance of reproductive hormones.
          </p>
          <p>
            Your symptoms of:
            <ul>
              <li>missed periods ( ___ days late)</li>
              <li>weight gain</li>
            </ul>
          </p>
          <p>
            And reported symptoms of:
            <ul>
              <li>increased period cramping</li>
            </ul>
          </p>
          <p>Lead wecycle to this prediction. Read more</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
