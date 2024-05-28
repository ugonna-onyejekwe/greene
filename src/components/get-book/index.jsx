import "./style.scss";
import book_image from "../../assets/book.jpg";
import { useState } from "react";

export const Get_book_section = () => {
  const [mins, setMins] = useState(5);
  const [secs, setSecs] = useState(59);

  setTimeout(() => {
    secs === 0 ? setSecs(59) : setSecs(secs - 1);
  }, 1000);

  setTimeout(() => {
    mins === 0 ? setMins(5) : setMins(mins - 1);
  }, 1000 * 60);

  return (
    <>
      <div className="get_book_section" id="get-book">
        <div className="container">
          <div className="txt_con">
            <h2>learn to build your brand</h2>
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              deserunt ipsum quas neque voluptas pariatur exercitationem quia,
              verit
            </p>
            <div className="offer_section">
              <h4>special offer</h4>
              <h3>
                $3000 <span>$5000</span>
              </h3>
            </div>

            <div className="timer_section">
              <div className="time">
                <p>0</p>
                <span>:</span>
                <p>0</p>
                <span>:</span>
                <p>{mins}</p>
                <span>:</span>
                <p>{secs}</p>
              </div>
              <h5>time left</h5>
            </div>

            {/* img */}
            <div className="img_con">
              <img src={book_image} alt="book image" />
            </div>

            <div className="btn_section">
              <button>buy now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
