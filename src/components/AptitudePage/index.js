import Concepts from "../Concepts";
import Formulaes from "../Formulaes";
import Header from "../Header";
import Practice from "../Practice";
import RealLife from "../RealLife";
import "./index.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

const topicDescription = {
  "time-and-work":
    "Time and work problems involve calculating the amount of time required for one or more individuals or machines to complete a task, given their respective work rates. These problems often require understanding concepts such as combined work rates, inverse relationships between time and work, and the efficiency of different workers or machines. Time and work questions test mathematical reasoning, problem-solving skills, and the ability to apply algebraic principles to practical scenarios.",
  "time-and-distance":
    "Time and distance problems involve calculating the time taken, distance traveled, or speed of an object moving at a constant or variable rate. These problems often require understanding relationships between speed, distance, and time, and may involve concepts such as relative speed, average speed, and different modes of transportation. Time and distance questions test mathematical reasoning, problem-solving skills, and the ability to apply algebraic principles to real-world situations.",
  "number-series":
    "Number series problems involve sequences of numbers that follow a specific mathematical pattern or rule. The task is to identify the pattern and determine the next number in the series. These problems test numerical reasoning, pattern recognition, and mathematical skills. Patterns can be based on arithmetic operations, geometric progressions, or other mathematical relationships.",
  percentages:
    "Percentage problems involve calculating the part of a whole expressed as a fraction of 100. These problems require understanding concepts such as percentage increase or decrease, converting percentages to fractions or decimals, and solving problems related to discounts, interest rates, and profit margins. Percentage questions test mathematical reasoning, problem-solving skills, and the ability to apply percentage calculations to various contexts.",
  ratios:
    "Ratio problems involve comparing two or more quantities and expressing their relative sizes as a fraction or ratio. These problems require understanding concepts such as equivalent ratios, simplifying ratios, and solving problems involving proportional relationships. Ratio questions test mathematical reasoning, problem-solving skills, and the ability to apply ratios to real-world situations.",
  proportions:
    "Proportion problems involve determining the equality of two ratios or fractions and solving for unknown values in proportional relationships. These problems require understanding concepts such as cross-multiplication, direct and inverse proportions, and scaling. Proportion questions test mathematical reasoning, problem-solving skills, and the ability to apply proportions to practical scenarios.",
};

const AptitudePage = () => {
  const { chapter } = useParams();
  const [selected, setSelected] = useState("real-life");
  window.scrollTo(0, 0);

  const renderBottom = () => {
    switch (selected) {
      case "real-life":
        return <RealLife topic={chapter} main={"aptitude"} />;
      case "concepts":
        return <Concepts topic={chapter} main={"aptitude"} />;
      case "formulaes":
        return <Formulaes topic={chapter} main={"aptitude"} />;
      case "practice":
        return <Practice topic={chapter} main={"aptitude"} />;

      default:
        return null;
    }
  };

  return (
    <div className="topic-main-container">
      <Header />
      <div className="topic-sub-container">
        <div className="left-container">
          <img
            src={`${process.env.PUBLIC_URL}/${chapter}pic.jpg`}
            alt="Clock"
          />
          <p>{topicDescription[chapter]}</p>
          <div className="buttons-container">
            <button
              type="button"
              onClick={() => setSelected("concepts")}
              className={`${selected === "concepts" ? "selectedCat" : ""}`}
            >
              Synopsis
            </button>
            {(chapter === "clock" || chapter === "calender") && (
              <button
                type="button"
                onClick={() => setSelected("formulaes")}
                className={`${selected === "formulaes" ? "selectedCat" : ""}`}
              >
                Formulaes
              </button>
            )}

            <button
              type="button"
              onClick={() => setSelected("practice")}
              className={`${selected === "practice" ? "selectedCat" : ""}`}
            >
              Practice Questions
            </button>
            <button type="button">Quiz</button>
          </div>
          <div className="bottom-content-container">{renderBottom()}</div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/${chapter}pic1.jpg`}
          alt="time pic"
          className="right-pic"
        />
      </div>
    </div>
  );
};

export default AptitudePage;
