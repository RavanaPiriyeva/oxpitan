import React from "react";
import "../Home/givehelp.scss";
import donationLogo from "../../media/smalllogo.png";
const GiveHelp = () => {
  return (
    <div className="givehelp">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <img src={donationLogo} alt="" />
            <h2>Give a helping hand for homeless childrens</h2>
            <div className="givehelp_icons">
              <i className="icon1 fa-solid fa-burger"><h2>Food</h2></i>
              <i className="icon2 fa-solid fa-bottle-water"><h2>Water</h2></i>
              <i className="icon3 fa-solid fa-heart-circle-plus"><h2>Medical</h2></i>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="givehelp_text">
              <p>
                Aliq is notm hendr erit a augue insu image pellen tes que id
                erat quis simply free text sollicitud. Lorem ipsum dolor sit
                amet, consectetur adipiscing ullam blandit hendrerit faucibus
                suspendisse. Dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidi labore et dolore magna aliqua enim ad
                minim veniam.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveHelp;
