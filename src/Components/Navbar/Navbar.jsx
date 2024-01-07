import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  const [state, setState] = useState({
    menu: false,
    isOpen: false,
    homeLinkClass: "nav-item nav-link",
    aboutLinkClass: "nav-item nav-link",
    menuClass: "",
  });

  const toggleMenu = () => {
    setState((prevState) => ({
      ...prevState,
      menu: !prevState.menu,
    }));
  };

  
  const show = state.menu ? "show" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-light "  >
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        style={{ marginRight: "10px" }}
      >
        <span className="navbar-toggler-icon" />
      </button>

      <Link className="navbar-brand n-name" to="/">
     <marquee> Vaishali</marquee>
      </Link>

      <div className={`collapse navbar-collapse navbarLink ${show}`} id="n-links">
        <div className="navbar-nav link-holder">
          <Link
            className="nav-item nav-link N-link"
            to="/"
          >
            Home
          </Link>
          <Link
            className="nav-item nav-link N-link"
            to="/skill"
          >
            Skill
          </Link>
          <Link
            className="nav-item nav-link N-link"
            to="/about"
          >
            About
          </Link>
          <Link
            className="nav-item nav-link N-link"
            to="/project"
          >
            Project
          </Link>
          <Link
            className="nav-item nav-link N-link"
            to="/contact"
          >
        Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar