import React from "react";
import { Link } from "react-router-dom";
import "../Home/donation.scss";
import donationLogo from "../../media/smalllogo.png";
const Donation = () => {
  return (
    <div className="donation">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <img src={donationLogo} alt="" />
            <h2 className="donation_title">
              Fundraising for the people and causes you care about
            </h2>
            <Link to="/donatenow" className="donation_link">
              <button>Start Donation</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
