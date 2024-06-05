import "./style.scss";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import author_image1 from "../../assets/author1.jpg";
import author_image2 from "../../assets/author2.jpeg";

// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export const Authur_section = () => {
  return (
    <>
      <section className="authur_section" id="authur">
        <div className="container">
          <div className="txt_con">
            <h2>about author</h2>

            <div className="img_wrapper">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 9000 }}
                speed={1000}
                // loop={true}
                className="img_con"
              >
                <SwiperSlide className="img">
                  <img src={author_image1} alt="author image" />
                </SwiperSlide>
                <SwiperSlide className="img">
                  <img src={author_image2} alt="author image" />
                </SwiperSlide>
              </Swiper>
            </div>

            <p>
              Victor Greene (Echezona) is a young digital entrepreneur, author,
              Thought leader and a Brand psychologist for two reputable firms in
              Nigeria. He's a perpetual learner committed to empowering
              individuals to achieve financial success and personal growth. With
              a keen eye for spotting opportunities and a deep understanding of
              human psychology, Victor provides readers with the knowledge and
              tools needed to thrive in today’s dynamic world.
            </p>
            <h4>victor greene echezona.</h4>

            <div className="socail_section">
              <a href="#" target="_blank">
                <FaWhatsapp className="icon" />
              </a>
              <a href="#" target="_blank">
                <FaXTwitter className="icon" />
              </a>
              <a href="#" target="_blank">
                <FaFacebookF className="icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
