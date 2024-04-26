import React from "react";
import { Link } from "react-router-dom";
import Counter from "../../common/Counter";
import process from "process";
import bg from "../../../assets/images/bg/section-bg2.png";
import dotted from "../../../assets/images/bg/dotted2.png";
import auct from "../../../assets/images/bg/live-auc1.png";
import author from '../../../assets/images/bg/auction-authr1.png'

function AuctionCard(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        className="eg-card auction-card2 wow fadeInDown"
      >
        <div className="auction-img">
          <img alt="liveAuctionImage" src={props.image} />
          <div className="auction-timer">
            <div className="countdown" id="timer1">
              <h5>
                <Counter />
              </h5>
            </div>
          </div>
        </div>
        <div className="auction-content">
          <h4>
            <Link
              to={`/auction-details`}
              onClick={scrollTop}
            >
              {props.title}
            </Link>
          </h4>
          <div className="author-price-area">
            <div className="author flex items-center">
              <img
                alt="authorimage"
                src={props.authorImg}
              />
              <span className="name">By {props.authorName}</span>
            </div>
            <p className=" text-black">${props.price}</p>
          </div>
          <div className="auction-card-bttm">
            <Link
              to={`/auction-details`}
              onClick={scrollTop}
              className="eg-btn  bg-[#f57d1f] rounded-full text-white btn--sm"
            >
              Place a Bid
            </Link>
            <div className="share-area font-bold text-2xl">$ 10,000</div>
          </div>
        </div>
      </div>
    </>
  );
}

function LiveAuctionArea() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="live-auction pb-120">
        <img alt="auctioniImage" src={bg} className="img-fluid section-bg2" />
        <div className="container position-relative">
          <img alt="auctioniImage" src={dotted} className="dotted3" />
          <div className="row d-flex justify-content-center align-items-center mb-24 g-4">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title2 text-lg-start text-center">
                <h2>Live Auction</h2>
                <p className="mb-0">
                  Explore on the world's best &amp; largest Bidding marketplace
                  with our beautiful Bidding products. We want to be a part of
                  your smile, success and future growth.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-xl-6 text-lg-end text-center">
              <Link
                to={`${process.env.PUBLIC_URL}/auction-details`}
                onclick={scrollTop}
                className="eg-btn  bg-[#f57d1f]  text-white rounded-full btn--md"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="row gy-4 d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard
                image={auct}
                title="Brand New royal Enfield 250 CC For special Sale"
                authorImg={author}
                price="46.25"
                authorName="Sara Alexa"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard
                image={auct}
                title="Wedding wow Exclusive Cupple Ring (S2022)"
                authorImg={author}
                price="56.25"
                authorName="Sara Alexa"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard
                image={auct}
                title="Brand New Honda CBR 600 RR For Sale (2022)"
                authorImg={author}
                price="66.25"
                authorName="Sara Alexa"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard
                image={auct}
                title="Toyota AIGID A Class Hatchback Sale (2017 - 2021)"
                authorImg={author}
                price="25.25"
                authorName="Sara Alexa"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard
                image={auct}
                title="Havit HV-G61 USB Black Double Game With Vibrat"
                authorImg={author}
                price="28.25"
                authorName="Sara Alexa"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <AuctionCard
                image={auct}
                title="IPhone 11 Pro Max All Variants Available For Sale"
                authorImg={author}
                price="88.25"
                authorName="Sara Alexa"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveAuctionArea;
