import Header from "../../components/Header";
import { Link } from "react-router-dom";
import "./index.css";

const Aptitude = () => (
  <div className="main-container">
    <Header />
    <div className="aptitude-container">
      <div className="button-container">
        <Link to="/logical-reasoning">
          <button type="button">Logical Reasoning</button>
        </Link>
        <Link to="/quantitative-aptitude">
          <button type="button">Quantitative Aptitude</button>
        </Link>
        <Link to="/data-interpretation">
          <button type="button">Data Interpretation</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Aptitude;
