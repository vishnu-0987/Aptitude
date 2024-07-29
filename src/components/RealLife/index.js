import "./index.css";
import topicsData from "../../topicsData";
import quantitativeTopic from "../../quantitativeTopic";

const RealLife = (props) => {
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
  const { realLife } = jsonData;

  const cap = capitalizeTopic(topic);

  return (
    <div className="left-bottom-container">
      <h1>Real-Life Applications of {cap}</h1>
      <p>Real-life examples where the concept of {cap} is involved are:</p>

      {realLife.map((item) => (
        <div className="sub-left-bottom">
          <h3>
            Application {item.id}: {item.title}
          </h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default RealLife;
