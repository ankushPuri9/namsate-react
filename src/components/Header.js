import { LOGO_URL } from "../utils/constaints";
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
