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

  const cap = capitalizeTopic(props.topic);

  return (
    <div
      className="sub-concepts"
      dangerouslySetInnerHTML={{ __html: concepts }}
    ></div>
  );
};

export default Concepts;
