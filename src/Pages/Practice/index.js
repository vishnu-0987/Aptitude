import { useState } from "react";
import topicsData from "../../topicsData";
import "./index.css";

const Practice = (props) => {
  const jsonData = topicsData[props.topic];
  const { practiceQuestions } = jsonData;
  const [isWorkSpace, setWorkSpace] = useState({});
  const [selectedOpt, setSelectedOpt] = useState({});
  const [submittedOpt, setSubmittedOpt] = useState({});
  const [errMsg, setErrMsg] = useState({});
  const [view, setView] = useState({});

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
    setView((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <div className="practice-container">
      <h1>Practice Questions</h1>
      {practiceQuestions.map((item) => (
        <div className="each-question" key={item.id}>
          <p>
            Question {item.id} of {practiceQuestions.length}
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
              id="answer"
              onClick={() => viewAnswer(item.id)}
            >
              View Answer
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
        </div>
      ))}
    </div>
  );
};

export default Practice;
