import "./style.scss";

import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Footer_section = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="logo">
            <h1>Greene</h1>

            <div className="socails">
              <span>
                <FaWhatsapp />
              </span>
              <span>
                <FaXTwitter />
              </span>
              <span>
                <FaFacebookF />
              </span>
            </div>
          </div>

          <div className="part2">
            <div className="links">
              <NavLink to="#">home</NavLink>
              <NavLink to="#">about book</NavLink>
              <NavLink to="#">author</NavLink>
              <NavLink to="#">reviews</NavLink>
            </div>
            <p>&copy; 2024 Greene. All right reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};
