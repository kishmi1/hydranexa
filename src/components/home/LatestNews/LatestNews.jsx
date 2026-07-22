import "./LatestNews.css";


import { Link } from "react-router-dom";

import { latestNews } from "../../../data/homeData";

import news1 from "../../../assets/images/news/news1.jpg";
import news2 from "../../../assets/images/news/news2.jpg";
import news3 from "../../../assets/images/news/news3.jpg";

const newsImages = {
  news1,
  news2,
  news3,
};

export default function LatestNews() {
  return (
    <section className="latest-news">

      <div className="container">

        <div className="section-header">

          <span>News & Events</span>

          <h2>
            Latest News &
            <br />
            Company Updates
          </h2>

          <p>
            Stay informed with the latest developments, sustainability
            initiatives and corporate announcements from HydraNexa.
          </p>

        </div>

        <div className="news-grid">

          {latestNews.map((item) => (

            <article
              className="news-card"
              key={item.id}
            >

              <div className="news-image">

                <img
                  src={newsImages[item.image]}
                  alt={item.title}
                />

                <span className="news-category">
                  {item.category}
                </span>

              </div>

              <div className="news-content">

                <small>{item.date}</small>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Link
                  to="/news-events"
                  className="news-btn"
                >
                  Read More →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}
