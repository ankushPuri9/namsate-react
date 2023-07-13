import { LOGO_URL } from "../utils/constaints";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/context/userContext";
export const Header = () => {
  const { user } = useContext(userContext);
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
            Name:-{user.name}
            <br></br>
            Email :- {user.email}
          </li>
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
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
