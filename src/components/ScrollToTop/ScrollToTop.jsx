import React, { useState } from "react";
import "../../components/ScrollToTop/scroll.scss";
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 30) {
      setVisible(true);
    } else if (scrolled <= 30) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <button
        id="scroll_button"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <i className="fa fa-angle-up" title="Go top"></i>
      </button>
    </div>
  );
};

export default ScrollToTop;
