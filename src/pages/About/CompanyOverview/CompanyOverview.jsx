import "./CompanyOverview.css";
import { purposeData, companyStats } from "../../../data/aboutData";

import PageHero from "../../../components/common/PageHero/PageHero";
import CTASection from "../../../components/home/CTASection/CTASection";

import heroImage from "../../../assets/images/hero/about-hero.jpg";
import companyImage from "../../../assets/images/about/company-overview.jpg";

export default function CompanyOverview() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        subtitle="About HydraNexa"
        title="Company Overview"
        description="Delivering reliable renewable energy through innovation, sustainability, and responsible hydropower development."
        backgroundImage={heroImage}
      />

      {/* Company Introduction */}
      <section className="company-intro">
        <div className="container intro-grid">
          {/* Left Image */}
          <div className="intro-image">
            <img
              src={companyImage}
              alt="HydraNexa Company Overview"
            />
          </div>

          {/* Right Content */}
          <div className="intro-content">
            <span>WHO WE ARE</span>

            <h2>
              Building Nepal's Sustainable
              <br />
              Energy Future
            </h2>

            <p>
              HydraNexa Energy is a modern hydropower company
              committed to generating clean, reliable and
              sustainable electricity for Nepal through
              innovative engineering and responsible
              environmental practices.
            </p>

            <p>
              We believe renewable energy is the foundation of
              a sustainable future. Our projects are designed
              to create long-term value for communities,
              investors and the nation while protecting
              natural resources.
            </p>

            <ul>
              <li>Renewable Hydropower Solutions</li>
              <li>Environmental Responsibility</li>
              <li>Community Development</li>
              <li>Reliable Energy Infrastructure</li>
            </ul>

            <a
              href="/projects"
              className="primary-btn"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="our-purpose">
        <div className="container">
          <div className="section-header">
            <span>Our Purpose</span>

            <h2>
              Driven by Innovation,
              <br />
              Powered by Sustainability
            </h2>

            <p>
              Our purpose is to generate clean energy while
              creating long-term value for communities,
              the environment and future generations.
            </p>
          </div>

          <div className="purpose-grid">
            {purposeData.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="purpose-card"
                  key={item.id}
                >
                  <div className="purpose-icon">
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

      <section className="company-stats">

  <div className="container">

    <div className="section-header">

      <span>Company Statistics</span>

      <h2>Our Growth at a Glance</h2>

      <p>
        Numbers that reflect our commitment to delivering clean,
        reliable and sustainable energy.
      </p>

    </div>

    <div className="stats-grid">

      {companyStats.map((item) => (

        <div
          className="stats-card"
          key={item.id}
        >

          <h3>{item.value}</h3>

          <p>{item.title}</p>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
