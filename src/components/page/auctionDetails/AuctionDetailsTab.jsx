
import {Link} from 'react-router-dom'
import Counter from '../../common/Counter'
import process from 'process'
import bidder from "../../../assets/images/bg/bidder1.png";
import auct from '../../../assets/images/bg/live-auc1.png'
import svg from "../../../assets/images/icons/smile-emo.svg";
function AuctionDetailsTab() {
    const scrollTop = ()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <div className="row d-flex justify-content-center g-4">
        <div className="col-lg-8">
          <ul
            className="nav nav-pills d-flex flex-row justify-content-start gap-sm-4 gap-3 mb-45 wow fadeInDown"
            data-wow-duration="1.5s"
            data-wow-delay=".2s"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active details-tab-btn"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Biding History
              </button>
            </li>
            <li className="nav-item" role="presentation">
              
            </li>
            <li className="nav-item" role="presentation"></li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".2s"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="describe-content">
                <div className="bid-list-area">
                  <ul className="bid-list">
                    <li>
                      <div className="row d-flex align-items-center">
                        <div className="col-7">
                          <div className="bidder-area">
                            <div className="bidder-img">
                              <img alt="images" src={bidder} />
                            </div>
                            <div className="bidder-content">
                              <Link to={"#"}>
                                <h6>Robart FOX</h6>
                              </Link>
                              <p>24.50 ETH</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-5 text-end">
                          <div className="bid-time">
                            <p>4 Hours Ago</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row d-flex align-items-center">
                        <div className="col-7">
                          <div className="bidder-area">
                            <div className="bidder-img">
                              <img alt="images" src={bidder} />
                            </div>
                            <div className="bidder-content">
                              <Link to={"#"}>
                                <h6>Jane Cooper</h6>
                              </Link>
                              <p>224.5 ETH</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-5 text-end">
                          <div className="bid-time">
                            <p>5 Hours Ago</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row d-flex align-items-center">
                        <div className="col-7">
                          <div className="bidder-area">
                            <div className="bidder-img">
                              <img alt="images" src={bidder} />
                            </div>
                            <div className="bidder-content">
                              <Link to={"#"}>
                                <h6>Guy Hawkins</h6>
                              </Link>
                              <p>34.5 ETH</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-5 text-end">
                          <div className="bid-time">
                            <p>6 Hours 45 minutes Ago</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row d-flex align-items-center">
                        <div className="col-7">
                          <div className="bidder-area">
                            <div className="bidder-img">
                              <img alt="images" src={bidder} />
                            </div>
                            <div className="bidder-content">
                              <Link to={"#"}>
                                <h6>Robart FOX</h6>
                              </Link>
                              <p>24.50 ETH</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-5 text-end">
                          <div className="bid-time">
                            <p>4 Hours Ago</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row d-flex align-items-center">
                        <div className="col-7">
                          <div className="bidder-area">
                            <div className="bidder-img">
                              <img alt="images" src={bidder} />
                            </div>
                            <div className="bidder-content">
                              <Link to={"#"}>
                                <h6>Robart FOX</h6>
                              </Link>
                              <p>24.50 ETH</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-5 text-end">
                          <div className="bid-time">
                            <p>4 Hours Ago</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-bid"
              role="tabpanel"
              aria-labelledby="pills-bid-tab"
            >
              <div className="bid-list-area">
                <ul className="bid-list">
                  <li>
                    <div className="row d-flex align-items-center">
                      <div className="col-7">
                        <div className="bidder-area">
                          <div className="bidder-img">
                            <img alt="images" src={bidder} />
                          </div>
                          <div className="bidder-content">
                            <Link to={"#"}>
                              <h6>Robart FOX</h6>
                            </Link>
                            <p>24.50 ETH</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 text-end">
                        <div className="bid-time">
                          <p>4 Hours Ago</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row d-flex align-items-center">
                      <div className="col-7">
                        <div className="bidder-area">
                          <div className="bidder-img">
                            <img alt="images" src={bidder} />
                          </div>
                          <div className="bidder-content">
                            <Link to={"#"}>
                              <h6>Jane Cooper</h6>
                            </Link>
                            <p>224.5 ETH</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 text-end">
                        <div className="bid-time">
                          <p>5 Hours Ago</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row d-flex align-items-center">
                      <div className="col-7">
                        <div className="bidder-area">
                          <div className="bidder-img">
                            <img alt="images" src={bidder} />
                          </div>
                          <div className="bidder-content">
                            <Link to={"#"}>
                              <h6>Guy Hawkins</h6>
                            </Link>
                            <p>34.5 ETH</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 text-end">
                        <div className="bid-time">
                          <p>6 Hours 45 minutes Ago</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row d-flex align-items-center">
                      <div className="col-7">
                        <div className="bidder-area">
                          <div className="bidder-img">
                            <img alt="images" src={bidder} />
                          </div>
                          <div className="bidder-content">
                            <Link to={"#"}>
                              <h6>Robart FOX</h6>
                            </Link>
                            <p>24.50 ETH</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 text-end">
                        <div className="bid-time">
                          <p>4 Hours Ago</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row d-flex align-items-center">
                      <div className="col-7">
                        <div className="bidder-area">
                          <div className="bidder-img">
                            <img alt="images" src={bidder} />
                          </div>
                          <div className="bidder-content">
                            <Link to={"#"}>
                              <h6>Robart FOX</h6>
                            </Link>
                            <p>24.50 ETH</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 text-end">
                        <div className="bid-time">
                          <p>4 Hours Ago</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-10 ">
                  <div className="eg-card auction-card1">
                    <div className="auction-img">
                      <img alt="images" src={auct} />
                      <div className="auction-timer">
                        <div className="countdown" id="timer1">
                          <h4>
                            <Counter />
                          </h4>
                        </div>
                      </div>
                      <div className="author-area">
                        <div className="author-emo">
                          <img alt="imagess" src={svg} />
                        </div>
                        <div className="author-name">
                          <span>by @robatfox</span>
                        </div>
                      </div>
                    </div>
                    <div className="auction-content">
                      <h4>
                        <Link
                          to={`${process.env.PUBLIC_URL}/auction-details`}
                          onClick={scrollTop}
                        >
                          Brand New royal Enfield 250 CC For Sale
                        </Link>
                      </h4>
                      <p>
                        Bidding Price : <span>$85.9</span>{" "}
                      </p>
                      <div className="auction-card-bttm">
                        <Link
                          to={`${process.env.PUBLIC_URL}/auction-details`}
                          onClick={scrollTop}
                          className="eg-btn btn--primary btn--sm"
                        >
                          Place a Bid
                        </Link>
                        <div className="share-area">
                          <ul className="social-icons d-flex">
                            <li>
                              <Link to={"#"}>
                                <i className="bx bxl-facebook" />
                              </Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bx bxl-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bx bxl-pinterest" />
                              </Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bx bxl-instagram" />
                              </Link>
                            </li>
                          </ul>
                          <div>
                            <Link to={"#"} className="share-btn">
                              <i className="bx bxs-share-alt" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-10">
                  <div className="eg-card auction-card1 wow fadeInDown">
                    <div className="auction-img">
                      <img alt="images" src={auct} />
                      <div className="auction-timer">
                        <div className="countdown" id="timer2">
                          <h4>
                            <Counter />
                          </h4>
                        </div>
                      </div>
                      <div className="author-area">
                        <div className="author-emo">
                          <img alt="images" src={svg} />
                        </div>
                        <div className="author-name">
                          <span>by @robatfox</span>
                        </div>
                      </div>
                    </div>
                    <div className="auction-content">
                      <h4>
                        <Link
                          to={`${process.env.PUBLIC_URL}/auction-details`}
                          onClick={scrollTop}
                        >
                          Wedding Special Exclusive Cupple Ring (S2022)
                        </Link>
                      </h4>
                      <p>
                        Bidding Price : <span>$85.9</span>{" "}
                      </p>
                      <div className="auction-card-bttm">
                        <Link
                          to={`${process.env.PUBLIC_URL}/auction-details`}
                          onClick={scrollTop}
                          className="eg-btn btn--primary btn--sm"
                        >
                          Place a Bid
                        </Link>
                        <div className="share-area">
                          <ul className="social-icons d-flex">
                            <li>
                              <Link to={"#"}>
                                <i className="bx bxl-facebook" />
                              </Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bx bxl-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bx bxl-pinterest" />
                              </Link>
                            </li>
                            <li>
                              <Link to={"#"}>
                                <i className="bx bxl-instagram" />
                              </Link>
                            </li>
                          </ul>
                          <div>
                            <Link to={"#"} className="share-btn">
                              <i className="bx bxs-share-alt" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4">
          <div className="blog-sidebar">
            <div
              className="sidebar-banner wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="1s"
            >
              <span>Cars</span>
              <h3>Toyota AIGID A Clasis Cars Sale</h3>
              <Link
                to={`${process.env.PUBLIC_URL}/auction-details`}
                onClick={scrollTop}
                className="eg-btn bg-[#f57d1f] card--btn"
              >
                Details
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default AuctionDetailsTab