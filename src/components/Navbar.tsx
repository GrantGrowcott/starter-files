import  { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Dropdown from "./ServicesDropdown";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { setClick } from "../redux/slices/NavigationSlice";
import { useAppDispatch,useAppSelector } from "../redux/useApp";

function Navbar() {


  const dispatch = useAppDispatch()
  const { click } = useAppSelector((state) => state.navigation);  


  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => dispatch(setClick(!click));
  const closeMobileMenu = () => dispatch(setClick(false));

  const onMouseEnter = () => {
      setDropdown(true); 
  };

  const onMouseLeave = () => {
      setDropdown(false);
  
  };


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          NINJA
          <i className="fab fa-firstdraft" />
        </Link>
        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
              <AiFillCloseCircle size={35} className="nav-color" />
            </span>
          ) : (
            <span className="icon">
              <AiOutlineMenu size={35} className="nav-color" />
            </span>
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
              Services <i className="fas fa-caret-down" />
              {dropdown && <Dropdown />}
            </Link>
          </li>
          <li className="nav-item" >
            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
