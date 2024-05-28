import "./style.scss";

import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export const NavBar_section = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav>
        <div className="container">
          <a href="#" className="logo">
            <h1>greene</h1>
          </a>

          <div className={isActive ? "links active" : "links"}>
            <div className="menu_btn close" onClick={() => setIsActive(false)}>
              <IoMdClose className="icon" />
            </div>
            <a href="#home" onClick={() => setIsActive(false)}>
              home
            </a>
            <a href="#about-book" onClick={() => setIsActive(false)}>
              about book
            </a>
            <a href="#authur" onClick={() => setIsActive(false)}>
              authur
            </a>
            <a href="#reviews" onClick={() => setIsActive(false)}>
              reviews{" "}
            </a>

            <a
              href="#get-book"
              className="get_book_btn"
              onClick={() => setIsActive(false)}
            >
              get book
            </a>
          </div>

          <div className="menu_btn open" onClick={() => setIsActive(true)}>
            <CiMenuFries className="icon" />
          </div>
        </div>
        <div
          className={isActive ? "overlay active" : "overlay"}
          onClick={() => setIsActive(false)}
        ></div>
      </nav>
    </>
  );
};
