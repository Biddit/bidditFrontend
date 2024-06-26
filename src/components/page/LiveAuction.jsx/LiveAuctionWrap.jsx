import React from "react";
import Pagination from "../../common/Pagination";
import LiveAuctionCard from "./LiveAuctionCard";
import process from "process";
import bg from "../../../assets/images/bg/section-bg.png";
import auct from "../../../assets/images/bg/live-auc1.png";
function LiveAuctionWrap() {
  return (
    <>
      <div className="live-auction-section pt-120 pb-120">
        <img alt="images" src={bg} class="img-fluid section-bg-top" />
        <img alt="images" src={bg} class="img-fluid section-bg-bottom" />
        <div className="container">
          <div className="row gy-4 mb-60 d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <LiveAuctionCard
                image={auct}
                price="75.99"
                title="Brand New royal Enfield 250 CC For Sale"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <LiveAuctionCard
                image={auct}
                price="85.99"
                title="Wedding Special Exclusive Cupple Ring (S2022)"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <LiveAuctionCard
                image={auct}
                price="99.99"
                title="Brand New Honda CBR 600 RR For Sale (2022)"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <LiveAuctionCard
                image={auct}
                price="35.99"
                title="Toyota AIGID A Class Hatchback Sale (2017 - 2021)"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <LiveAuctionCard
                image={auct}
                price="45.99"
                title="Havit HV-G61 USB Black Double Game Pad With Vibrat"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <LiveAuctionCard
                image={auct}
                price="35.99"
                title="IPhone 11 Pro Max All Variants Available For Sale"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <LiveAuctionCard
                image={auct}
                price="41.99"
                title="Blue ray filter All Variants Available For Sale"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <LiveAuctionCard
                image={auct}
                price="333.99"
                title="Pure leather All Variants Available For Sale"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <LiveAuctionCard
                image={auct}
                price="83.99"
                title="Water resist All Variants Available For Sale"
              />
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default LiveAuctionWrap;
