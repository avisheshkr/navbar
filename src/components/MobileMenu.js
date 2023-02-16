const MobileMenu = ({ showMobileMenu }) => {
  return (
    <>
      <ul
        className={showMobileMenu ? "mobileMenu active" : "mobileMenu inactive"}
      >
        <li>
          <a href="/">
            <span>Home</span>
          </a>
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
    </>
  );
};

export default MobileMenu;
