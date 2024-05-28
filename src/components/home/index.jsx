import "./style.scss";
import book_image from "../../assets/book.jpg";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

export const Home = () => {
  return (
    <>
      <section className="home_section " id="home">
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
            <small> secrets to creating</small>
            <h1>
              viral content <small> and</small>
            </h1>
            <h1>getting monitized</h1>
            <h1>
              <small> on</small> facebook
            </h1>
            <p className="briefing">
              Transforming content into wealth using socail media. Crack the
              code to viral content, branding, monetization and influence to
              dominate the online arena.
            </p>
          </div>

          <div className="img_con">
            <img src={book_image} alt="book image" />
          </div>
        </div>
      </section>
    </>
  );
};
