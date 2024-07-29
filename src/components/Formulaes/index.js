import topicsData from "../../topicsData";
import quantitativeTopic from "../../quantitativeTopic";
import "./index.css";

const Formulaes = (props) => {
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
  const { formulae } = jsonData;
  console.log(formulae);
  const cap = capitalizeTopic(props.topic);

  return (
    <div className="formuale-container">
      <h1>Basic Formulas of {cap}</h1>
      <p>
        Here are some of the most important formulas for solving {cap} reasoning
        problems:
      </p>
      <table border="1" className="table">
        <thead>
          <tr>
            <th padding="10px">S.No</th>
            <th>To Calculate</th>
            <th>Formulas</th>
          </tr>
        </thead>
        <tbody>
          {formulae.map((item) => (
            <tr key={item.id}>
              <td style={{ fontWeight: "600", textAlign: "center" }}>
                {item.id}
              </td>
              <td>{item.toCalculate}</td>
              <td>{item.formuales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Formulaes;
