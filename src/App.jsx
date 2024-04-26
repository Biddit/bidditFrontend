import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/App";
import MainLayout from "./components/layout/MainLayout";
import Contact from "./components/page/contact/Contact";
import ErrorPage from "./components/page/error/ErrorPage";
import SignUp from "./components/page/signUp/SignUp";
import Faq from "./components/page/faq/Faq";
import "./index.css";
import Login from "./components/page/login/Login";
import AuctionDetails from "./components/page/auctionDetails/AuctionDetails";
import Dashboard from "./components/page/dashboard/Dashboard";
import Blog from "./components/page/blog/Blog";
import BlogDetails from "./components/page/BlogDetails/BlogDetails";
import LiveAuction from "./components/page/LiveAuction.jsx/LiveAuction";
import HowItWork from "./components/page/howItWork/HowItWork";
import About from "./components/page/about/About";
import Layout2 from "./components/layout/Layout2";
import Layout3 from "./components/layout/Layout3";
import Merchant from "./components/page/joinMerchant/Merchant";
import Verification from "./components/page/signUp/Verification";
import FundWallet from "./components/page/dashboard/wallet/FundWallet";
import DashbordMenu from "./components/page/dashboard/DashboardMenu";
import ContentOfDashboardTab from "./components/page/dashboard/ContentOfDashboardTab";
import ContentOfProfile from "./components/page/dashboard/ContentOfProfile";
import ContentOfOrder from "./components/page/dashboard/ContentOfOrder";
import ContentOfpurchase from "./components/page/dashboard/ContentOfpurchase";
import Wallet from "./components/page/dashboard/wallet/Wallet";

function App() {
  return (
    <Router>
      <Routes>
        
        {/* <Route path="/" element={<MainLayout />} /> */}
        <Route path="/" element={<Layout2 />} />
        {/* <Route path="/index3" element={<Layout3 />} /> */}
        <Route path="/dashboard" element={<DashbordMenu />}>
          <Route index element={<ContentOfDashboardTab />} />
          <Route path="profile" element={<ContentOfProfile />} />
          <Route path="order" element={<ContentOfOrder />} />
          <Route path="transaction" element={<ContentOfpurchase />} />
          <Route path="wallet" element={<Wallet />} />
        </Route>
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/error"
          element={
            <Layout>
              <ErrorPage />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/verify"
          element={
            <Layout>
              <Verification />
            </Layout>
          }
        />
        <Route
          path="/fund"
          element={
            <Layout>
              <FundWallet />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/auction-details"
          element={
            <Layout>
              <AuctionDetails />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blog-details"
          element={
            <Layout>
              <BlogDetails />
            </Layout>
          }
        />
        <Route
          path="/live-auction"
          element={
            <Layout>
              <LiveAuction />
            </Layout>
          }
        />
        <Route
          path="/how-works"
          element={
            <Layout>
              <HowItWork />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <Faq />
            </Layout>
          }
        />
        <Route
          path="/join-merchant"
          element={
            <Layout>
              <Merchant />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
