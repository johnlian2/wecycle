import { PageTitle } from "../Elements/PageTitle";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

export function SleepPage() {
  return (
    <>
      <PageTitle title="Sleep & Energy" />
      <div
        style={{
          width: "60%",
          height: "60%",
          margin: "auto",
        }}
      >
        <Pie
          data={{
            labels: ["Awake", "Asleep"],
            datasets: [
              {
                data: [8, 16],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </div>
    </>
  );
}
