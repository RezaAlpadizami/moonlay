import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <div className="font-bold py-3 font-mouse text-xl">MENU</div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-gray-500 py-3 border-t border-b block font-mouse"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="planet"
            className="text-gray-500 py-3 border-t border-b block font-mouse"
            onClick={props.closeMenu}
          >
            Planet
          </Link>
        </li>
        <li>
          <Link
            to="starship"
            className="text-gray-500 py-3 border-b block font-mouse"
            onClick={props.closeMenu}
          >
            Starship
          </Link>
        </li>
        <li>
          <Link
            to="listTable"
            className="text-gray-500 py-3 border-b block font-mouse"
            onClick={props.closeMenu}
          >
            Table List
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
