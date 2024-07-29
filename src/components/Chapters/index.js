import { Link } from "react-router-dom";
import "./index.css";

const Chapters = (props) => {
  const { item } = props;

  return (
    <Link
      to={`/chapter/${item.toLowerCase().replace(/\s+/g, "-")}`}
      className="link"
    >
      <li className="each-topic">
        <button type="button">{item}</button>
      </li>
    </Link>
  );
};

export default Chapters;
