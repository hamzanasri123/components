import React from "react";
import "./photo.css";
const NavBar = (props) => {
  const { arr, FullName } = props;

  return (
    <div className="nav">
      <header>
        <h1>{FullName}</h1>
        <ul>
          {arr.map((el, i) => {
            return (
              <li>
                <a href={el.name}> {el.name} </a> 
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
};

export default NavBar;
