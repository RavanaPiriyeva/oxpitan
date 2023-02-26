import React from "react";
import { Link } from "react-router-dom";
import "../Home/helpus.scss";
const HelpUs = () => {
  return (
    <div className="help_us">
      <img className="help-image image1"  src="http://layerdrops.com/oxpitan/images/heart-icon1.png" alt="img" />
      <img className="help-image image2"  src="http://layerdrops.com/oxpitan/images/heart-icon2.png" alt="img" />
      <img className="help-image image3"  src="	http://layerdrops.com/oxpitan/images/heart-icon3.png" alt="img" />
      <img className="help-image image4"  src="http://layerdrops.com/oxpitan/images/heart-icon4.png" alt="img" />
      <img className="help-image image5"  src="http://layerdrops.com/oxpitan/images/heart-icon5.png" alt="img" />
      <img className="help-image image6"  src="	http://layerdrops.com/oxpitan/images/heart-icon6.png
" alt="img" />
      <img className="help-image image7"  src="http://layerdrops.com/oxpitan/images/heart-icon7.png" alt="img" />
      <img className="help-image image8"  src="http://layerdrops.com/oxpitan/images/heart-icon8.png" alt="img" />
      <img className="help-image image9"  src="http://layerdrops.com/oxpitan/images/heart-icon9.png" alt="img" />
      <img className="help-image image10"  src="http://layerdrops.com/oxpitan/images/heart-icon10.png" alt="img" />
      <img className="help-image image11"  src="http://layerdrops.com/oxpitan/images/heart-icon11.png" alt="img" />
     

      

      <div className="container">
        <div className="help_us_title">
          <h2>We Believe that We can Save More Lifes with you</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="help_card">
              <div className="help_card_icon1">
                <i className="fa-solid fa-dove"></i>
              </div>
              <h4 className="help_title">Hope</h4>
              <p className="help_text">
                Lorem ipsum is simply free text available in the market
                wesbites.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="help_card">
              <div className="help_card_icon2">
               
                <i className="fa-solid fa-hands-praying"></i>
              </div>

              <h4 className="help_title">Prayers</h4>
              <p className="help_text">
                Lorem ipsum is simply free text available in the market
                wesbites.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="help_card">
              <div className="help_card_icon3">
                <i class="fa-solid fa-globe"></i>
              </div>

              <h4 class="help_title">Peace</h4>
              <p class="help_text">
                Lorem ipsum is simply free text available in the market
                wesbites.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="help_card">
              <div className="help_card_icon4">
                <i class="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <h4 class="help_title">Donation</h4>
              <p class="help_text">
                Lorem ipsum is simply free text available in the market
                wesbites.
              </p>
            </div>
          </div>
        </div>
        <Link to="/donatenow" className="help_link">
          <button>Donate Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HelpUs;
