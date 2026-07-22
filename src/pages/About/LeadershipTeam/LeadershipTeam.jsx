import "./LeadershipTeam.css";

import PageHero from "../../../components/common/PageHero/PageHero";
import CTASection from "../../../components/home/CTASection/CTASection";

import { leadershipTeam } from "../../../data/aboutData";

import heroImage from "../../../assets/images/hero/about-hero.jpg";

import ceo from "../../../assets/images/about/leadership/ceo.jpg";
import cto from "../../../assets/images/about/leadership/cto.jpg";
import coo from "../../../assets/images/about/leadership/coo.jpg";
import finance from "../../../assets/images/about/leadership/finance.jpg";
import project from "../../../assets/images/about/leadership/project.jpg";
import hr from "../../../assets/images/about/leadership/hr.jpg";

import { FaLinkedinIn } from "react-icons/fa";

const images = {
  ceo,
  cto,
  coo,
  finance,
  project,
  hr,
};

export default function LeadershipTeam() {

  const ceoMember = leadershipTeam[0];

  const teamMembers = leadershipTeam.slice(1);

  return (
    <>

      <PageHero
        subtitle="About HydraNexa"
        title="Leadership Team"
        description="Meet the passionate professionals leading HydraNexa's operations, innovation and long-term growth."
        backgroundImage={heroImage}
      />

      <section className="leadership-section">

        <div className="container">

          <div className="section-header">

            <span>Leadership</span>

            <h2>
              Meet Our
              <br />
              Leadership Team
            </h2>

            <p>
              Our leadership team combines technical excellence,
              strategic vision and operational expertise to
              deliver sustainable hydropower solutions.
            </p>

          </div>

          {/* Featured CEO */}

          <div className="ceo-card">

            <div className="ceo-image">

              <img
                src={images[ceoMember.image]}
                alt={ceoMember.name}
              />

            </div>

            <div className="ceo-content">

              <span>{ceoMember.position}</span>

              <h3>{ceoMember.name}</h3>

              <p>{ceoMember.description}</p>

              <div className="social-icons">

                <a href="#">
                  <FaLinkedinIn />
                </a>

              </div>

            </div>

          </div>

          {/* Leadership Members */}

          <div className="leadership-grid">

            {teamMembers.map((member) => (

              <div
                className="leader-card"
                key={member.id}
              >

                <div className="leader-image">

                  <img
                    src={images[member.image]}
                    alt={member.name}
                  />

                </div>

                <div className="leader-content">

                  <h3>{member.name}</h3>

                  <span>{member.position}</span>

                  <p>{member.description}</p>

                  <div className="social-icons">

                    <a href="#">
                      <FaLinkedinIn />
                    </a>

                  </div>

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
