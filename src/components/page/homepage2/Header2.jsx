import React, { useEffect, useReducer, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import process from "process";
import logo from "../../../assets/images/bg/biddit.png";
import { useLocation } from "react-router-dom";
function Header2() {
  const [search, setSearch] = useState();
  const [sidebar, setSidebar] = useState();

  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const [bgColor, setBgColor] = useState("");
  const scrollThreshold = 200; // Set the scroll threshold height

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > scrollThreshold) {
        setBgColor("bg-[#210D42]");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  /*---------menu button event----------*/
  const handleSidbarMenu = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };
  /*---------Using reducer mange the active or inactive menu----------*/
  const initialState = { activeMenu: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "homeOne":
        return { activeMenu: "homeOne" };
      case "pages":
        return { activeMenu: "pages" };
      case "news":
        return { activeMenu: "news" };
      default:
        return { activeMenu: "" };
    }
  }

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header-area");
    const scrollTop = window.scrollY;
    scrollTop >= 20
      ? header.classList.add("sticky")
      : header.classList
      ? header.classList.remove("sticky")
      : header.classList.add("sticky");
  };
  const searchFullScreen = () => {
    if (search === false || search === 0) {
      setSearch(1);
      console.log(search);
    } else {
      setSearch(false);
    }
  };
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className={search === 1 ? "mobile-search slide" : "mobile-search"}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <label>What are you looking for?</label>
              <input
                type="text"
                placeholder="Search Products, Category, Brand"
              />
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center">
              <div
                className=" w-8 text-2xl text-center rounded-full text-white bg-[#f57d1f]"
                onClick={searchFullScreen}
              >
                {/* <i class="bi bi-search me-4"></i> */}
                <i className="bi bi-x" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className={`header-area bg-[#210D42]  style-2`}>
        <div className="header-logo w-1/3 lg:w-1/5">
          <Link to={"/"}>
            <img alt="imagelogo" onClick={scrollTop} src={logo} />{" "}
          </Link>
        </div>
        <div className={sidebar === 1 ? "main-menu show-menu" : "main-menu"}>
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap ">
              <Link to={"/"}></Link>
            </div>
            <div className="menu-close-btn" onClick={handleSidbarMenu}></div>
          </div>
          <ul className="menu-list lg:text-white">
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "homeOne" })}
            >
              <Link
                to={"/"}
                className={`${state.activeMenu === "homeOne" ? "active " : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to={`/dashboard`} onClick={scrollTop}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to={`/about`} onClick={scrollTop}>
                Categories
              </Link>
            </li>
            <li>
              <Link to={`/how-works`} onClick={scrollTop}>
                How It Works
              </Link>
            </li>
            <li>
              <Link to={`/live-auction`} onClick={scrollTop}>
                Browse Product
              </Link>
            </li>

            <li>
              <Link to={`/contact`} onClick={scrollTop}>
                Contact Us
              </Link>
            </li>
          </ul>
          {/* mobile-search-area */}
          <div className="d-lg-none d-block">
            <form className="mobile-menu-form">
              <div className="input-with-btn d-flex flex-column">
                <input type="text" placeholder="Search here..." />
                <button
                  type="submit"
                  className="eg-btn  text-white bg-[#f57d1f] btn--sm"
                >
                  Search
                </button>
              </div>
              b
            </form>
          </div>
        </div>
        <div className="nav-right d-flex align-items-center">
          <div className="search-btn" onClick={searchFullScreen}>
            <i className="bi bi-search"></i>
          </div>
          <Link
            to={`${process.env.PUBLIC_URL}/join-merchant`}
            onClick={scrollTop}
            className="join-btn"
          >
            Join Merchant
          </Link>
          <div className="eg-btn  header-btn">
            <Link to={`/login`} onClick={scrollTop}>
              My Account
            </Link>
          </div>
          <div
            className="mobile-menu-btn d-lg-none d-block"
            onClick={handleSidbarMenu}
          >
            <i className="bx text-white bx-menu"></i>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header2;
