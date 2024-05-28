import { IoMdCheckmark } from "react-icons/io";
import { Box_con } from "../box_con";
import { bookBenefits, book_content_info } from "../data";
import "./style.scss";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useState } from "react";

export const About_book_section = () => {
  const [showmore, setShowmore] = useState(false);

  return (
    <>
      <section className="about_book" id="about-book">
        <div className="container">
          <div className="book_content_section">
            <h2>book content || chapters</h2>

            <div className="wrapper">
              {book_content_info.map((item, key) => {
                return <Box_con {...item} key={key} />;
              })}
            </div>
          </div>
          <div className="book_benefit_section">
            <h2>what you'll learn</h2>

            <div className="wrapper">
              <div
                className={showmore ? "main_wrapper active" : "main_wrapper"}
              >
                {bookBenefits.map((i, key) => {
                  return (
                    <p>
                      <span>
                        <IoMdCheckmark />
                      </span>
                      {i}
                    </p>
                  );
                })}
              </div>
              <div className="btn" onClick={() => setShowmore(!showmore)}>
                {showmore ? "show less" : "show more"}
                <span>{showmore ? <IoChevronUp /> : <IoChevronDown />}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
