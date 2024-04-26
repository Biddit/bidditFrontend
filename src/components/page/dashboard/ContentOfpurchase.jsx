import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/images/bg/order1.png";
import bg1 from "../../../assets/images/bg/order2.png";
import svg from "../../../assets/images/icons/aiction-icon.svg";
import process from "process";
function ContentOfpurchase() {
  return (
    <>
      <div className=" ">
        {/* table Name*/}
        <div className="table-title-area">
          <h3>All Purchase</h3>
          <select id="order-category">
            <option value={"01"}>Show: Last 05 Order</option>
            <option value={"02"}>Show: Last 03 Order</option>
            <option value={"03"}>Show: Last 15 Order</option>
            <option value={"04"}>Show: Last 20 Order</option>
          </select>
        </div>
        {/* table */}
        <div className="table-wrapper">
          <table className="eg-table order-table table mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Transfer Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Name">Mamman Mohammed</td>
                <td data-label="Transfer Type">Bank</td>
                <td data-label="Amount" className="text-green">+ 10,000.00</td>
                <td data-label="Image">
                04.Mar.2024 - 11:39
                </td>
                <td data-label="Status" className="text-green">
                  <button className="eg-btn text-white p-2  bg-green-600">
                    Completed
                  </button>
                </td>
              </tr>
              <tr>
                <td data-label="Name">Mamman Mohammed</td>
                <td data-label="Transfer Type">Momo</td>
                <td data-label="Amount" className="text-red ">- 10,000.00</td>
                <td data-label="Image">
                04.Mar.2024 - 11:39
                </td>
                <td data-label="Status" className="text-green">
                  <button className=" text-white p-2 w-[6rem] rounded bg-gray-400">
                    Pending
                  </button>
                </td>
              </tr>
              <tr>
                <td data-label="Name">Mamman Mohammed</td>
                <td data-label="Transfer Type">Bank</td>
                <td data-label="Amount" className="text-red">- 10,000.00</td>
                <td data-label="Image">
                04.Mar.2024 - 11:39
                </td>
                <td data-label="Status" className="text-green">
                  <button className="w-[6rem] rounded text-white p-2  bg-red-500">
                    Canceled
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* pagination area */}
        <div className="table-pagination">
          <p>Showing 10 to 20 of 1 entries</p>
          <nav className="pagination-wrap">
            <ul className="pagination style-two d-flex justify-content-center gap-md-3 gap-2">
              <li className="page-item">
                <Link className="page-link" to={"#"} tabIndex={-1}>
                  Prev
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to={"#"}>
                  01
                </Link>
              </li>
              <li className="page-item active" aria-current="page">
                <Link className="page-link" to={"#"}>
                  02
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to={"#"}>
                  03
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to={"#"}>
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default ContentOfpurchase;
