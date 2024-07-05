import "./index.css";

const Header = () => (
  <div className="header-container">
    <nav>
      <img
        src={`${process.env.PUBLIC_URL}/logopic.jpg`}
        alt="logo"
        className="logo"
      />
    </nav>
  </div>
);

export default Header;
