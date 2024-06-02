import "./style.scss";
import { TbCurrencyNaira } from "react-icons/tb";
import book2 from "../../assets/book2.jpg";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

export const SecondBookSection = () => {
  return (
    <section className="second_book_section">
      <div className="container">
        <div className="txt_con">
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              sint dolores autem dolore exercitationem beatae soluta, inventore
              perspiciatis rerum tempore nisi facere facilis molestias odio
              voluptates accusantium nesciunt dolor maxime?
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
  );
};
