import "./BoardOfDirectors.css";

import PageHero from "../../../components/common/PageHero/PageHero";
import CTASection from "../../../components/home/CTASection/CTASection";

import { boardMembers } from "../../../data/aboutData";

import heroImage from "../../../assets/images/hero/about-hero.jpg";

import chairman from "../../../assets/images/about/board/chairman.jpg";
import director1 from "../../../assets/images/about/board/director1.jpg";
import director2 from "../../../assets/images/about/board/director2.jpg";
import director3 from "../../../assets/images/about/board/director3.jpg";
import director4 from "../../../assets/images/about/board/director4.jpg";
import director5 from "../../../assets/images/about/board/director5.jpg";

const images = {
  chairman,
  director1,
  director2,
  director3,
  director4,
  director5,
};

export default function BoardOfDirectors() {
  const chairperson = boardMembers[0];
  const directors = boardMembers.slice(1);

  return (
    <>
      <PageHero
        subtitle="About HydraNexa"
        title="Board of Directors"
        description="Meet the experienced leaders guiding HydraNexa's strategic vision and sustainable growth."
        backgroundImage={heroImage}
      />

      <section className="board-section">

        <div className="container">

          <div className="section-header">

            <span>Leadership</span>

            <h2>
              Meet Our
              <br />
              Board of Directors
            </h2>

            <p>
              Our Board provides strategic direction, governance and
              leadership to ensure long-term sustainable success.
            </p>

          </div>

          {/* Chairperson */}

          <div className="chairperson-card">

            <div className="chairperson-image">

              <img
                src={images[chairperson.image]}
                alt={chairperson.name}
              />

            </div>

            <div className="chairperson-content">

              <span>{chairperson.position}</span>

              <h3>{chairperson.name}</h3>

              <p>{chairperson.description}</p>

            </div>

          </div>

          {/* Directors */}

          <div className="directors-grid">

            {directors.map((member) => (

              <div
                className="director-card"
                key={member.id}
              >

                <img
                  src={images[member.image]}
                  alt={member.name}
                />

                <h3>{member.name}</h3>

                <span>{member.position}</span>

                <p>{member.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <CTASection />

    </>
  );
}
