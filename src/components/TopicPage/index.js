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
  "series-completion":
    "Series completion involves identifying the pattern or rule that governs a sequence of elements and using it to determine the next element in the series. This type of problem requires logical reasoning, pattern recognition, and analytical skills. Series completion questions can involve numbers, letters, symbols, or a combination of these elements.",
  "letter-and-symbol-series":
    "Letter and symbol series problems involve sequences of letters and/or symbols that follow a specific pattern or rule. The task is to identify the pattern and determine the next element in the series. These problems test the ability to recognize and apply logical rules and patterns involving alphabetical and symbolic sequences.",
  "number-series":
    "Number series problems involve sequences of numbers that follow a specific mathematical pattern or rule. The task is to identify the pattern and determine the next number in the series. These problems test numerical reasoning, pattern recognition, and mathematical skills.",
  "making-judgements":
    "Making judgments involves evaluating information, situations, or arguments to form an opinion or conclusion. This process requires critical thinking, logical reasoning, and the ability to assess the validity and relevance of the presented information. Judgments are often based on a combination of factual evidence and subjective interpretation.",
  "analyzing-arguments":
    "Analyzing arguments involves examining the structure, validity, and strength of arguments presented in a text or discussion. This process requires identifying the main claim, supporting evidence, and logical reasoning used to support or refute the claim. Analyzing arguments is essential for critical thinking and effective decision-making.",
  "statement-and-assumption":
    "Statement and assumption problems involve identifying the underlying assumptions that support a given statement. An assumption is an unstated premise that is taken for granted. These problems test the ability to recognize implicit information and evaluate the logical foundation of statements.",
  "course-of-action":
    "Course of action problems involve evaluating a situation and determining the best course of action to address it. This process requires logical reasoning, problem-solving skills, and the ability to consider the potential outcomes and consequences of different actions. Course of action questions are often used in decision-making and management contexts.",
  "statement-and-conclusion":
    "Statement and conclusion problems involve determining whether a given conclusion logically follows from a set of statements. This process requires analyzing the relationship between the statements and the conclusion, and evaluating the logical validity of the inference. These problems test deductive reasoning and critical thinking skills.",
  "cause-and-effect":
    "Cause and effect problems involve identifying the relationship between two events or phenomena, where one is the cause and the other is the effect. This process requires understanding the logical connection between events and analyzing the factors that contribute to the observed outcome. Cause and effect questions test analytical reasoning and the ability to recognize causal relationships.",
  "theme-detection":
    "Theme detection involves identifying the central theme or main idea in a text or set of statements. This process requires the ability to synthesize information, recognize patterns, and understand the overarching message or concept. Theme detection is essential for reading comprehension, critical analysis, and effective communication.",
};

const TopicPage = () => {
  const { topic } = useParams();
  const [selected, setSelected] = useState("real-life");
  window.scrollTo(0, 0);

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
            {(topic === "clock" || topic === "calender") && (
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
