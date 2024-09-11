import Concepts from "../Concepts";
import Formulaes from "../Formulaes";
import Header from "../Header";
import Practice from "../Practice";
import RealLife from "../RealLife";
import "./index.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Quiz from "../Quiz";

const topicDescription = {
  "time-and-work":
    "Time and work problems involve calculating the amount of time required for one or more individuals or machines to complete a task, given their respective work rates. These problems often require understanding concepts such as combined work rates, inverse relationships between time and work, and the efficiency of different workers or machines. Time and work questions test mathematical reasoning, problem-solving skills, and the ability to apply algebraic principles to practical scenarios.",
  "time-speed-and-distance":
    "The principle of Time, Speed, and Distance can be utilized to solve unit conversion, average speed, relative speed, same direction / opposite direction problems, boats and streams, upstream and downstream problems.",
  "number-series":
    "Number series problems involve sequences of numbers that follow a specific mathematical pattern or rule. The task is to identify the pattern and determine the next number in the series. These problems test numerical reasoning, pattern recognition, and mathematical skills. Patterns can be based on arithmetic operations, geometric progressions, or other mathematical relationships.",
  "ratios-and-proportions":
    "Ratios and proportions are fundamental concepts in mathematics that involve comparing two quantities and establishing a relationship between them. These problems require an understanding of how to express, simplify, and manipulate ratios, as well as how to solve for unknown values using proportions. Applications of ratios and proportions include scaling, mixing ingredients, determining relative sizes, and converting units. These questions test a student’s ability to reason mathematically, make comparisons, and solve problems involving proportional relationships.",
  percentages:
    "Percentage problems involve calculating the part of a whole represented by a given percentage. These problems require understanding how to convert between fractions, decimals, and percentages, as well as how to apply percentages to real-world scenarios such as discounts, interest rates, and population growth.",
  "number-system":
    "Number system problems involve understanding and working with different types of numbers, including whole numbers, integers, rational numbers, and irrational numbers. These problems test a student's ability to perform arithmetic operations, factorization, and manipulation of numbers in various forms.",
  "hcf-and-lcm":
    "HCF (Highest Common Factor) and LCM (Lowest Common Multiple) problems involve finding the greatest common divisor or the least common multiple of two or more numbers. These problems test a student's understanding of divisibility, prime factorization, and the relationships between numbers.",
  average:
    "Average problems involve calculating the mean of a set of numbers. These problems require understanding how to sum a series of values and divide by the number of values to find the average. Applications include finding the average speed, temperature, or score in various contexts.",
  "arithmetic-progression":
    "Arithmetic progression problems involve sequences of numbers in which the difference between consecutive terms is constant. These problems test a student's ability to identify the common difference, calculate specific terms in the sequence, and sum the terms of the progression.",
  "simple-interest":
    "Simple interest problems involve calculating the interest earned or paid on a principal amount over a period of time at a fixed interest rate. These problems test a student's understanding of basic financial concepts and the ability to apply the simple interest formula.",
  partnership:
    "Partnership problems involve determining the distribution of profits or losses among partners who have invested different amounts of capital in a business. These problems require understanding of the proportional relationship between investment and profit or loss sharing.",
  "mixture-and-alligation":
    "Mixture and alligation problems involve finding the ratio in which two or more ingredients or substances should be mixed to achieve a desired concentration or value. These problems test a student's ability to apply the rule of alligation and solve complex mixtures.",
  "chain-rule":
    "Chain rule problems involve calculating the time required to complete a task when the rate of work is changing. These problems test a student's understanding of proportional relationships and the ability to apply the chain rule to solve work and rate problems.",
  "races-and-games":
    "Races and games problems involve calculating the outcomes of competitive events, such as races or contests, based on the relative speeds or skills of the participants. These problems test a student's understanding of relative speed, distance, and time, as well as strategic thinking.",
  logarithm:
    "Logarithm problems involve understanding and manipulating logarithmic expressions, which are the inverse operations of exponentiation. These problems test a student's ability to apply logarithmic properties, solve logarithmic equations, and understand the relationship between logarithms and exponents.",
  ages: "Age problems involve determining the ages of individuals based on given relationships, differences, or sums of their ages. These problems test a student's ability to set up and solve equations involving linear relationships between ages.",
  "pipes-and-cistern":
    "Pipes and cistern problems involve calculating the time required to fill or empty a tank or cistern when multiple pipes with different flow rates are involved. These problems test a student's understanding of work rates, combined rates, and the concept of filling and draining.",
  "problem-on-trains":
    "Train problems involve calculating the speed, time, or distance related to moving trains. These problems often require understanding concepts such as relative speed, crossing times, and the impact of train length on problem scenarios.",
  "boats-and-streams":
    "Boats and streams problems involve calculating the effective speed of a boat when moving upstream or downstream in a current. These problems test a student's understanding of relative speed, the impact of the current on travel time, and the ability to apply these concepts to solve real-world scenarios.",
  circles:
    "Circle problems involve calculations related to the properties of circles, including circumference, radius, diameter, area, and arc length. These problems test a student's understanding of basic geometry, as well as the ability to apply formulas and solve problems involving circular shapes.",
  mensuration:
    "Mensuration problems involve calculating the areas, volumes, and surface areas of various geometric shapes, such as squares, rectangles, triangles, circles, cylinders, and spheres. These problems test a student's understanding of geometric properties and the ability to apply formulas to solve real-world problems.",
  "height-and-distance":
    "Height and distance problems involve calculating the height of an object or the distance between objects using trigonometric ratios. These problems test a student's ability to apply trigonometric principles, such as sine, cosine, and tangent, to solve problems related to right-angled triangles.",
  "coordinate-geometry":
    "Coordinate geometry problems involve understanding and applying the principles of geometry using a coordinate system. These problems test a student's ability to calculate distances between points, find midpoints, determine the slope of a line, and solve equations of lines and curves.",
  "profit-and-loss":
    "Profit and loss problems involve calculating the financial gain or loss incurred in a transaction based on the cost price and selling price. These problems test a student's understanding of basic financial concepts, percentages, and the ability to apply formulas to determine profit, loss, and their respective percentages.",
  "compound-interest":
    "Compound interest problems involve calculating the interest earned or paid on a principal amount over multiple periods, where the interest is added to the principal after each period. These problems test a student's understanding of exponential growth, financial concepts, and the ability to apply the compound interest formula.",
  "permutations-and-combinations":
    "Permutations and combinations problems involve calculating the number of possible arrangements or selections of items from a set. These problems test a student's understanding of counting principles, factorials, and the ability to distinguish between permutations (ordered arrangements) and combinations (unordered selections).",
  probability:
    "Probability problems involve calculating the likelihood of an event occurring based on known outcomes. These problems test a student's understanding of basic probability principles, such as the calculation of simple, compound, and conditional probabilities, as well as the ability to apply these principles to real-world scenarios.",
  "geometric-progression":
    "Geometric progression problems involve sequences of numbers in which each term is a constant multiple of the previous term. These problems test a student's ability to identify the common ratio, calculate specific terms in the sequence, and sum the terms of the progression.",
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
      case "quiz":
        return <Quiz topic={chapter} main={"aptitude"} />;

      default:
        return null;
    }
  };

  return (
    <div className="topic-main-container">
      <Header />
      <div className="topic-sub-container">
        <div className="left-container">
          <img src={`/Assets/${chapter}pic.jpg`} alt={chapter} />
          <p>{topicDescription[chapter]}</p>
          <div className="buttons-container">
            <button
              type="button"
              onClick={() => setSelected("concepts")}
              className={`${selected === "concepts" ? "selectedCat" : ""}`}
            >
              Synopsis
            </button>

            <button
              type="button"
              onClick={() => setSelected("formulaes")}
              className={`${selected === "formulaes" ? "selectedCat" : ""}`}
            >
              Formulaes
            </button>

            <button
              type="button"
              onClick={() => setSelected("practice")}
              className={`${selected === "practice" ? "selectedCat" : ""}`}
            >
              Practice Questions
            </button>
            <button
              type="button"
              onClick={() => setSelected("quiz")}
              className={`${selected === "quiz" ? "selectedCat" : ""}`}
            >
              Quiz
            </button>
          </div>
          <div className="bottom-content-container">{renderBottom()}</div>
        </div>
        <img
          src={`/Assets/${chapter}pic1.jpg`}
          alt={chapter}
          className="right-pic"
        />
      </div>
    </div>
  );
};

export default AptitudePage;
