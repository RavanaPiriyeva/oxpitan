import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../style/newsDetail.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ConnectIcon from "../components/ConnectIcon/ConnectIcon";
import Comment from "../components/Comment/Comment";
const NewsDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const getNews = async () => {
    const res = await axios.get(`http://localhost:8080/news/` + id);
    setNews(res.data);
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <Helmet>
        <title>News Detail</title>
      </Helmet>
      <section className="news_detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="news_detail_title">
                <h2>News Detail</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news_detail_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="detail_card_image">
                <span style={{ backgroundColor: news.color }}>26 FEB,2019</span>
                <img src={news.image} alt="img" />
              </div>
              <div className="detail_card_title">
                <h2>{news.title}</h2>
                <p>{news.detailText}</p>
              </div>
              <div className="d-flex align-items-baseline flex-wrap detail_tags ">
                <div className="col-12 col-md-1 pe-md-0 py-2">
                  <span>Tags</span>
                </div>
                <div className="col-12 col-md-6   px-md-2 ">
                  <div className="tags_left">
                    <ul>
                      <li>
                        <Link to="/" className="left_link">
                          Charity
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="left_link">
                          POOR
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="left_link">
                          Love
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-5">
                  <ConnectIcon />
                </div>
              </div>
              <div className="detail_comment_top">
                <img
                  src="http://layerdrops.com/oxpitan/images/post-box-img.jpg"
                  alt="img"
                />
                <div>
                  <h2>Kevin Martin</h2>
                  <p>
                    Cursus massa at urnaaculis estie. Sed aliquamellus vitae
                    ultrs condmentum lightly believable. If you are going to use
                    a of you need to be sure there isn't anything embarrassing.
                  </p>
                </div>
              </div>
              <Comment />
            </div>
            <div className="news_right col-lg-4 col-md-12" key={news._id}>
              <div className="recent_posts">
                <h3> Recent Posts</h3>
                <div className="post">
                  <img src={news.detailImage} alt="img" />
                  <div>
                    {" "}
                    <h4>{news.detailTitle}</h4>
                    <h4>{news.category}</h4>
                  </div>
                </div>
              </div>
              <div className="categories">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="/">Charity</a>
                  </li>
                  <li>
                    <a href="/">Fundrising</a>
                  </li>
                  <li>
                    <a href="/">Donations</a>
                  </li>
                  <li>
                    <a href="/">Save Lifes</a>
                  </li>
                  <li>
                    <a href="/">Health</a>
                  </li>
                  <li>
                    <a href="/">Education</a>
                  </li>
                  <li>
                    <a href="/">Food</a>
                  </li>
                  <li>
                    <a href="/">Water</a>
                  </li>
                </ul>
              </div>
              <div className="popular_tags">
                <div>
                  <Link to="/" className="popular_link">
                    <button> Charity</button>
                  </Link>
                  <Link to="/" className="popular_link">
                    <button> poor </button>
                  </Link>
                  <Link to="/" className="popular_link">
                    <button> love</button>
                  </Link>
                </div>
                <div>
                  <Link to="/" className="popular_link">
                    <button> donations</button>
                  </Link>
                  <Link to="/" className="popular_link">
                    <button> health</button>
                  </Link>
                  <Link to="/" className="popular_link">
                    <button>save</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;
