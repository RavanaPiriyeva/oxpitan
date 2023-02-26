import React from 'react'
import "../ConnectIcon/connectIcon.scss"
const ConnectIcon = () => {
  return (
    <div><div className="connect_icon">
    <ul>
      <li>
        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
          <div>
            <i className="icon1 fa-brands fa-twitter"></i>
          </div>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/">
          <div>
            <i className="icon2 fa-brands fa-facebook-f"></i>
          </div>
        </a>
      </li>
      <li>
        <a href="https://www.pinterest.com/login/">
          <div>
            <i className="icon3 fa-brands fa-pinterest"></i>
          </div>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/">
          <div>
            <i className="icon4 fa-brands fa-instagram"></i>
          </div>
        </a>
      </li>
    </ul>
  </div></div>
  )
}

export default ConnectIcon