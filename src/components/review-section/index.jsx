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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus aliquam ipsam, tenetur maiores amet esse vitae
                voluptas aspernatur deleniti odio dolor blanditiis beatae,
                mollitia dolore repudiandae quos quibusdam recusandae cumque!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus aliquam ipsam, tenetur maiores amet esse vitae
                voluptas aspernatur deleniti odio dolor blanditiis beatae,
                mollitia dolore repudiandae quos quibusdam recusandae cumque!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus aliquam ipsam, tenetur maiores amet esse vitae
                voluptas aspernatur deleniti odio dolor blanditiis beatae,
                mollitia dolore repudiandae quos quibusdam recusandae cumque!
              </p>

              <div className="avatar_section">
                <div className="img_con">
                  <img src={authur_image} alt="avaater image" />
                </div>
                <h3>ugonna innocent</h3>
                <small>blogger</small>
              </div>
            </SwiperSlide>

            {/* swipper 4 */}
            <SwiperSlide className="box">
              <div className="quote_icon">
                <FaQuoteLeft />
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus aliquam ipsam, tenetur maiores amet esse vitae
                voluptas aspernatur deleniti odio dolor blanditiis beatae,
                mollitia dolore repudiandae quos quibusdam recusandae cumque!
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
