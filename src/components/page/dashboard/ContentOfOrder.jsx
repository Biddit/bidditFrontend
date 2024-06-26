import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import bg from '../../../assets/images/bg/order1.png'
import bg1 from "../../../assets/images/bg/order2.png";
import svg from '../../../assets/images/icons/aiction-icon.svg'
import { orderListOptions } from '../../../data/data'

function ContentOfOrder() {
  const customStyle = {      
    
    control: (provided, state) => ({
      ...provided,
      background: '#fff',
      borderColor: '#EEEEEE',
      padding:0,
      '&:hover': { borderColor: '#32c36c' },
      boxShadow: state.isFocused ? null : null,
  
    }),            
  }
  return (
    <>
      <div className="">
        {/* table title*/}
        <div className="table-title-area">
          <h3>Order Bidding List</h3>
          <Select
            placeholder="filer order"
            valueContainer="select"
            options={orderListOptions}
            styles={customStyle}
          />
        </div>
        {/* table */}
        <div className="table-wrapper">
          <table className="eg-table order-table table mb-0">
            <thead>
              <tr>
                <th>Image</th>
                <th>Bidding ID</th>
                <th>Bid Amount(USD)</th>
                <th>Highest Bid</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Image">
                  <img alt="dashbordImage" src={bg} className="img-fluid" />
                </td>
                <td data-label="Bidding ID">Bidding_HvO253gT</td>
                <td data-label="Bid Amount(USD)">1222.8955</td>
                <td data-label="Highest Bid">$1222.8955</td>
                <td data-label="Status" className="text-[#f57d1f]">
                  <button className="eg-btn text-white p-2  bg-red-500">
                    Rejected
                  </button>
                </td>
                <td data-label="Action">
                  <button className="eg-btn action-btn green">
                    <img alt="dashbordImage" src={svg} />
                  </button>
                </td>
              </tr>
              <tr>
                <td data-label="Image">
                  <img alt="dashbordImage" src={bg1} className="img-fluid" />
                </td>
                <td data-label="Bidding ID">Bidding_HvO253gT</td>
                <td data-label="Bid Amount(USD)">1222.8955</td>
                <td data-label="Highest Bid">$1222.8955</td>
                <td data-label="Status" className="text-[#f57d1f]">
                  <button className="eg-btn text-white p-2  bg-[#f57d1f]">
                    Approved
                  </button>
                </td>
                <td data-label="Action">
                  <button className="eg-btn action-btn green">
                    <img alt="dashbordImage" src={svg} />
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
              <li className="page-item active" aria-current="page">
                <Link className="page-link" to={"#"}>
                  01
                </Link>
              </li>
              <li className="page-item">
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

export default ContentOfOrder