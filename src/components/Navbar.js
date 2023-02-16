import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBehance,
  FaBars,
} from "react-icons/fa";

const Navbar = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <div className="navbar">
      <h1>
        Nav<span style={{ color: "orange" }}>Bar</span>
      </h1>
      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Profile</a>
        </li>
      </ul>
      <ul className="social-icons">
        <li>
          <a href="">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="">
            <FaBehance />
          </a>
        </li>
      </ul>
      <FaBars
        className="bars"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      />
    </div>
  );
};

export default Navbar;
