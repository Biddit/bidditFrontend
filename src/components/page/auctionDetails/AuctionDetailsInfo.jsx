import React from 'react'
import Counter from '../../common/Counter'
import process from 'process'
import gallery from "../../../assets/images/bg/prod-gallery1.png";
function AuctionDetailsInfo() {
  return (
    <>
      <div className="row g-4 mb-50">
        <div className="col-xl-6 col-lg-7 d-flex flex-row align-items-start justify-content-lg-start justify-content-center flex-md-nowrap flex-wrap gap-4">
          <ul
            className="nav small-image-list d-flex flex-md-column flex-row justify-content-center gap-4  wow fadeInDown"
            data-wow-duration="1.5s"
            data-wow-delay=".4s"
          >
            <li className="nav-item">
              <div
                id="details-img1"
                data-bs-toggle="pill"
                data-bs-target="#gallery-img1"
                aria-controls="gallery-img1"
              >
                <img alt="images" src={gallery} className="img-fluid" />
              </div>
            </li>
            <li className="nav-item">
              <div
                id="details-img2"
                data-bs-toggle="pill"
                data-bs-target="#gallery-img2"
                aria-controls="gallery-img2"
              >
                <img alt="images" src={gallery} className="img-fluid" />
              </div>
            </li>
            <li className="nav-item">
              <div
                id="details-img3"
                data-bs-toggle="pill"
                data-bs-target="#gallery-img3"
                aria-controls="gallery-img3"
              >
                <img alt="images" src={gallery} className="img-fluid" />
              </div>
            </li>
          </ul>
          <div
            className="tab-content mb-4 d-flex justify-content-lg-start justify-content-center  wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay=".4s"
          >
            <div
              className="tab-pane big-image fade show active"
              id="gallery-img1"
            >
              <div className="auction-gallery-timer d-flex align-items-center justify-content-center flex-wrap">
                <h3 id="countdown-timer-1">
                  <Counter />
                </h3>
              </div>
              <img alt="images" src={gallery} className="img-fluid" />
            </div>
            <div className="tab-pane big-image fade" id="gallery-img2">
              <div className="auction-gallery-timer d-flex align-items-center justify-content-center">
                <h3 id="countdown-timer-2">
                  <Counter />
                </h3>
              </div>
              <img alt="images" src={gallery} className="img-fluid" />
            </div>
            <div className="tab-pane big-image fade" id="gallery-img3">
              <div className="auction-gallery-timer d-flex align-items-center justify-content-center">
                <h3 id="countdown-timer-3">
                  <Counter />
                </h3>
              </div>
              <img alt="images" src={gallery} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-5">
          <div
            className="product-details-right  wow fadeInDown"
            data-wow-duration="1.5s"
            data-wow-delay=".2s"
          >
            <h3>Creative Fashion Riboon Digital Watch Little Elegant.</h3>
            <p className="para">
              Korem ipsum dolor amet, consectetur adipiscing elit. Maece nas in
              pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
              consectetur nulla.
            </p>
            <h4>
              Bidding Price: <span>$465.00</span>
            </h4>
            <div className="bid-form">
              <div className="form-title">
                <h5>Bid Now</h5>
                <p>Bid Amount : Minimum Bid $20.00</p>
              </div>
              <form>
                <div className="form-inner gap-2">
                  <input type="text" placeholder="$00.00" />
                  <button
                    className="eg-btn  text-white  bg-[#210D42] "
                    onSubmit={(e) => e.preventDefault()}
                    type="submit"
                  >
                     Bid 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuctionDetailsInfo