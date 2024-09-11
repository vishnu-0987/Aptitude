import { useEffect, useState } from "react";
import quantitativeTopic from "../../quantitativeTopic";
import topicsData from "../../topicsData";
import "./index.css";
import Modal from "../Modal";

const Quiz = (props) => {
  const capitalizeTopic = (topic) => {
    return topic
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const { topic, main } = props;
  let jsonData;
  if (main === "logical") {
    jsonData = topicsData[topic];
  } else {
    jsonData = quantitativeTopic[topic];
  }

  const { practiceQuestions } = jsonData;
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [selectedOpt, setSelectedOpt] = useState({});
  const [submittedOpt, setSubmittedOpt] = useState({});
  const [isWorkSpace, setWorkSpace] = useState({});
  const [errMsg, setErrMsg] = useState({});
  const [score, setScore] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [view, setView] = useState({});
  const [showModal, setShowModal] = useState(false);

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

  const submitQuiz = () => {
    let totalScore = 0;
    const submittedAnswers = {};
    quizQuestions.forEach((item) => {
      submittedAnswers[item.id] = selectedOpt[item.id];
      if (selectedOpt[item.id] === item.correctAnswer) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
    setSubmittedOpt(submittedAnswers);
    setIsSubmitted(true);
    setShowModal(true); // Show the modal when quiz is submitted
  };

  const closeModal = () => {
    setShowModal(false);
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
  }, []);

  useEffect(() => {
    function getRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomEvenValue(min, max) {
      let value;
      do {
        value = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (value % 2 !== 0); // Repeat until an even number is generated
      return value;
    }

    function generateQuestion(template, limits) {
      let question = template;
      const values = {};
      for (let [key, limit] of Object.entries(limits)) {
        let value;
        if (key === "product") {
          // Ensure the product is an even number
          value = getRandomEvenValue(limit[0], limit[1]);
        } else if (Array.isArray(limit) && typeof limit[0] === "number") {
          // Handle numerical ranges
          value = getRandomValue(limit[0], limit[1]);
        } else {
          // Handle array of strings
          value = limit[Math.floor(Math.random() * limit.length)];
        }
        values[key] = value;
        const regex = new RegExp(`{{${key}}}`, "g");
        question = question.replace(regex, value);
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

    function generateUniqueOptions(formulaList, values, correctAnswer) {
      const optionsSet = new Set();
      const options = [];

      // Add the correct answer first
      optionsSet.add(correctAnswer);
      options.push(correctAnswer);

      // Generate other options
      for (let formula of formulaList) {
        const option = evaluateFormula(formula, values);
        // Ensure options are unique and non-negative
        if (option >= 0 && !optionsSet.has(option)) {
          optionsSet.add(option);
          options.push(option);
        }
      }

      // Ensure we have enough unique options
      while (options.length < formulaList.length) {
        const randomOption = Math.floor(
          Math.abs(Math.random() * correctAnswer)
        );
        if (!optionsSet.has(randomOption)) {
          optionsSet.add(randomOption);
          options.push(randomOption);
        }
      }

      return shuffleArray(options);
    }

    if (main === "aptitude") {
      const generatedQuestions = practiceQuestions
        .map((q) => {
          const questions = [];
          for (let i = 1; i <= 3; i++) {
            let correctAnswer;
            let questionData;

            // Keep generating questions until we get a positive answer
            do {
              questionData = generateQuestion(q.template, q.limits);
              correctAnswer = evaluateFormula(
                q.correctAnswerFormula,
                questionData.values
              );
            } while (correctAnswer === null || correctAnswer <= 0);

            const { question, values } = questionData;

            const options = generateUniqueOptions(
              q.optionsFormula,
              values,
              correctAnswer
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

      setQuizQuestions(shuffleArray(generatedQuestions));
    } else {
      setQuizQuestions(shuffleArray(practiceQuestions));
    }
  }, [topic]);

  return (
    <div className="practice-container">
      <h1>{capitalizeTopic(topic)} Quiz</h1>
      {quizQuestions.map((item, index) => (
        <div className="each-question" key={item.id}>
          <p>
            Question {index + 1} of {quizQuestions.length}
          </p>
          <h3>{item.question}</h3>
          <div className="option-grid">
            {item.options.map((opt, optIndex) => {
              const isSelected = selectedOpt[item.id] === opt;
              const isCorrect = opt === item.correctAnswer;
              const isUserAnswer = isSubmitted && submittedOpt[item.id] === opt;

              return (
                <button
                  key={optIndex}
                  className={`opt-btn 
    ${isSubmitted && isUserAnswer ? (isCorrect ? "correct" : "incorrect") : ""}
    ${!isSubmitted && isSelected ? "opt-sel" : ""}`}
                  type="button"
                  onClick={() => changeOption(item.id, opt)}
                  disabled={isSubmitted} // Disable options after submission
                >
                  {opt}
                </button>
              );
            })}
          </div>
          <div className="button-group">
            {isSubmitted && (
              <button
                type="submit"
                id={view[item.id] ? "hide" : "answer"}
                onClick={() => viewAnswer(item.id)}
              >
                {view[item.id] ? "Hide Answer" : "View Answer"}
              </button>
            )}

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
      {quizQuestions.length > 0 && (
        <div className="submit-section">
          <button type="button" onClick={submitQuiz}>
            Submit Quiz
          </button>
        </div>
      )}

      {/* Render the Modal with the score */}
      <Modal show={showModal} onClose={closeModal}>
        <h2>
          Your Score: {score} / {quizQuestions.length}
        </h2>
      </Modal>
    </div>
  );
};

export default Quiz;
