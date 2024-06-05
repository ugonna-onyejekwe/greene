import "./style.scss";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

import book2 from "../../assets/book2.jpg";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { useState } from "react";
import { bookBenefits2 } from "../data";

export const SecondBookSection = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <section className="second_book_section">
        <div className="container">
          <div className="txt_con">
            <div className="bouns_section">
              <h5>book bonus </h5>
            </div>

            <div className="rating_section">
              <p>best seller</p>
              <div className="rating">
                <p>4.5</p>
                <div className="stars">
                  <span>
                    <IoIosStar />
                  </span>

                  <span>
                    <IoIosStar />
                  </span>

                  <span>
                    <IoIosStar />
                  </span>

                  <span>
                    <IoIosStar />
                  </span>

                  <span>
                    <IoIosStarHalf />
                  </span>
                </div>
              </div>
            </div>

            <h2>the alchemy of fame</h2>

            <div className="txt">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia sint dolores autem dolore exercitationem beatae soluta,
                inventore perspiciatis rerum tempore nisi facere facilis
                molestias odio voluptates accusantium nesciunt dolor maxime?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                nisi fuga doloremque, sed consectetur dolorum iusto .
              </p>
            </div>

            <div className="img_con">
              <img src={book2} alt="book image" />
            </div>
          </div>
        </div>
      </section>

      <section className="second_book_benefit_section">
        <div className="container">
          <h2>what you'll learn</h2>
          <div className="main_wrapper">
            <div className={isActive ? "wrapper active" : "wrapper"}>
              {bookBenefits2.map((i, key) => {
                return (
                  <p key={key}>
                    {" "}
                    <span>
                      <IoMdCheckmark />
                    </span>
                    {i}
                  </p>
                );
              })}
            </div>

            <div className="btn_section">
              <div className="btn" onClick={() => setIsActive(!isActive)}>
                see {isActive ? "less" : "more"}{" "}
                <span>{isActive ? <IoChevronUp /> : <IoChevronDown />}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
