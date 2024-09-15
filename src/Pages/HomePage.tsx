import "../home.css";
import info1 from "../assets/info1.png";
import { useAppStore } from "../modules/utils";
import { useShallow } from "zustand/react/shallow";
import { useState } from "react";

export function HomePage() {
  const [mouseInButton, setMouseInButton] = useState(false);
  const { page, setPage } = useAppStore(
    useShallow((state) => ({
      page: state.page,
      setPage: state.setPage,
    }))
  );
  return (
    <div className="homePage">
      <header>
        <nav className="navbar">
          <span className="hoverLink" onClick={() => setPage("Calendar")}>
            My Calendar
          </span>
          <span className="hoverLink" onClick={() => setPage("CalorieLog")}>
            Nutrition Log
          </span>
          <div className="logo">wecycle</div>
          <span className="hoverLink" onClick={() => setPage("Sleep")}>
            Sleep & Energy
          </span>
          <span className="hoverLink" onClick={() => setPage("Assistant")}>
            Assistant
          </span>
        </nav>
      </header>

      <section
        className={
          mouseInButton ? "main-section main-section-alt-image" : "main-section"
        }
        id="main"
      >
        <div className="main-container">
          <h1>
            Prioritize Wellness, Empower Every Woman: Your Health, Your Strength
          </h1>

          <button
            className="cta-button"
            onClick={() => setPage("Calendar")}
            onMouseEnter={() => setMouseInButton(true)}
            onMouseLeave={() => setMouseInButton(false)}
          >
            Get Started
          </button>
        </div>
      </section>

      <section
        className="image-section first-image"
        style={{ backgroundColor: "#f8e7a2" }}
      >
        <div className="first-image-content">
          <h2> Good morning! </h2>

          <p>
            <b> Here's your health summary for the day: </b> <br /> <br />
            <b> Sleep: </b> you got <b> 7.5 </b> hours of sleep last night and
            met your daily goal. Good job! <br /> <br />
            <b> Cycle: </b> you are currently in your <b> luteal </b> phase,
            which means your body is preparing your uterus for pregnancy! Your{" "}
            <a href=""> progesterone </a> levels are high and your{" "}
            <a href=""> cervical mucus </a> levels will dry up. <br /> <br />
            <b> Nutrition: </b> you have currently had <b> 0 </b> calories
            today. Log your calories{" "}
            <a href="#" onClick={() => setPage("CalorieLog")}>
              {" "}
              here{" "}
            </a>
            . You have <b> 2300 </b> calories remaining if you would like to
            meet your daily calorie goal. <br /> <br />
            Since you are in your luteal phase, there is a high chance that you
            will be craving chocolates, sweets, and salty foods due to a drop in
            your serotonin 3 levels based on your previous calorie logs at this
            time of the month and may also see some weight gain leading up to
            your period. Some healthy alternatives to supplement your cravings
            are almonds, cottage cheese, beef jerky, or hard-boiled eggs. <br />{" "}
            <br />
          </p>
        </div>
      </section>

      <section
        className="image-section second-image"
        style={{ backgroundColor: "#f1c4d2" }}
      ></section>

      <section
        className="info-section"
        id="information"
        style={{ backgroundColor: "antiquewhite" }}
      >
        <h2>Information</h2>

        <p>
          Wecycle is the <b> only </b> holistic menstrual, physical, and
          wellbeing tracking system that encorporates data about your menstrual
          cycle, nutrition information, exercise, and sleep patterns into one
          personalized assistant that helps you take charge of your body and
          energy levels, as well as encouraging proper nutrition to prevent
          deficiences and overall health. Wecyle can also act as a preliminary
          prediction service using technology to evaluate your cycle data and
          other health information to detect abnormalities in your cycle or
          weight changes that could be an indicator of an underlying health
          problem that would otherwise go undetected. Every day, new research is
          discovered on how almost every system in our body is connected to
          another, so stay connected to you and get one step closer to the
          healthcare of the future with Wecycle! For more information and to
          chat with our personalized health assistant who can answer questions
          about general women's health questions to giving personalized
          recommendations for you,{" "}
          <a href="#" onClick={() => setPage("Assistant")}>
            {" "}
            click here{" "}
          </a>
          .
        </p>

        <img src={info1} alt="Descriptive text" className="info-image" />
      </section>
    </div>
  );
}
