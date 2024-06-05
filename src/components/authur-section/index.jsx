import "./style.scss";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import authur_image from "../../assets/authur.jpg";

export const Authur_section = () => {
  return (
    <>
      <section className="authur_section" id="authur">
        <div className="container">
          <div className="img_con">
            <img src={authur_image} alt="authur image" />
          </div>
          <div className="txt_con">
            <h2>about authur</h2>
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
