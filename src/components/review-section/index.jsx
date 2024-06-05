import "./style.scss";

// img
import authur_image from "../../assets/authur.jpg";

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
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
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
                  <img src={authur_image} alt="avaater image" />
                </div>
                <h3>ugonna innocent</h3>
                <small>blogger</small>
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
                  <img src={authur_image} alt="avaater image" />
                </div>
                <h3>ugonna innocent</h3>
                <small>blogger</small>
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
                  <img src={authur_image} alt="avaater image" />
                </div>
                <h3>ugonna innocent</h3>
                <small>blogger</small>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
