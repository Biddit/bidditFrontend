import { Link } from "react-router-dom";
import process from "process";
function HeroBanner() {
  return (
    <>
      <div className="hero-area hero-style-two">
        <div className="scroll-text">
          <h6>
            <a href="#category">Scroll Down</a>
          </h6>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-start align-items-end">
            <div className="col-xl-7 col-lg-7">
              <div className="banner2-content">
                {/* <span
                  className="wow fadeInDown"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  Welcome To Auction House
                </span> */}
                <h1
                  className="wow fadeInDown"
                  data-wow-duration="1.5s"
                  data-wow-delay="1s"
                >
                  Discover a Seamless Bidding Experience.
                </h1>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="1s"
                >
                  Nulla facilisi. Maecenas ac tellus ut ligula interdum
                  convallis. Nullam dapibus on erat in dolor posuere, none
                  hendrerit lectus ornare. Suspendisse sit amet turpina
                  sagittis, ultrices dui et, aliquam urna.
                </p>
                <Link
                  to={`${process.env.PUBLIC_URL}/live-auction`}
                  style={{
                    borderRadius: "50px",
                    color: "white",
                  }}
                  className="eg-btn  bg-[#f57d1f]  btn--lg wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.8s"
                >
                  Discover Hidden Gems
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
