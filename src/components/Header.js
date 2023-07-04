import { LOGO_URL } from "../utils/constaints";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <a>
          <img className="logo" alt="logo" src={LOGO_URL} />
        </a>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
