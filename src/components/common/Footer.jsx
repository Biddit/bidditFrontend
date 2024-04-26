import { useEffect } from "react";
import logo from "../../assets/images/bg/biddit.png";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

import WOW from "wowjs";
const transition = "transition-all ease-in-out duration-500";
function Footer() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  // const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <footer className="bg-[#FAEEE5]">
        <div className=" mt-[50px] w-full pt-10 px-8  ">
          <section className=" flex flex-col lg:flex-row gap-8 ">
            <article
              className="w-full sm:w-2/4 "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <p className="text-xl font-bold pb-4">About biddit</p>

              <p className="w-full text-gray-800/90">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                adipisci eaque. Error laudantium tempora est reprehenderit
                asperiores aut iusto alias facere perferendis temporibus?
                Numquam commodi unde magni a, eius aliquam.
              </p>
            </article>

            <article
              className=" w-full sm:w-2/4 lg:w-1/4"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h3 className="text-xl font-bold">Sit Map</h3>
              <Link to="/">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Auctions
                </p>
              </Link>
              <Link to="/about">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  My
                </p>
              </Link>
              <Link to="/blogs">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Dashboard
                </p>
              </Link>
              <Link to="/contact">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Wallet
                </p>
              </Link>
              <Link to="/styles">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Notifications
                </p>
              </Link>
            </article>

            <article
              className="w-full sm:w-2/4 lg:w-1/4"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h3 className="text-xl font-bold">Company</h3>
              <Link to="/about">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  About
                </p>
              </Link>
              <Link to="*">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Our Team
                </p>
              </Link>
              <Link to="/password">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Suppliers
                </p>
              </Link>
              <Link to="/license">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Careers
                </p>
              </Link>
            </article>
            <article
              className="w-full sm:w-2/4 lg:w-1/4"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h3 className="text-xl font-bold">Help</h3>
              <Link to="/signup">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Customer Support
                </p>
              </Link>
              <Link to="*">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  FAQS
                </p>
              </Link>
              <Link to="/password">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Order & Shipping
                </p>
              </Link>
              <Link to="/license">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Payments
                </p>
              </Link>
              <Link to="/changelog">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Terms & Conditions
                </p>
              </Link>
              <Link to="/styles">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Privacy Policy
                </p>
              </Link>
            </article>
            <article
              className="w-full sm:w-2/4 lg:w-1/4"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h3 className="text-xl font-bold">Resources</h3>
              <Link to="/signup">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  How to bid
                </p>
              </Link>
              <Link to="*">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Auction Tutorial
                </p>
              </Link>
              <Link to="/password">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Reviews
                </p>
              </Link>
              <Link to="/license">
                <p
                  className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
                >
                  Tips and Tricks
                </p>
              </Link>
            </article>
            <article
              className="w-full sm:w-2/4 lg:w-1/4"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h3 className="text-xl font-bold">Socials</h3>
              <div className=" flex items-center ml-[-2rem] gap-2 border-r border-white/70">
                <AiOutlineTwitter
                  size={50}
                  className={` rounded-full p-3 text-gray hover:mt-[-10px] `}
                />
                <FaFacebookF
                  size={50}
                  className={` rounded-full bg-gray/10 p-3 text-gray `}
                />
                <FaLinkedinIn
                  size={50}
                  className={` rounded-full bg-gray/10 p-3 text-gray `}
                />
                <AiOutlineInstagram
                  size={50}
                  className={` rounded-full bg-gray/10 p-3 text-gray `}
                />
              </div>
            </article>
          </section>
          <div className="pb-2">
            <img src={logo} alt="" className="w-1/3 ml-[-1rem] lg:w-1/5"/>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
