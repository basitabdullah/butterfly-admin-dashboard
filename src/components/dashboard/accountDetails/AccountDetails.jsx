import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "../../dashboard/accountDetails/accountDetails.scss";
const AccountDetails = () => {
  return (
    <div className="accountDetals">
      <div className="profile">
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="personDetails">
          <h1>Hi Mike,</h1>
          <span>Welcome back</span>
        </div>
      </div>
      <div className="accountThings">
        <div className="wrapper">
          <div className="todayBal">
            <h5>Today</h5>
            <h1>$19,826</h1>
            <span>Account Balance</span>
          </div>

          <div className="wrapperContributions">
            <div className="contributions">
              <h4>$4000</h4>
              <span>Year-to-date </span>
            </div>

            <div className="interest">
              <h4>$1892</h4>
              <span>Total Interest</span>
            </div>
          </div>
        </div>
        <div className="btn">
          I want to <IoMdArrowDropdown />
        </div>

        <div className="recentTransactions">
          <div className="widrawals">
            <div className="date">2020-08-07</div>
            <div className="bankDetails">
              <p>Widrawal Transfer to Bank- XXX11</p>
            </div>
          </div>

          <div className="widrawals">
            <div className="date">2020-08-07</div>
            <div className="bankDetails">
              <p>Widrawal Transfer to Bank-XXX11</p>
            </div>
          </div>

          <div className="widrawals">
            <div className="date">2020-08-07</div>
            <div className="bankDetails">
              <p>Widrawal Transfer to Bank-XXX11</p>
            </div>
          </div>

          <div className="widrawals">
            <div className="date">2020-08-07</div>
            <div className="bankDetails">
              <p>Widrawal Transfer to Bank-XXX11</p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
