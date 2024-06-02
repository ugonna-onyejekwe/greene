import { IoMdCheckmark } from "react-icons/io";
import { bookBenefits, book_content_info } from "../data";
import "./style.scss";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useState } from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

export const About_book_section = () => {
  const [showmore, setShowmore] = useState(false);
  const [showMoreContent, setShowMoreContent] = useState(false);

  return (
    <>
      <section className="about_book" id="about-book">
        <div className="container">
          <div className="book_content_section">
            <h2>few book chapters to look forward to</h2>

            <div className={"main_wrapper"}>
              <div className={showMoreContent ? "wrapper active " : "wrapper"}>
                {book_content_info.map((i, key) => {
                  return (
                    <div key={key} className="box">
                      {" "}
                      <span className="icon">
                        {" "}
                        <VscDebugBreakpointLog />
                      </span>{" "}
                      <p>{i}</p>
                      <span></span>
                    </div>
                  );
                })}
              </div>

              <button
                className="btn"
                onClick={() => setShowMoreContent(!showMoreContent)}
              >
                show <span>{showMoreContent ? "less" : "more"}</span>{" "}
                {showMoreContent ? (
                  <IoChevronUp className="icon" />
                ) : (
                  <IoChevronDown className="icon" />
                )}
              </button>
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
