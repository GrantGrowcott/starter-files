import { useState } from "react";
import { ServicesMenuItems } from "./MenuItems";
import "../css/Dropdown.css";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/useApp";
import { setClick } from "../redux/slices/NavigationSlice";

function Dropdown() {
  const dispatch = useAppDispatch();
  const [dropdown, setDropDown] = useState(false);
  const { click } = useAppSelector((state) => state.navigation);

  const handleClick = () => {
    dispatch(setClick(!click));
    setDropDown(!dropdown);
  };

  return (
    <>
      <ul onClick={handleClick} className={dropdown ? "dropdown-menu clicked" : "dropdown-menu"}>
        {ServicesMenuItems.map((item: any, index: any) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
