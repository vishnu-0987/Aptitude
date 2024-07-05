import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Concepts from "../../Pages/Concepts";
import Formulaes from "../../Pages/Formulaes";
import Practice from "../../Pages/Practice";
import RealLife from "../../Pages/RealLife";
import Header from "../Header";
import "./index.css";

const topicDescription = {
  clock:
    "Clock reasoning is a concept that involves understanding and manipulating the properties of clocks or timekeeping devices to solve problems or make logical deductions. It is often used in puzzles, logical reasoning tests, and mathematical problems that require the analysis of time-related information. Clock reasoning questions can test a variety of skills, including the ability to calculate the angles between the hands of a clock, determine the time at which the hands of a clock will overlap or form a straight line, and compute the duration between specific times. These problems may also involve understanding the mechanics of different types of clocks, such as analog and digital clocks, and interpreting various time-related scenarios.",
  calender:
    "A calendar is a system that organizes time into days, weeks, months, and years. It is widely used for tracking and planning various activities, events, and appointments. In addition to serving as a tool for time management, calendars have several real-life applications that demonstrate their importance and utility. They help individuals and organizations schedule meetings, set deadlines, and manage workloads effectively. Calendars are essential in fields such as education, where they structure the academic year and schedule exams and holidays.",
  "odd-man-out":
    "Odd man out refers to a concept or situation where one item or individual stands out or differs from the others in a group or set. It represents an anomaly or exception that does not conform to the pattern or characteristics of the rest. In logical reasoning and puzzle-solving, identifying the odd man out involves recognizing the unique attribute or feature that sets one element apart from the others.",
  "order-and-ranking":
    "Order and ranking refer to the arrangement or placement of items, entities, or individuals based on a specific criterion or criteria. It involves organizing elements in a particular sequence or assigning them relative positions to establish a hierarchy or precedence. This concept is widely used in various fields, including education, where students may be ranked based on academic performance, and sports, where teams or athletes are ranked according to their achievements or scores.",
  "statement-and-argument":
    "Statement and argument are fundamental components of logical reasoning and critical thinking. A statement is an assertion or claim that presents a fact, opinion, or proposition, while an argument is a set of statements that provide evidence or reasoning to support or refute a claim. In logical reasoning, evaluating statements and arguments involves analyzing the validity, strength, and relevance of the presented information.",
};

const TopicPage = () => {
  const { topic } = useParams();
  const [selected, setSelected] = useState("real-life");

  const renderBottom = () => {
    switch (selected) {
      case "real-life":
        return <RealLife topic={topic} />;
      case "concepts":
        return <Concepts topic={topic} />;
      case "formulaes":
        return <Formulaes topic={topic} />;
      case "practice":
        return <Practice topic={topic} />;

      default:
        return null;
    }
  };

  return (
    <div className="topic-main-container">
      <Header />
      <div className="topic-sub-container">
        <div className="left-container">
          <img src={`${process.env.PUBLIC_URL}/${topic}pic.jpg`} alt="Clock" />
          <p>{topicDescription[topic]}</p>
          <div className="buttons-container">
            <button
              type="button"
              onClick={() => setSelected("concepts")}
              className={`${selected === "concepts" ? "selectedCat" : ""}`}
            >
              Concepts
            </button>
            {topic !== "odd-man-out" &&
              topic !== "statement-and-argument" &&
              topic !== "logical-problems" && (
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
          </div>
          <div className="bottom-content-container">{renderBottom()}</div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/${topic}pic1.jpg`}
          alt="time pic"
          className="right-pic"
        />
      </div>
    </div>
  );
};

export default TopicPage;
