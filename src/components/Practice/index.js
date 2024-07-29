import { useEffect, useState } from "react";
import topicsData from "../../topicsData";
import quantitativeTopic from "../../quantitativeTopic";
import "./index.css";
import Pagination from "../Pagination";

const Practice = (props) => {
  const { topic, main } = props;
  let jsonData;
  if (main === "logical") {
    jsonData = topicsData[topic];
  } else {
    jsonData = quantitativeTopic[topic];
  }

  const { practiceQuestions } = jsonData;
  const [practiceModels, setPracticeModels] = useState([]);
  const [isWorkSpace, setWorkSpace] = useState({});
  const [selectedOpt, setSelectedOpt] = useState({});
  const [submittedOpt, setSubmittedOpt] = useState({});
  const [errMsg, setErrMsg] = useState({});
  const [view, setView] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  const toggleWorkSpace = (id) => {
    setWorkSpace((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const changeOption = (id, opt) => {
    if (selectedOpt[id] === opt) {
      setSelectedOpt((prev) => ({
        ...prev,
        [id]: false,
      }));
    } else {
      setSelectedOpt((prev) => ({
        ...prev,
        [id]: opt,
      }));
    }
    // Reset the submission status when a new option is selected
    setSubmittedOpt((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const submitButton = (id, corr) => {
    if (selectedOpt[id]) {
      setErrMsg((prev) => ({
        ...prev,
        [id]: false,
      }));
      setSubmittedOpt((prev) => ({
        ...prev,
        [id]: selectedOpt[id] === corr ? "correct" : "incorrect",
      }));
    } else {
      setErrMsg((prev) => ({
        ...prev,
        [id]: true,
      }));
    }
  };

  const viewAnswer = (id) => {
    if (view[id] === true) {
      setView((prev) => ({
        ...prev,
        [id]: false,
      }));
    } else {
      setView((prev) => ({
        ...prev,
        [id]: true,
      }));
    }
  };

  useEffect(() => {
    window.scroll(0, 250);
  }, [currentPage]);

  useEffect(() => {
    function getRandomElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function generateQuestion(template, variables) {
      let question = template;
      const values = {};
      for (let [key, vals] of Object.entries(variables)) {
        const value = getRandomElement(vals);
        values[key] = value !== "___" ? value : "__";
        const regex = new RegExp(`{{${key}}}`, "g");
        question = question.replace(regex, values[key]);
      }
      return { question, values };
    }

    function evaluateFormula(formula, values) {
      for (let [key, value] of Object.entries(values)) {
        if (value === "__") {
          return "__"; // Skip calculation if the value is a blank
        }
        const regex = new RegExp(key, "g");
        formula = formula.replace(regex, value);
      }
      return Math.round(eval(formula));
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
      return array;
    }

    function replacePlaceholders(template, values, correctAnswer) {
      let result = template.replace(/{{final_answer}}/g, correctAnswer);
      result = result.replace(/{{(.*?)}}/g, (_, key) => values[key] || "");
      return result;
    }

    if (main === "aptitude") {
      const generatedQuestions = practiceQuestions
        .map((q) => {
          const questions = [];
          for (let i = 1; i <= 3; i++) {
            const { question, values } = generateQuestion(
              q.template,
              q.variables
            );
            const correctAnswer = evaluateFormula(
              q.correctAnswerFormula,
              values
            );

            const options = shuffleArray(
              q.optionsFormula.map((optFormula) =>
                evaluateFormula(optFormula, values)
              )
            );
            const explanation = replacePlaceholders(
              q.explanationTemplate,
              values,
              correctAnswer
            );
            questions.push({
              id: `${q.id}-${i}`,
              question: question,
              options: options,
              correctAnswer: correctAnswer,
              explanation: explanation,
            });
          }
          return questions;
        })
        .flat();

      setPracticeModels(generatedQuestions);
    } else {
      setPracticeModels(practiceQuestions);
    }
  }, [topic]);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = practiceModels.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="practice-container">
      <h1>Practice Questions</h1>
      {currentQuestions.map((item, index) => (
        <div className="each-question" key={item.id}>
          <p>
            Question {index + 1 + indexOfFirstQuestion} of{" "}
            {practiceModels.length}
          </p>
          <h3>{item.question}</h3>
          <div className="option-grid">
            {item.options.map((opt, index) => (
              <button
                key={index}
                className={`opt-btn ${
                  selectedOpt[item.id] === opt ? "opt-sel" : ""
                } ${
                  submittedOpt[item.id] &&
                  selectedOpt[item.id] === opt &&
                  (submittedOpt[item.id] === "correct"
                    ? "correct"
                    : "incorrect")
                } ${
                  view[item.id] && opt === item.correctAnswer
                    ? "correct"
                    : "opt-btn"
                }`}
                type="button"
                onClick={() => changeOption(item.id, opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="button-group">
            <button
              type="submit"
              id="submit"
              onClick={() => submitButton(item.id, item.correctAnswer)}
            >
              Submit
            </button>

            <button
              type="submit"
              id={view[item.id] ? "hide" : "answer"}
              onClick={() => viewAnswer(item.id)}
            >
              {view[item.id] ? "Hide Answer" : "View Answer"}
            </button>
            <button
              type="button"
              id="workspace"
              onClick={() => toggleWorkSpace(item.id)}
            >
              Workspace
            </button>
          </div>
          {errMsg[item.id] && (
            <p style={{ color: "red", fontSize: "13px" }}>
              *Please select an option
            </p>
          )}

          {isWorkSpace[item.id] && (
            <textarea rows={15} className="textarea"></textarea>
          )}

          {view[item.id] && (
            <div
              className="explanation"
              dangerouslySetInnerHTML={{ __html: item.explanation }}
            ></div>
          )}
        </div>
      ))}
      <Pagination
        questionsPerPage={questionsPerPage}
        totalQuestions={practiceModels.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Practice;
