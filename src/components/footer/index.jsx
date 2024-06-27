import "./style.scss";

import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer_section = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="logo">
            <h1>Greene</h1>

            <div className="socails">
              <a href="https://wa.me/08124698185" target="_blank">
                <FaWhatsapp />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61550041971624"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div className="part2">
            <div className="links">
              <a href="#home">home</a>
              <a href="#about-book">about book</a>
              <a href="#author">author</a>
              <a href="#reviews">reviews</a>
            </div>
            <p>&copy; 2024 Greene. All right reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};
