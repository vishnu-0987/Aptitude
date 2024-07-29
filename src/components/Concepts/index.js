import topicsData from "../../topicsData";
import quantitativeTopic from "../../quantitativeTopic";
import "./index.css";

const Concepts = (props) => {
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
  const { concepts } = jsonData;
  const { des, subConcepts } = concepts;
  const cap = capitalizeTopic(props.topic);

  return (
    <div className="concept-main-container">
      <h1>Understanding the Concepts of {cap}</h1>
      <p>{des}</p>
      {subConcepts.map((item) => (
        <div className="sub-concepts">
          <h3>
            {item.id}. {item.title}
          </h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Concepts;
