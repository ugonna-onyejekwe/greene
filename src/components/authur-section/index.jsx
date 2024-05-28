import "./style.scss";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import authur_image from "../../assets/authur.jpg";

export const Authur_section = () => {
  return (
    <>
      <section className="authur_section">
        <div className="container">
          <div className="img_con">
            <img src={authur_image} alt="authur image" />
          </div>
          <div className="txt_con">
            <h2>about authur</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              cupiditate dignissimos deserunt, doloribus tempora possimus dolore
              at incidunt nulla omnis laboriosam est quaerat asperiores
              assumenda culpa. Asperiores accusantium iusto dolore!
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
