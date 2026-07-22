import "./CompanyHistory.css";

import PageHero from "../../../components/common/PageHero/PageHero";
import CTASection from "../../../components/home/CTASection/CTASection";

import { companyHistory } from "../../../data/aboutData";

import heroImage from "../../../assets/images/hero/about-hero.jpg";

import history1 from "../../../assets/images/about/history/history1.jpg";
import history2 from "../../../assets/images/about/history/history2.jpg";
import history3 from "../../../assets/images/about/history/history3.jpg";
import history4 from "../../../assets/images/about/history/history4.jpg";
import history5 from "../../../assets/images/about/history/history5.jpg";

const images = {
  history1,
  history2,
  history3,
  history4,
  history5,
};

export default function CompanyHistory() {
  return (
    <>
      <PageHero
        subtitle="About HydraNexa"
        title="Company History"
        description="Discover the journey of HydraNexa and the milestones that shaped our commitment to Nepal's sustainable energy future."
        backgroundImage={heroImage}
      />

      <section className="history-section">

        <div className="container">

          <div className="section-header">

            <span>Our Journey</span>

            <h2>
              Building a Sustainable
              <br />
              Energy Future
            </h2>

            <p>
              From our foundation to becoming a trusted renewable
              energy company, every milestone reflects our
              dedication to innovation, sustainability and growth.
            </p>

          </div>

          <div className="timeline">

            {companyHistory.map((item, index) => (

              <div
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={item.id}
              >

                <div className="timeline-image">

                  <img
                    src={images[item.image]}
                    alt={item.title}
                  />

                </div>

                <div className="timeline-content">

                  <span>{item.year}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

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
