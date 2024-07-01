import "./style.scss";
import book_image from "../../assets/Book3.jpg";
import book_image2 from "../../assets/book2.jpg";
import { useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
            <h2>take action now</h2>
            <div className="txt">
              <p>
                <span></span> The future depends on what you do today. Don't
                miss out on the chance to transform your Facebook, and Instagram
                presence into a thriving business and a substantial stream of
                income. This is your opportunity to turn your passion, talent,
                creativity and hobbies into influence, wealth and impact.
              </p>
              <p>
                {" "}
                <span> </span>Secure your copy today, which comes along with the
                bonus book ( the alchemy of wealth) at a discounted prize of
                #3500. And take control of your personal growth, vision and
                brand idea, immediately.
                <br /> Make purchases while offers and bonuses still last.
              </p>
            </div>

            {/* img swipper */}
            <div className="img_wrapper">
              <div className="wrapper">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation={{
                    prevEl: ".left",
                    nextEl: ".right",
                  }}
                  autoplay={{ delay: 3000 }}
                  speed={700}
                  className="img_con"
                >
                  <SwiperSlide className="img">
                    <img src={book_image} alt="book image" />
                  </SwiperSlide>
                  <SwiperSlide className="img">
                    <img src={book_image2} alt="book image" />
                  </SwiperSlide>
                </Swiper>

                <span className="nav_btn left">
                  <MdKeyboardArrowLeft />
                </span>

                <span className="nav_btn right">
                  <MdKeyboardArrowRight />
                </span>
              </div>
            </div>

            <div className="offer_section">
              <h4>special offer</h4>
              <h3>
                <span>
                  <small>
                    <TbCurrencyNaira />
                  </small>
                  3,000
                </span>

                <span>
                  <small>
                    <TbCurrencyNaira />
                  </small>
                  3,500
                </span>
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

            <div className="btn_section">
              <a href="https://wa.me/08124698185" target="_blank">
                <button>buy now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
