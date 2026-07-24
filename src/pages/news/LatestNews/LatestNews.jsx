import "./LatestNews.css";

import { Link } from "react-router-dom";

import PageHero from "../../../components/common/PageHero/PageHero";
import CTASection from "../../../components/home/CTASection/CTASection";

import { latestNews } from "../../../data/newsData";

import heroImage from "../../../assets/images/news/news-hero.jpg";

import news1 from "../../../assets/images/news/news1.jpg";
import news2 from "../../../assets/images/news/news2.jpg";
import news3 from "../../../assets/images/news/news3.jpg";
import news4 from "../../../assets/images/news/news4.jpg";
import news5 from "../../../assets/images/news/news5.jpg";
import news6 from "../../../assets/images/news/news6.jpg";

const images = {
  news1,
  news2,
  news3,
  news4,
  news5,
  news6,
};

export default function LatestNews() {
  return (
    <>
      <PageHero
        subtitle="News & Events"
        title="Latest News"
        description="Stay updated with the latest announcements, project updates, community initiatives, and company achievements."
        backgroundImage={heroImage}
      />

      <section className="news-section">

        <div className="container">

          <div className="section-header">

            <span>Latest Updates</span>

            <h2>Company News</h2>

            <p>
              Explore the latest developments, project milestones,
              sustainability initiatives and company announcements.
            </p>

          </div>

          <div className="news-grid">

            {latestNews.map((item) => (

              <div
                className="news-card"
                key={item.id}
              >

                <div className="news-image">

                  <img
                    src={images[item.image]}
                    alt={item.title}
                  />

                  <div className="news-date">
                    {item.date}
                  </div>

                </div>

                <div className="news-content">

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <Link
                    to={`/news/${item.id}`}
                    className="primary-btn"
                  >
                    Read More
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <CTASection />

    </>
  );
}
