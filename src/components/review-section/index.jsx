import "./style.scss";

// img
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { FaQuoteLeft } from "react-icons/fa";

export const Reviews_section = () => {
  return (
    <>
      <div className="testimonial_section" id="reviews">
        <div className="container">
          <h2>testimonial</h2>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
            }}
            spaceBetween={50}
            slidesPerView={1}
            speed={700}
            className="swiper_wrapper"
          >
            {/* swipper 1 */}
            <SwiperSlide className="box">
              <div className="quote_icon">
                <FaQuoteLeft />
              </div>

              <p>
                Victor’s journey into wealth creation, branding, and content
                creation began with his quest for personal and professional
                development. Through extensive study of business, economics,
                psychology, and technology, he has crafted innovative strategies
                that blend traditional principles with modern trends.
              </p>

              <div className="avatar_section">
                <div className="img_con">
                  <img src={avatar1} alt="avaater image" />
                </div>
                <h3>samuel onyeka</h3>
                <small>coach</small>
              </div>
            </SwiperSlide>

            {/* swipper 2 */}
            <SwiperSlide className="box">
              <div className="quote_icon">
                <FaQuoteLeft />
              </div>

              <p>
                In his books, Victor shares his insights on two crucial aspects
                of modern entrepreneurship. His wealth creation book explores
                the intricacies of identifying and capitalizing on opportunities
                that fulfill higher human needs, offering readers a pathway to
                significant financial success. His book on social media branding
                and content creation delivers actionable strategies for building
                a powerful online presence and engaging with audiences
                meaningfully.
              </p>

              <div className="avatar_section">
                <div className="img_con">
                  <img src={avatar2} alt="avaater image" />
                </div>
                <h3>kelvin smith</h3>
                <small>author</small>
              </div>
            </SwiperSlide>

            {/* swipper 3 */}
            <SwiperSlide className="box">
              <div className="quote_icon">
                <FaQuoteLeft />
              </div>

              <p>
                Victor’s writing is known for its clarity, practical advice, and
                motivational tone. He believes that with the right mindset and
                knowledge, anyone can achieve greatness. Through his work, he
                aims to inspire and guide readers on their journeys toward
                financial independence and professional excellence.
              </p>

              <div className="avatar_section">
                <div className="img_con">
                  <img src={avatar3} alt="avaater image" />
                </div>
                <h3>innocent ugonna </h3>
                <small>founder of paypenz</small>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
