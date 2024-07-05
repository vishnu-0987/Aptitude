import { Link } from "react-router-dom";
import "./index.css";

const Topic = (props) => {
  const { item } = props;

  return (
    <Link
      to={`/topic/${item.toLowerCase().replace(/\s+/g, "-")}`}
      className="link"
    >
      <li className="each-topic">
        <button type="button">{item}</button>
      </li>
    </Link>
  );
};

export default Topic;
