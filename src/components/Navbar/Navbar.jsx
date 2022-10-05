import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavLinks = [
  {
    label: "Home",
    path: "#home",
  },
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Services",
    path: "#services",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <nav className="navbar-mob">
        <FontAwesomeIcon icon={faBars} onClick={() => setToggle(!toggle)} />
        <div className={toggle ? "navlinks hide" : "navlinks"}>
          {NavLinks.map(({ label, path }) => {
            return <a href={path}>{label}</a>;
          })}
        </div>
      </nav>
      <nav className="navbar-pc">
        <div className="navbar-container">
          <div className="navbarLinks">
            {NavLinks.map(({ label, path }) => {
              return (
                <p>
                  <a href={path}>{label}</a>
                </p>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
