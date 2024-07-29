import Chapters from "../../components/Chapters";
import Header from "../../components/Header";
import "./index.css";

const topics = [
  "Time and Work",
  "Time speed and Distance",
  "Number Series",
  "Percentages",
  "Ratios-and-Proportions",
];

const QuantitativeAptitude = () => (
  <div className="main-container">
    <Header />
    <div className="logical-container">
      {/* <div className="img-container">
        <img src="./logicalbanner.jpg" alt="logical-banner" />
      </div> */}
      <div className="all-topics-container">
        <h1>Topics</h1>
        <ul className="topics-container">
          {topics.map((item) => (
            <Chapters item={item} key={item} />
          ))}
        </ul>
      </div>
    </div>
  </div>
);
export default QuantitativeAptitude;
