import React from 'react'
import { Link } from 'react-router-dom'
import process from 'process'
function WhyCHooseUs() {
    const scrollTop = ()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <div className="choose-us-section pb-120">
        <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/section-bg.png"} className="section-bg-bottom" /> 
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title1">
                <h2>Why Choose Us</h2>
                <p className="mb-0">Explore on the world's best &amp; largest Bidding marketplace with our beautiful Bidding
                  products. We want to be a part of your smile, success and future growth.</p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="single-feature hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
                <span className="sn">01</span>
                <div className="icon">
                  <svg width={68} height={68} viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1145 48.0982C16.1114 48.0982 16.1082 48.0982 16.1034 48.0982C15.58 48.0919 15.1594 47.6633 15.1641 47.1399C15.1989 43.917 17.8904 41.2935 20.2657 38.9799C21.9957 37.2941 23.7843 35.5498 23.6103 34.299C23.362 32.5151 21.5181 31.4034 19.5651 30.2253C19.3232 30.0798 19.0812 29.9343 18.8424 29.7872C18.3965 29.5121 18.2573 28.927 18.5325 28.481C18.8076 28.0351 19.3912 27.8959 19.8387 28.1711C20.0727 28.315 20.3084 28.4573 20.5456 28.6012C22.6884 29.8932 25.1174 31.3591 25.4906 34.038C25.7974 36.2409 23.7542 38.2319 21.5909 40.3399C19.4797 42.3973 17.0887 44.7283 17.0618 47.162C17.057 47.6807 16.6332 48.0982 16.1145 48.0982Z" />
                    <path d="M32.8288 58.4831C27.6782 58.4831 22.8865 56.8353 19.0184 53.6757C18.4744 53.2313 17.9795 52.7758 17.5477 52.3236C17.1856 51.944 17.1998 51.3431 17.5794 50.9826C17.9589 50.6204 18.5598 50.6346 18.9204 51.0142C19.2983 51.4111 19.7364 51.8112 20.2203 52.2081C24.7352 55.8959 30.6575 57.3224 36.8977 56.2249C43.1901 55.1179 49.0444 51.5835 53.3837 46.2716C62.306 35.3505 61.9486 20.2402 52.5867 12.591C44.2164 5.75306 31.0497 7.12887 21.9598 15.7902C21.5803 16.1523 20.9794 16.1365 20.6188 15.7585C20.2567 15.379 20.2725 14.7781 20.652 14.4175C25.3598 9.93269 31.2774 7.10673 37.3152 6.46311C43.4573 5.80841 49.3085 7.46255 53.7902 11.1235C63.9633 19.4353 64.4409 35.7411 54.856 47.4734C50.2304 53.1364 43.9697 56.9096 37.2298 58.0957C35.7417 58.3534 34.271 58.4831 32.8288 58.4831Z" />
                    <path d="M47.5548 39.5697C46.2533 39.5697 44.9423 39.1379 43.8575 38.2524C41.3589 36.2108 40.9873 32.5182 43.0288 30.0196C45.0704 27.521 48.763 27.1494 51.2616 29.191C53.7602 31.2325 54.1318 34.9251 52.0902 37.4237C50.9358 38.8359 49.2516 39.5697 47.5548 39.5697ZM45.0578 36.7817C46.7451 38.1606 49.2421 37.9092 50.6211 36.2219C52.0001 34.5345 51.7487 32.0391 50.0613 30.6585C48.374 29.2795 45.8769 29.531 44.498 31.2183C43.119 32.9072 43.3704 35.4027 45.0578 36.7817Z" />
                    <path d="M33.5093 52.2602C31.9833 52.2602 30.5173 51.74 29.3202 50.7611C27.946 49.6383 27.092 48.049 26.9133 46.2826C26.7346 44.5177 27.2565 42.7893 28.3777 41.415C30.6944 38.578 34.8867 38.1574 37.7237 40.4741C39.098 41.5969 39.9519 43.1862 40.1306 44.9526C40.3077 46.7175 39.7874 48.4459 38.6662 49.8202C37.5434 51.1944 35.9541 52.0483 34.1877 52.227C33.96 52.2492 33.7339 52.2602 33.5093 52.2602ZM33.5251 40.8758C32.1493 40.8758 30.783 41.4704 29.8468 42.6169C29.045 43.5989 28.6734 44.8324 28.7999 46.0944C28.9264 47.3548 29.5368 48.4918 30.5189 49.2935C31.5009 50.0953 32.7344 50.4669 33.9964 50.3404C35.2567 50.2139 36.3938 49.6035 37.194 48.6215C37.9957 47.6394 38.3673 46.4059 38.2408 45.144C38.1143 43.8836 37.5039 42.7466 36.5219 41.9448C35.6442 41.2253 34.5815 40.8758 33.5251 40.8758Z" />
                    <path d="M44.4198 23.7873C43.2939 23.7873 42.1616 23.4141 41.2238 22.6471C39.0637 20.8823 38.741 17.6879 40.5059 15.5261C42.2707 13.3659 45.4651 13.0433 47.6269 14.8081C49.7871 16.573 50.1097 19.7674 48.3449 21.9292C47.3438 23.1547 45.8874 23.7873 44.4198 23.7873ZM44.4277 15.5688C43.5105 15.5688 42.5997 15.9641 41.975 16.7295C40.8712 18.08 41.072 20.0758 42.4225 21.1796C43.773 22.2834 45.7688 22.0826 46.8726 20.732C47.9764 19.3815 47.7756 17.3858 46.425 16.282C45.8384 15.8012 45.1315 15.5688 44.4277 15.5688Z" />
                    <path d="M28.9452 26.2243C27.9647 26.2243 27.0206 25.889 26.252 25.2612C25.3696 24.5401 24.8193 23.5169 24.7054 22.3831C24.5916 21.2476 24.9253 20.1375 25.648 19.2535C27.1376 17.4301 29.8323 17.1581 31.6557 18.6478C32.5381 19.3689 33.0884 20.3921 33.2023 21.5259C33.3161 22.6614 32.9825 23.7715 32.2598 24.6555C31.5386 25.5379 30.5155 26.0883 29.3816 26.2021C29.2361 26.2179 29.0906 26.2243 28.9452 26.2243ZM28.9562 19.584C28.2683 19.584 27.5852 19.8813 27.1171 20.4538C26.7154 20.944 26.5304 21.5623 26.5936 22.1917C26.6569 22.8227 26.9621 23.3904 27.4523 23.7905C27.9426 24.1922 28.5593 24.3772 29.1903 24.3139C29.8212 24.2507 30.389 23.9455 30.7891 23.4552C31.1907 22.965 31.3758 22.3467 31.3125 21.7173C31.2492 21.0863 30.944 20.5186 30.4538 20.1185C30.0142 19.7579 29.4828 19.584 28.9562 19.584Z" />
                    <path d="M15.2209 47.5067C15.1228 47.5067 15.0232 47.4909 14.9236 47.4593C14.4254 47.2948 14.155 46.7587 14.3195 46.2606C14.952 44.3407 15.6083 41.9623 16.2709 39.1917C17.1265 35.6162 17.9551 31.5077 18.6699 27.3091C19.6915 21.2903 20.411 15.4676 20.6957 10.9164C20.9566 6.73042 20.7842 4.77898 20.615 3.89814C20.1643 4.67302 19.3578 6.45842 18.2224 10.4957C16.9889 14.8857 15.7459 20.6182 14.7227 26.6386C13.4228 34.2862 12.6163 41.6587 12.5657 46.3586C12.5594 46.8789 12.1356 47.2964 11.6169 47.2964C11.6137 47.2964 11.6106 47.2964 11.6058 47.2964C11.0824 47.29 10.6617 46.8615 10.668 46.3365C10.7218 41.4705 11.5172 34.1755 12.8519 26.3192C13.9716 19.7311 15.3284 13.5826 16.6758 9.00763C17.3399 6.75256 17.9678 4.99088 18.545 3.76847C19.1253 2.53814 19.8749 1.30782 21.0214 1.50233C22.1679 1.69842 22.4684 3.10744 22.6123 4.45954C22.7546 5.80214 22.7657 7.67451 22.6487 10.0213C22.4099 14.7845 21.6619 21.0357 20.5423 27.6254C19.8212 31.8651 18.983 36.0163 18.118 39.6313C17.4427 42.4526 16.7722 44.8816 16.1223 46.852C15.991 47.2537 15.621 47.5067 15.2209 47.5067Z" />
                    <path d="M13.2958 66.5135C13.2373 66.5135 13.1787 66.5088 13.1218 66.4977C10.8794 66.0786 8.91372 63.9849 7.58693 60.5991C6.44674 57.6925 5.98814 54.2545 6.38823 51.6247C6.7219 49.4281 7.91428 47.4814 9.65856 46.2843C11.1261 45.277 12.804 44.9132 14.3838 45.2611C17.8533 46.025 19.9155 50.0955 18.9809 54.3352C18.6013 56.0558 17.7933 57.3715 16.9377 58.7647C15.8102 60.6007 14.6447 62.4984 14.2367 65.6865C14.2035 65.9458 14.0659 66.1799 13.854 66.3333C13.6895 66.4519 13.495 66.5135 13.2958 66.5135ZM13.2009 47.0292C12.3691 47.0292 11.5151 47.3091 10.7307 47.8467C9.41818 48.7481 8.51837 50.2283 8.26218 51.9093C7.90953 54.2277 8.32702 57.2924 9.35176 59.9065C10.201 62.073 11.3301 63.6085 12.5399 64.2869C13.1107 61.3692 14.2762 59.47 15.32 57.7716C16.1233 56.4638 16.816 55.3346 17.1275 53.9272C17.836 50.7091 16.4222 47.6538 13.9758 47.1145C13.7212 47.0576 13.4618 47.0292 13.2009 47.0292Z" />
                    <path d="M17.1971 40.3618C17.1401 40.3618 17.0816 40.3571 17.0231 40.346L11.9864 39.4114C11.4708 39.3165 11.1308 38.82 11.2273 38.306C11.3238 37.7921 11.8187 37.4505 12.3327 37.5454L17.3694 38.48C17.885 38.5749 18.225 39.0714 18.1285 39.5854C18.0447 40.0424 17.6462 40.3618 17.1971 40.3618Z" />
                  </svg>
                </div>
                <div className="content">
                  <h5><Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={scrollTop}>High Quality Products</Link></h5>
                  <p className="para">Voluptate aut blanditiis accusantium offic expedita dolorem inventore </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="single-feature hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
                <span className="sn">02</span>
                <div className="icon">
                  <svg width={68} height={68} viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.2684 48.1614C41.0249 48.1614 40.783 48.0681 40.5979 47.8831C40.2532 47.5384 40.2295 46.9928 40.5284 46.6196C40.5473 46.3096 40.2405 45.1457 38.5738 42.7578C37.0604 40.5897 34.8622 38.031 32.3858 35.5561C29.9093 33.0797 27.3522 30.8831 25.1841 29.3681C22.7962 27.7014 21.6339 27.3946 21.3223 27.4135C20.9507 27.7124 20.4035 27.6887 20.0588 27.344C19.6887 26.9739 19.6887 26.373 20.0588 26.0014C21.0155 25.0446 22.8136 25.5 25.7186 27.4357C28.097 29.0202 30.9419 31.4271 33.7284 34.2135C36.5148 37 38.9217 39.8449 40.5062 42.2233C42.4418 45.1283 42.8973 46.9264 41.9405 47.8831C41.7539 48.0697 41.5104 48.1614 41.2684 48.1614Z" />
                    <path d="M51.1438 49.2178C50.6203 49.2178 50.1949 48.7924 50.1949 48.2689C50.1949 43.773 47.5445 41.6334 45.3211 40.6292C40.8884 38.6287 35.14 39.5776 32.7521 41.6824C32.3584 42.0287 31.759 41.9908 31.4127 41.5986C31.0664 41.2048 31.1043 40.6055 31.4965 40.2592C34.7305 37.4079 41.4182 36.7848 46.1007 38.8992C49.964 40.6434 52.0926 43.9707 52.0926 48.2689C52.0926 48.7924 51.6672 49.2178 51.1438 49.2178Z" />
                    <path d="M27.0026 37.7952C26.8429 37.7952 26.68 37.7541 26.5314 37.6687C26.0775 37.4077 25.921 36.8274 26.1819 36.3735C28.4306 32.4595 28.1381 24.2189 24.1198 18.6508C22.0813 15.8264 18.3334 12.7285 12.049 14.0078C11.535 14.1122 11.0337 13.7817 10.9293 13.2677C10.825 12.7538 11.1571 12.2525 11.6694 12.1481C17.3466 10.9921 22.3154 12.9072 25.6585 17.5391C29.7432 23.1989 30.7363 32.2571 27.8266 37.3192C27.651 37.6244 27.3316 37.7952 27.0026 37.7952Z" />
                    <path d="M41.269 48.1614C41.0254 48.1614 40.7835 48.0697 40.5984 47.8831C40.2284 47.5131 40.2268 46.9121 40.5984 46.5421L40.6 46.5405C40.9701 46.1704 41.571 46.1704 41.9426 46.5405C42.3127 46.9105 42.3127 47.5115 41.9426 47.8831C41.756 48.0681 41.5125 48.1614 41.269 48.1614Z" />
                    <path d="M20.726 27.6192C20.4825 27.6192 20.2405 27.5275 20.0555 27.3409C19.6854 26.9708 19.6838 26.3699 20.0555 25.9998L20.0571 25.9982C20.4271 25.6282 21.028 25.6282 21.3997 25.9982C21.7697 26.3683 21.7697 26.9692 21.3997 27.3409C21.2115 27.5275 20.9679 27.6192 20.726 27.6192Z" />
                    <path d="M41.9368 46.542C41.5921 46.1973 41.0497 46.1736 40.678 46.4693C40.667 46.4693 40.6559 46.4709 40.6448 46.4725C40.3017 46.474 39.1362 46.1419 36.8115 44.5179C34.6434 43.0045 32.0847 40.8063 29.6098 38.3299C27.135 35.8534 24.9368 33.2963 23.4218 31.1282C21.7977 28.8004 21.4656 27.638 21.4672 27.2933C21.4688 27.2822 21.4688 27.2727 21.4704 27.2617C21.7661 26.89 21.7424 26.346 21.3976 26.0029C21.0276 25.6328 20.4267 25.6328 20.055 26.0029C19.7909 26.267 19.6391 26.5975 19.5917 26.996L8.25308 57.0346C7.96369 57.8 8.14396 58.6366 8.72276 59.2153C9.11969 59.6123 9.63522 59.821 10.1682 59.821C10.4133 59.821 10.6615 59.7767 10.9035 59.685L40.9342 48.3527C41.3375 48.3069 41.6696 48.1519 41.9368 47.8846C42.3069 47.513 42.3069 46.9121 41.9368 46.542ZM10.233 57.9091C10.2093 57.9186 10.1365 57.9455 10.0654 57.8727C9.99262 57.8 10.0195 57.7288 10.029 57.7051L20.482 30.0054C20.7556 30.513 21.0893 31.0633 21.4878 31.6627C23.0723 34.0411 25.4792 36.886 28.2656 39.6725C31.0521 42.4589 33.897 44.8658 36.2754 46.4503C36.8732 46.8488 37.4235 47.1841 37.9296 47.4577L10.233 57.9091Z" />
                    <path d="M39.5776 32.0832C39.3531 32.0832 39.1269 32.0041 38.9451 31.8412C38.5545 31.4917 38.5213 30.8924 38.8707 30.5018C40.0014 29.2367 41.5923 29.5498 42.7531 29.7775C43.9027 30.0036 44.4863 30.0653 44.8563 29.651C45.2264 29.2367 45.0999 28.6658 44.7472 27.5477C44.3914 26.4186 43.9027 24.872 45.0334 23.6085C46.1641 22.345 47.755 22.6565 48.9158 22.8858C50.0654 23.1119 50.649 23.1736 51.0174 22.7593C51.3669 22.3687 51.9663 22.3355 52.3569 22.685C52.7475 23.0344 52.7807 23.6338 52.4312 24.0244C51.3005 25.2879 49.7096 24.9764 48.5489 24.7471C47.3992 24.521 46.8157 24.4593 46.4472 24.8736C46.0772 25.2879 46.2037 25.8588 46.5563 26.9769C46.9121 28.106 47.4008 29.6526 46.2701 30.9161C45.1394 32.1796 43.5485 31.8681 42.3878 31.6404C41.2381 31.4143 40.6546 31.3526 40.2861 31.7669C40.0979 31.9756 39.8386 32.0832 39.5776 32.0832Z" />
                    <path d="M35.4196 25.6519C34.9104 25.6519 34.4882 25.2471 34.4724 24.7331C34.417 23.0379 35.7849 22.1665 36.7828 21.5292C37.7712 20.8982 38.2345 20.5409 38.2171 19.9858C38.1997 19.4307 37.7127 19.1049 36.6863 18.5388C35.6489 17.9679 34.2289 17.1867 34.1735 15.4915C34.1182 13.7962 35.4861 12.9248 36.4839 12.2875C37.4723 11.6566 37.9356 11.2992 37.9182 10.7457C37.9008 10.2222 38.312 9.7842 38.8355 9.7668C39.3573 9.75099 39.7969 10.1606 39.8143 10.684C39.8697 12.3793 38.5018 13.2506 37.5039 13.8879C36.5155 14.5189 36.0522 14.8763 36.0696 15.4298C36.087 15.9848 36.5741 16.3122 37.6004 16.8768C38.6378 17.4476 40.0579 18.2289 40.1132 19.9241C40.1686 21.6194 38.8007 22.4907 37.8028 23.128C36.8144 23.759 36.3511 24.1164 36.3685 24.6715C36.3859 25.1949 35.9747 25.6329 35.4513 25.6503C35.4402 25.6503 35.4291 25.6519 35.4196 25.6519Z" />
                    <path d="M28.1782 12.0138C28.0137 12.0138 27.8461 11.9711 27.6942 11.881C27.2436 11.6137 27.0965 11.0302 27.3637 10.5811L28.515 8.64542C28.7822 8.19472 29.3658 8.04765 29.8149 8.31491C30.2656 8.58217 30.4127 9.1657 30.1454 9.61482L28.9942 11.5505C28.817 11.8478 28.5023 12.0138 28.1782 12.0138Z" />
                    <path d="M48.3454 58.3107C48.0243 58.3107 47.7112 58.1478 47.5325 57.8537C47.2605 57.4061 47.4028 56.8226 47.852 56.5506L50.2715 55.0831C50.719 54.8111 51.3026 54.9534 51.5746 55.4025C51.8466 55.85 51.7042 56.4336 51.2551 56.7056L48.8356 58.1731C48.6822 58.2664 48.513 58.3107 48.3454 58.3107Z" />
                    <path d="M57.8539 47.2425C57.6895 47.2425 57.5218 47.1998 57.37 47.1097C56.9193 46.8424 56.7723 46.2589 57.0395 45.8098L58.1908 43.8742C58.458 43.4235 59.04 43.2764 59.4907 43.5437C59.9414 43.8109 60.0884 44.3945 59.8212 44.8436L58.6699 46.7792C58.4928 47.0765 58.1765 47.2425 57.8539 47.2425Z" />
                    <path d="M8.99492 37.4963C8.75139 37.4963 8.50943 37.403 8.32441 37.218C7.95436 36.8479 7.95436 36.247 8.32441 35.8754L9.91688 34.2829C10.2869 33.9129 10.8879 33.9129 11.2595 34.2829C11.6295 34.653 11.6295 35.2539 11.2595 35.6255L9.66702 37.218C9.48041 37.403 9.23846 37.4963 8.99492 37.4963Z" />
                    <path d="M53.4702 14.1502C53.2267 14.1502 52.9847 14.0569 52.7997 13.8719L51.2072 12.281C50.8372 11.911 50.8372 11.3101 51.2072 10.9384C51.5773 10.5684 52.1782 10.5684 52.5498 10.9384L54.1423 12.5309C54.5123 12.9009 54.5123 13.5019 54.1423 13.8735C53.9557 14.0585 53.7137 14.1502 53.4702 14.1502Z" />
                    <path d="M33.8293 58.3154C33.4482 58.3154 33.0892 58.0845 32.9437 57.7081L32.1309 55.608C31.9411 55.1194 32.1846 54.5691 32.6733 54.3809C33.1619 54.1911 33.7123 54.4346 33.9005 54.9233L34.7133 57.0234C34.9031 57.512 34.6595 58.0623 34.1709 58.2505C34.0586 58.2948 33.9432 58.3154 33.8293 58.3154Z" />
                    <path d="M15.1 23.7936C14.8802 23.7936 14.6604 23.7177 14.4817 23.5643L12.7753 22.0951C12.3784 21.7536 12.3325 21.1542 12.6757 20.7573C13.0173 20.3603 13.6166 20.3145 14.0136 20.6576L15.7199 22.1268C16.1168 22.4683 16.1627 23.0677 15.8195 23.4646C15.6329 23.6829 15.3672 23.7936 15.1 23.7936Z" />
                    <path d="M55.3087 34.5043C54.8944 34.5043 54.5133 34.2307 54.3963 33.8117L53.7859 31.6436C53.6435 31.1391 53.9377 30.6157 54.4421 30.4734C54.9466 30.331 55.4701 30.6252 55.6124 31.1296L56.2228 33.2977C56.3651 33.8022 56.071 34.3256 55.5665 34.468C55.4811 34.4933 55.3941 34.5043 55.3087 34.5043Z" />
                  </svg>
                </div>
                <div className="content">
                  <h5><Link to={"#"}>Creator’s Royalty</Link></h5>
                  <p className="para">Voluptate aut blanditiis accusantium offic expedita dolorem inventore </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="single-feature hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".6s">
                <span className="sn">03</span>
                <div className="icon">
                  <svg width={68} height={68} viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.6543 22.72H15.8108C12.9706 22.72 10.6602 20.4096 10.6602 17.5694V17.0997C10.6602 14.2611 12.9706 11.9507 15.8108 11.9507H38.3978C41.238 11.9507 43.5484 14.2611 43.5484 17.0997V17.3401C43.5484 17.8635 43.123 18.2889 42.5996 18.2889C42.0762 18.2889 41.6508 17.8635 41.6508 17.3401V17.0997C41.6508 15.3064 40.1911 13.8484 38.3978 13.8484H15.8108C14.0175 13.8484 12.5578 15.3064 12.5578 17.0997V17.5694C12.5578 19.3627 14.0175 20.8223 15.8108 20.8223H29.6543C30.1777 20.8223 30.6031 21.2477 30.6031 21.7711C30.6031 22.2946 30.1777 22.72 29.6543 22.72Z" />
                    <path d="M23.774 31.5916H11.485C8.64636 31.5916 6.33594 29.2811 6.33594 26.441V25.9729C6.33594 23.1327 8.64636 20.8223 11.485 20.8223H29.6536C30.1771 20.8223 30.6024 21.2477 30.6024 21.7711C30.6024 22.2945 30.1771 22.7199 29.6536 22.7199H11.485C9.69166 22.7199 8.23361 24.1796 8.23361 25.9729V26.441C8.23361 28.2343 9.69166 29.6939 11.485 29.6939H23.774C24.2974 29.6939 24.7228 30.1193 24.7228 30.6427C24.7228 31.1662 24.2974 31.5916 23.774 31.5916Z" />
                    <path d="M23.2261 40.4631H18.0217C17.9632 40.4631 17.9031 40.4616 17.8446 40.46C15.0566 40.3683 12.8711 38.1069 12.8711 35.3125V34.8444C12.8711 32.0043 15.1815 29.6938 18.0217 29.6938H23.7717C24.2951 29.6938 24.7205 30.1192 24.7205 30.6427C24.7205 31.1661 24.2951 31.5915 23.7717 31.5915H18.0217C16.2284 31.5915 14.7688 33.0511 14.7688 34.8444V35.3125C14.7688 37.0774 16.1477 38.5054 17.9094 38.5623C17.949 38.5639 17.9853 38.5655 18.0217 38.5655H23.2261C23.7495 38.5655 24.1749 38.9909 24.1749 39.5143C24.1749 40.0378 23.7495 40.4631 23.2261 40.4631Z" />
                    <path d="M27.3843 49.3316H11.485C8.64636 49.3316 6.33594 47.0211 6.33594 44.181V43.7129C6.33594 40.8727 8.64636 38.5623 11.485 38.5623H23.2268C23.7503 38.5623 24.1757 38.9877 24.1757 39.5111C24.1757 40.0345 23.7503 40.4599 23.2268 40.4599H11.485C9.69166 40.4599 8.23361 41.9196 8.23361 43.7129V44.181C8.23361 45.9743 9.69166 47.4339 11.485 47.4339H27.3843C27.9078 47.4339 28.3331 47.8593 28.3331 48.3827C28.3331 48.9062 27.9078 49.3316 27.3843 49.3316Z" />
                    <path d="M41.8292 56.0493C30.8907 56.0493 21.9922 47.1508 21.9922 36.2123C21.9922 25.2738 30.8907 16.3752 41.8292 16.3752C52.7677 16.3752 61.6662 25.2738 61.6662 36.2123C61.6662 47.1508 52.7677 56.0493 41.8292 56.0493ZM41.8292 18.2713C31.9376 18.2713 23.8899 26.3191 23.8899 36.2107C23.8899 46.1023 31.9376 54.1501 41.8292 54.1501C51.7208 54.1501 59.7686 46.1023 59.7686 36.2107C59.7686 26.3191 51.7208 18.2713 41.8292 18.2713Z" />
                    <path d="M41.8282 50.4703C33.9671 50.4703 27.5703 44.0736 27.5703 36.2124C27.5703 28.3513 33.9671 21.9546 41.8282 21.9546C49.6893 21.9546 56.086 28.3513 56.086 36.2124C56.086 44.0736 49.6893 50.4703 41.8282 50.4703ZM41.8282 23.8523C35.0124 23.8523 29.468 29.3966 29.468 36.2124C29.468 43.0283 35.0124 48.5726 41.8282 48.5726C48.644 48.5726 54.1884 43.0283 54.1884 36.2124C54.1884 29.3966 48.6424 23.8523 41.8282 23.8523Z" />
                    <path d="M35.5909 37.3668H33.6442C33.1207 37.3668 32.6953 36.9414 32.6953 36.418C32.6953 35.8945 33.1207 35.4691 33.6442 35.4691H35.5909C35.8028 35.4691 36.0083 35.3932 36.1538 35.262C36.2234 35.1987 36.3404 35.0643 36.3404 34.8808C36.3404 34.5614 35.9973 34.291 35.5909 34.291H33.6442C33.1207 34.291 32.6953 33.8656 32.6953 33.3421C32.6953 32.8187 33.1207 32.3933 33.6442 32.3933H35.5909C37.0505 32.3933 38.2381 33.5082 38.2381 34.8808C38.2381 35.5593 37.9503 36.195 37.4269 36.6694C36.9303 37.1201 36.2788 37.3668 35.5909 37.3668Z" />
                    <path d="M33.6442 40.03C33.1207 40.03 32.6953 39.6046 32.6953 39.0812V33.3439C32.6953 32.8204 33.1207 32.395 33.6442 32.395C34.1676 32.395 34.593 32.8204 34.593 33.3439V39.0812C34.593 39.6046 34.1692 40.03 33.6442 40.03Z" />
                    <path d="M43.7683 40.0298H40.109C39.5856 40.0298 39.1602 39.6044 39.1602 39.0809V33.3436C39.1602 32.8202 39.5856 32.3948 40.109 32.3948C40.6324 32.3948 41.0578 32.8202 41.0578 33.3436V38.1321H43.7683C44.2918 38.1321 44.7172 38.5575 44.7172 39.0809C44.7172 39.6044 44.2918 40.0298 43.7683 40.0298Z" />
                    <path d="M50.1661 40.0298C49.8514 40.0298 49.5494 39.8732 49.3707 39.598L47.3781 36.5396V39.0809C47.3781 39.6044 46.9527 40.0298 46.4293 40.0298C45.9059 40.0298 45.4805 39.6044 45.4805 39.0809V33.3436C45.4805 32.923 45.7572 32.5529 46.1589 32.4343C46.5621 32.3157 46.9954 32.4738 47.2248 32.8265L49.2173 35.8849V33.3436C49.2173 32.8202 49.6427 32.3948 50.1661 32.3948C50.6896 32.3948 51.115 32.8202 51.115 33.3436V39.0809C51.115 39.5016 50.8382 39.8716 50.4366 39.9902C50.3464 40.0171 50.2563 40.0298 50.1661 40.0298Z" />
                  </svg>
                </div>
                <div className="content">
                  <h5><Link to={`${process.env.PUBLIC_URL}/live-auction`} onClick={scrollTop}>Top Calss Product Price</Link></h5>
                  <p className="para">Voluptate aut blanditiis accusantium offic expedita dolorem inventore </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="single-feature hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".8s">
                <span className="sn">04</span>
                <div className="icon">
                  <svg width={68} height={68} viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.1984 28.2928C35.1652 29.0677 34.5121 29.6687 33.7372 29.6355C32.9623 29.6022 32.363 28.9491 32.3946 28.1742C32.4278 27.3994 33.0809 26.7984 33.8558 26.8316C34.6307 26.8648 35.2316 27.518 35.1984 28.2928ZM38.3833 34.4382C38.2537 33.6743 38.7676 32.9501 39.5298 32.8188C40.2937 32.6891 41.0179 33.2031 41.1492 33.9653C41.2789 34.7291 40.7665 35.4534 40.0027 35.5847C39.2389 35.7159 38.513 35.202 38.3833 34.4382ZM29.2255 34.7892C28.6783 35.3364 27.7896 35.3364 27.2424 34.7892C26.6952 34.2421 26.6952 33.3533 27.2424 32.8062C27.7896 32.259 28.6783 32.259 29.2255 32.8062C29.7726 33.3533 29.7726 34.2421 29.2255 34.7892ZM35.1937 40.759C34.6465 41.3062 33.7577 41.3062 33.2106 40.759C32.6634 40.2118 32.6634 39.3231 33.2106 38.7759C33.7577 38.2288 34.6465 38.2288 35.1937 38.7759C35.7424 39.3231 35.7424 40.2103 35.1937 40.759Z" />
                    <path d="M34.2047 42.1664C33.5642 42.1664 32.9617 41.9165 32.5078 41.4642C31.5732 40.5296 31.5732 39.0067 32.5078 38.0721C33.444 37.1359 34.9653 37.1375 35.9015 38.0721C36.8361 39.0083 36.8361 40.5296 35.9015 41.4658C35.4476 41.9165 34.8451 42.1664 34.2047 42.1664ZM34.2047 39.361C34.1003 39.361 33.9959 39.4005 33.9169 39.4796C33.7587 39.6377 33.7587 39.8955 33.9169 40.0536C34.0212 40.158 34.1414 40.1722 34.2047 40.1722C34.2679 40.1722 34.3881 40.1564 34.4925 40.0536C34.6506 39.8955 34.6506 39.6377 34.4925 39.478C34.4134 39.4005 34.309 39.361 34.2047 39.361ZM39.7633 36.603C39.2715 36.603 38.7907 36.4512 38.3811 36.1602C37.8577 35.7902 37.5114 35.2383 37.4038 34.6057C37.2963 33.9747 37.4402 33.339 37.8118 32.8156C38.1835 32.2921 38.7338 31.9458 39.3663 31.8383C39.9973 31.7307 40.6346 31.8746 41.1565 32.2463C41.6799 32.6163 42.0262 33.1682 42.1338 33.8008C42.2413 34.4317 42.0974 35.0675 41.7258 35.5909C41.3557 36.1143 40.8038 36.4607 40.1713 36.5682C40.0353 36.5903 39.8993 36.603 39.7633 36.603ZM39.7696 33.796C39.7475 33.796 39.7237 33.7976 39.7 33.8023C39.5561 33.8276 39.4739 33.9162 39.4375 33.9684C39.4011 34.0206 39.3442 34.1265 39.3679 34.272C39.3932 34.4159 39.4818 34.4997 39.534 34.5361C39.5846 34.5725 39.6921 34.6294 39.8376 34.6057C39.9815 34.5804 40.0653 34.4918 40.1017 34.4396C40.1381 34.389 40.195 34.2815 40.1713 34.136C40.1475 33.9905 40.0574 33.9083 40.0052 33.8719C39.9609 33.8403 39.8803 33.796 39.7696 33.796ZM28.2349 36.195C27.6197 36.195 27.0062 35.961 26.5381 35.4929C26.0842 35.039 25.8359 34.4365 25.8359 33.796C25.8359 33.1556 26.0858 32.553 26.5381 32.0992C27.4727 31.1646 28.9956 31.1646 29.9302 32.0992C30.8648 33.0338 30.8648 34.5567 29.9302 35.4913C29.4637 35.9609 28.8501 36.195 28.2349 36.195ZM28.2349 33.3912C28.1305 33.3912 28.0262 33.4307 27.9471 33.5098C27.8427 33.6142 27.8285 33.7343 27.8285 33.7976C27.8285 33.8609 27.8443 33.981 27.9471 34.0854C28.1052 34.2436 28.363 34.2436 28.5211 34.0854C28.6793 33.9273 28.6793 33.6695 28.5211 33.5098C28.4437 33.4307 28.3393 33.3912 28.2349 33.3912ZM33.8014 30.6332C33.7666 30.6332 33.7318 30.6332 33.6986 30.6316C33.0582 30.6048 32.4667 30.3296 32.0334 29.8583C31.6001 29.3871 31.3756 28.7735 31.4024 28.1346C31.4578 26.8126 32.5774 25.7815 33.901 25.8384C35.2231 25.8938 36.2526 27.015 36.1972 28.337C36.1703 28.9775 35.8952 29.5689 35.4239 30.0022C34.9764 30.4102 34.4039 30.6332 33.8014 30.6332ZM33.7983 27.8262C33.6623 27.8262 33.569 27.8927 33.5247 27.9338C33.4788 27.9765 33.3997 28.0698 33.3934 28.2153C33.3839 28.4398 33.5579 28.6296 33.7824 28.6391C33.9295 28.6454 34.0291 28.5742 34.075 28.5315C34.1209 28.4889 34.1999 28.3955 34.2063 28.2501C34.2126 28.103 34.1414 28.0034 34.0987 27.9575C34.056 27.9116 33.9627 27.8326 33.8172 27.8262C33.8109 27.8278 33.8046 27.8262 33.7983 27.8262Z" />
                    <path d="M22.1692 56.8876C19.3369 56.8876 16.5047 55.8091 14.3476 53.6536C10.0352 49.3412 10.0352 42.3245 14.3476 38.0105L38.0132 14.3465C40.1022 12.2575 42.8792 11.1062 45.8348 11.1062C48.7888 11.1062 51.5674 12.2575 53.6564 14.3465C55.7454 16.4355 56.8967 19.2124 56.8967 22.1681C56.8967 25.1237 55.7454 27.9006 53.6564 29.9896L29.9892 53.6536C27.8338 55.8107 25.0015 56.8876 22.1692 56.8876ZM15.7567 52.2446C19.2927 55.7806 25.0458 55.7806 28.5818 52.2446L52.2458 28.5806C53.9584 26.868 54.9009 24.5908 54.9009 22.1681C54.9009 19.7454 53.9584 17.4682 52.2458 15.7555C50.5331 14.0429 48.2559 13.1003 45.8332 13.1003C43.4105 13.1003 41.1333 14.0429 39.4207 15.7555L15.7567 39.4211C12.2207 42.9555 12.2207 48.7086 15.7567 52.2446Z" />
                    <path d="M17.4491 33.0923L14.3464 29.9896C10.0356 25.6772 10.0356 18.6589 14.3464 14.3465C16.4355 12.2575 19.2124 11.1062 22.168 11.1062C25.1237 11.1062 27.9006 12.2559 29.9896 14.3465L33.1224 17.4792L31.7133 18.8882L28.5806 15.7555C26.8679 14.0429 24.5907 13.0988 22.1664 13.0988C19.7437 13.0988 17.4681 14.0413 15.7539 15.7539C12.2195 19.2899 12.2195 25.043 15.7539 28.579L18.8566 31.6817L17.4491 33.0923Z" />
                    <path d="M45.8351 56.8876C43.0028 56.8876 40.1705 55.8091 38.0151 53.6537L34.8555 50.4941L36.2645 49.085L39.4241 52.2447C42.9601 55.7807 48.7117 55.7807 52.2477 52.2447C55.7837 48.7087 55.7837 42.9571 52.2477 39.4211L49.2114 36.3849L50.6204 34.9758L53.6567 38.0121C57.9691 42.3246 57.9691 49.3412 53.6567 53.6537C51.4997 55.8091 48.6674 56.8876 45.8351 56.8876Z" />
                  </svg>
                </div>
                <div className="content">
                  <h5><Link to={"#"}>Support Multiple Currency</Link></h5>
                  <p className="para">Voluptate aut blanditiis accusantium offic expedita dolorem inventore </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="single-feature hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s">
                <span className="sn">05</span>
                <div className="icon">
                  <svg width={68} height={68} viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.2516 24.4216C41.5489 23.9898 41.4414 23.4 41.0096 23.1011L36.5912 20.0474L36.5422 12.89C36.5391 12.3682 36.1152 11.9475 35.5934 11.9475C35.5918 11.9475 35.5886 11.9475 35.5871 11.9475C35.0636 11.9507 34.6414 12.3792 34.6445 12.9027L34.6967 20.5535C34.6983 20.8634 34.8517 21.1512 35.1063 21.3283L39.9311 24.6619C40.0956 24.7758 40.2838 24.8296 40.4704 24.8296C40.7709 24.8327 41.0666 24.6888 41.2516 24.4216Z" />
                    <path d="M46.7642 47.5828C46.4906 47.1353 45.9055 46.9961 45.4595 47.2697L40.777 50.1384C40.3943 50.374 40.2282 50.8452 40.3801 51.2675L41.8697 55.4218C42.0089 55.8092 42.3742 56.0512 42.7632 56.0512C42.8692 56.0512 42.9783 56.0338 43.0843 55.9958C43.5777 55.8187 43.8338 55.2763 43.6567 54.7829L42.428 51.3544L46.4526 48.889C46.8986 48.6139 47.0393 48.0288 46.7642 47.5828Z" />
                    <path d="M60.1414 42.7406C60.1493 42.7248 60.1557 42.7105 60.162 42.6947C60.1683 42.6789 60.1746 42.6615 60.181 42.6457C60.1857 42.6346 60.1905 42.6235 60.1936 42.6125C60.1936 42.6109 60.1952 42.6093 60.1952 42.6062C60.1999 42.5888 60.2047 42.5714 60.2094 42.554C60.2126 42.5413 60.2173 42.5271 60.2189 42.5144C60.2221 42.5018 60.2221 42.4891 60.2252 42.4765C60.2284 42.4575 60.2316 42.4401 60.2332 42.4211C60.2332 42.418 60.2332 42.4132 60.2332 42.4101C60.2411 42.3199 60.2347 42.2298 60.2173 42.1444V42.1428L58.1362 32.0155C57.7978 30.3709 56.5169 29.0915 54.8706 28.7563L47.9679 27.352V21.8646C47.9679 19.6965 46.7755 17.7213 44.8573 16.7092L36.0331 12.0599C35.682 11.8749 35.2519 11.9287 34.9577 12.1928L29.3612 17.2121C29.3343 17.2358 29.309 17.2611 29.2853 17.288L23.4214 23.884L15.0701 21.0375C14.7649 20.9331 14.428 20.9916 14.175 21.1909C13.922 21.3902 13.7876 21.7049 13.8192 22.0259L14.9167 33.5115L7.98702 41.719C7.98386 41.7222 7.98228 41.7253 7.98069 41.7285C7.94907 41.768 7.91902 41.8091 7.89372 41.8534C7.89055 41.8582 7.88897 41.8629 7.88581 41.8661C7.83679 41.9546 7.80042 42.0511 7.78144 42.1539C7.77986 42.1602 7.77828 42.1649 7.77828 42.1713C7.77037 42.2171 7.76562 42.2646 7.76562 42.3136C7.76562 42.3231 7.76562 42.3326 7.76562 42.3405C7.76562 42.3531 7.76562 42.3674 7.76562 42.38C7.76721 42.4148 7.77195 42.4496 7.77669 42.4844C7.77669 42.4875 7.77828 42.4923 7.77828 42.4955C7.78776 42.5445 7.80042 42.5935 7.81623 42.6394C7.81781 42.6425 7.81781 42.6441 7.81939 42.6473C7.83679 42.6963 7.85893 42.7437 7.88423 42.7896C7.88581 42.7928 7.88897 42.7975 7.89056 42.8007C7.91744 42.8465 7.94749 42.8892 7.98069 42.9303C7.98228 42.9319 7.98228 42.9335 7.98386 42.9351L18.6251 55.7048C18.6346 55.7159 18.644 55.7254 18.6535 55.7349C18.6646 55.7475 18.6757 55.7586 18.6867 55.7697C18.7057 55.7887 18.7263 55.8061 18.7453 55.8219C18.7547 55.8298 18.7642 55.8393 18.7737 55.8472C18.8038 55.8709 18.8338 55.8914 18.867 55.9104C18.8781 55.9168 18.8907 55.9231 18.9018 55.9294C18.9255 55.9421 18.9477 55.9531 18.9714 55.9642C18.984 55.9705 18.9983 55.9753 19.0109 55.98C19.0346 55.9895 19.0584 55.9974 19.0821 56.0053C19.0947 56.0101 19.109 56.0132 19.1232 56.0164C19.1485 56.0227 19.1754 56.0275 19.2007 56.0322C19.2133 56.0338 19.226 56.0369 19.2371 56.0385C19.2719 56.0433 19.3082 56.0448 19.3446 56.0464C19.3478 56.0464 19.3509 56.0464 19.3541 56.0464C19.3557 56.0464 19.3557 56.0464 19.3573 56.0464H42.7651C42.8346 56.0464 42.9042 56.0385 42.9722 56.0227L52.4733 53.8941C52.7136 53.8404 52.9224 53.6965 53.0584 53.4909L60.0813 42.8497C60.0861 42.8418 60.0908 42.8323 60.0972 42.8244C60.1066 42.8086 60.1177 42.7928 60.1256 42.7754C60.1304 42.7675 60.1351 42.7548 60.1414 42.7406ZM51.6841 52.1309L42.6591 54.1519H23.1115L34.4501 48.0367C34.9119 47.7884 35.0842 47.2128 34.8344 46.751C34.5861 46.2892 34.0105 46.1168 33.5487 46.3667L19.585 53.8973L10.6501 43.177L20.7663 42.6283L19.6261 47.8754C19.5154 48.3877 19.8396 48.8922 20.3519 49.0045C20.4199 49.0187 20.4879 49.0266 20.5544 49.0266C20.9908 49.0266 21.3846 48.723 21.4811 48.2786L22.8853 41.8139C22.9486 41.5245 22.8727 41.2224 22.6798 40.9979C22.4884 40.7733 22.2022 40.6515 21.9065 40.6658L10.8525 41.2651L16.623 34.4303C16.7875 34.2358 16.8666 33.9828 16.8428 33.7282L15.8466 23.3084L23.404 25.8845C23.7662 26.0078 24.1663 25.9019 24.4193 25.6172L30.6674 18.5895L35.7326 14.0462L43.9733 18.3887C45.2668 19.0702 46.0702 20.4018 46.0702 21.8646V27.5149L35.2835 32.3824C35.0447 32.49 34.8613 32.6924 34.7759 32.9407L32.6473 39.1619C32.4781 39.6584 32.7422 40.1977 33.2387 40.3669C33.3399 40.4017 33.4443 40.4191 33.5455 40.4191C33.9393 40.4191 34.3078 40.1708 34.4438 39.777L36.4395 33.9433L47.1313 29.12L54.4927 30.6176C55.3925 30.801 56.0915 31.5 56.2765 32.3982L58.0334 40.952L51.9767 39.0749C51.6952 38.9879 51.3884 39.0369 51.148 39.2062L47.2705 41.9483C46.8419 42.2503 46.7407 42.8434 47.0443 43.2703C47.2293 43.5313 47.5219 43.672 47.8192 43.672C48.009 43.672 48.2003 43.6151 48.3664 43.4981L51.8613 41.0263L57.7962 42.8671L51.6841 52.1309Z" />
                  </svg>
                </div>
                <div className="content">
                  <h5><Link to={`${process.env.PUBLIC_URL}/dashboard`} onClick={scrollTop}>Show All Bidders History</Link></h5>
                  <p className="para">Voluptate aut blanditiis accusantium offic expedita dolorem inventore </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="single-feature hover-border1 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1.2s">
                <span className="sn">06</span>
                <div className="icon">
                  <svg width={68} height={68} viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.6467 29.3588C50.5138 29.3588 50.3778 29.3303 50.2498 29.2702L35.9239 22.6442C34.7015 22.078 33.2972 22.078 32.0748 22.6442L17.7489 29.2686C17.2729 29.4885 16.7099 29.2813 16.4901 28.8053C16.2703 28.3293 16.4775 27.7663 16.9535 27.5465L31.2793 20.9205C33.0094 20.1203 34.9925 20.1203 36.7209 20.9205L51.0468 27.5465C51.5228 27.7663 51.7299 28.3309 51.5101 28.8053C51.3488 29.1548 51.0057 29.3588 50.6467 29.3588Z" />
                    <path d="M52.3012 46.7304C51.8521 46.2829 50.8289 44.4816 51.0345 37.4508C51.1515 33.4388 51.6101 29.7952 51.6307 29.6418C51.6355 29.6023 51.6386 29.5612 51.6386 29.5216C51.6386 25.3183 50.1363 21.2462 47.4068 18.0581C44.8355 15.0535 41.3279 13.0024 37.4804 12.2307L34.9043 4.16872C34.7794 3.77495 34.4125 3.50928 33.9997 3.50928C33.587 3.50928 33.2217 3.77653 33.0952 4.16872L30.5191 12.2323C26.6715 13.004 23.164 15.055 20.5927 18.0597C17.8632 21.2494 16.3609 25.3199 16.3609 29.5232C16.3609 29.5628 16.364 29.6039 16.3688 29.6434C16.3735 29.6814 16.8448 33.4135 16.9634 37.4349C17.1705 44.4785 16.1474 46.2813 15.6967 46.7304C15.3709 47.0562 15.325 47.5685 15.5891 47.9465L26.8692 64.0846C27.1096 64.4278 27.5461 64.5733 27.9446 64.442C28.3431 64.3108 28.6072 63.9344 28.5961 63.5153L28.03 42.9018C28.0205 42.5334 27.7975 42.2044 27.4607 42.0574L23.4218 40.3004C23.2399 40.2214 23.1229 40.0427 23.1229 39.8434V36.5162C23.1229 36.3074 23.2415 36.1825 23.3111 36.1271C23.3807 36.0718 23.5293 35.9848 23.7286 36.0307L30.3119 37.5836C30.6108 37.6548 30.8195 37.9283 30.8101 38.2304L30.4432 48.7024C30.4337 48.9886 30.5523 49.2638 30.7689 49.452L33.3782 51.7213C33.7356 52.0312 34.267 52.0312 34.6244 51.7213L37.2337 49.452C37.4503 49.2638 37.5689 48.9886 37.5595 48.7024L37.1926 38.2336C37.1831 37.9268 37.3934 37.6532 37.6907 37.5836L44.2709 36.0307C44.4749 35.9832 44.622 36.0702 44.6931 36.1256C44.7627 36.1809 44.8813 36.3058 44.8813 36.5146V39.8418C44.8813 40.0395 44.7643 40.2198 44.5824 40.2989L40.5435 42.0558L40.5451 42.0589C40.2573 42.1839 39.9853 42.4622 39.9727 42.9603L39.4081 63.5153C39.397 63.9344 39.6611 64.3108 40.0596 64.442C40.1577 64.4736 40.2573 64.4895 40.3569 64.4895C40.6606 64.4895 40.9531 64.344 41.135 64.0846L52.4151 47.9465C52.6728 47.5685 52.627 47.0562 52.3012 46.7304ZM41.3864 60.4047C41.524 55.4107 41.7818 46.0172 41.8482 43.5581L45.3336 42.0416C46.2081 41.6604 46.7742 40.7986 46.7742 39.845V36.5177C46.7742 35.784 46.4453 35.0992 45.8697 34.6422C45.2941 34.1852 44.5555 34.0176 43.8344 34.1836L37.2511 35.7365C36.0777 36.0133 35.2538 37.0886 35.2917 38.2968L35.6428 48.3165L33.9982 49.7477L32.3535 48.3165L32.7046 38.2936C32.7425 37.0886 31.9186 36.0133 30.7452 35.7365L24.1571 34.182C23.4408 34.016 22.7007 34.1836 22.1266 34.6406C21.551 35.0976 21.2221 35.7808 21.2221 36.5162V39.8434C21.2221 40.797 21.7866 41.6589 22.6611 42.04L26.1465 43.5565L26.6083 60.4031L17.5374 47.4246C18.5732 45.7357 19.0049 42.4369 18.8579 37.3954C18.7456 33.5257 18.3202 29.9866 18.2554 29.4647C18.2822 21.7538 23.8045 15.2527 31.4031 13.9955C31.4078 13.9955 31.411 13.9939 31.4157 13.9923C31.43 13.9892 31.4426 13.986 31.4553 13.9829C31.4727 13.9781 31.4916 13.9749 31.509 13.9702C31.5169 13.9686 31.5248 13.9655 31.5328 13.9623C31.5549 13.956 31.577 13.9481 31.5976 13.9402C31.5992 13.9402 31.6008 13.9386 31.6023 13.9386C31.6862 13.9038 31.7636 13.8595 31.8332 13.8042C31.8364 13.801 31.8395 13.7978 31.8443 13.7947C31.8633 13.7789 31.8822 13.763 31.9012 13.7456C31.9139 13.7346 31.9249 13.7219 31.936 13.7093C31.9455 13.6998 31.955 13.6903 31.9629 13.6808C31.9771 13.665 31.9898 13.6476 32.0024 13.6302C32.0072 13.6239 32.0135 13.616 32.0182 13.6096C32.0293 13.5938 32.0404 13.5764 32.0499 13.559C32.0562 13.5496 32.0625 13.5401 32.0673 13.5306C32.0752 13.5163 32.0831 13.5021 32.0894 13.4863C32.0957 13.4721 32.1036 13.4594 32.11 13.4452C32.1147 13.4341 32.1195 13.4215 32.1242 13.4088C32.1305 13.3914 32.1384 13.374 32.1448 13.355C32.1463 13.3519 32.1463 13.3487 32.1479 13.3471L33.9982 7.57663L35.8421 13.3487C35.8421 13.3503 35.8436 13.3519 35.8452 13.355C35.8595 13.3977 35.8768 13.4404 35.8974 13.48C35.9022 13.4895 35.9069 13.4974 35.9116 13.5069C35.9322 13.5448 35.9543 13.5812 35.9796 13.616C35.9844 13.6223 35.9891 13.6286 35.9939 13.635C36.0176 13.665 36.0413 13.6935 36.0682 13.7219C36.0745 13.7283 36.0793 13.7346 36.0856 13.7409C36.1156 13.771 36.1489 13.7978 36.1836 13.8247C36.19 13.8295 36.1963 13.8342 36.2026 13.839C36.2738 13.8896 36.3528 13.9291 36.4398 13.9591C36.4493 13.9623 36.4588 13.9655 36.4667 13.9686C36.5062 13.9813 36.5474 13.9923 36.5901 13.9987C36.5916 13.9987 36.5932 13.9987 36.5948 14.0003H36.5964C44.1934 15.2606 49.7109 21.7586 49.7378 29.4695C49.6745 29.9803 49.2507 33.5447 49.1368 37.3685C48.9866 42.4274 49.4199 45.7357 50.4557 47.4294L41.3864 60.4047Z" />
                  </svg>
                </div>
                <div className="content">
                  <h5><Link to={"#"}>100% Happy Customer</Link></h5>
                  <p className="para">Voluptate aut blanditiis accusantium offic expedita dolorem inventore </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default WhyCHooseUs