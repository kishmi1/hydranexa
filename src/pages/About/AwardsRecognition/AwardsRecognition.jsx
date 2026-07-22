import "./AwardsRecognition.css";

import PageHero from "../../../components/common/PageHero/PageHero";
import CTASection from "../../../components/home/CTASection/CTASection";

import {
  awardsData,
  certificationsData,
  achievementStats,
} from "../../../data/aboutData";

import heroImage from "../../../assets/images/hero/about-hero.jpg";

export default function AwardsRecognition() {
  return (
    <>
      <PageHero
        subtitle="About HydraNexa"
        title="Awards & Recognition"
        description="Celebrating our achievements, certifications and commitment to excellence in renewable energy."
        backgroundImage={heroImage}
      />

      {/* Awards */}

      <section className="awards-section">

        <div className="container">

          <div className="section-header">

            <span>Achievements</span>

            <h2>
              Awards &
              <br />
              Recognition
            </h2>

            <p>
              Our achievements reflect our commitment to innovation,
              sustainability and excellence in hydropower development.
            </p>

          </div>

          <div className="awards-grid">

            {awardsData.map((award) => {

              const Icon = award.icon;

              return (

                <div
                  className="award-card"
                  key={award.id}
                >

                  <div className="award-icon">
                    <Icon />
                  </div>

                  <span>{award.year}</span>

                  <h3>{award.title}</h3>

                  <p>{award.description}</p>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* Certifications */}

      <section className="certifications-section">

        <div className="container">

          <div className="section-header">

            <span>Certifications</span>

            <h2>International Standards</h2>

          </div>

          <div className="certifications-grid">

            {certificationsData.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  className="certificate-card"
                  key={item.id}
                >

                  <div className="certificate-icon">
                    <Icon />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="achievement-section">

        <div className="container">

          <div className="achievement-grid">

            {achievementStats.map((item) => (

              <div
                className="achievement-card"
                key={item.id}
              >

                <h2>{item.value}</h2>

                <p>{item.label}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <CTASection />

    </>
  );
}
