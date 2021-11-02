import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const history = useHistory();

  return (
    <div>
      <ul className="navList">
        <IoArrowBackCircleOutline
          className="icon"
          onClick={() => history.goBack()}
        />
        <li>
          <Link to="/ ">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Cards">Cards</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
