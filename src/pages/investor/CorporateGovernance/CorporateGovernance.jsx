import "./CorporateGovernance.css";

import PageHero from "../../../components/common/PageHero/PageHero";
import CTASection from "../../../components/home/CTASection/CTASection";

import { governanceData } from "../../../data/investorData";

import heroImage from "../../../assets/images/investor/corporate-governance-hero.jpg";

export default function CorporateGovernance() {
  return (
    <>
      <PageHero
        subtitle="Investor Relations"
        title="Corporate Governance"
        description="HydraNexa follows strong corporate governance principles to ensure transparency, accountability, and sustainable business growth."
        backgroundImage={heroImage}
      />

      <section className="governance-section">

        <div className="container">

          <div className="section-header">

            <span>Governance</span>

            <h2>Corporate Governance</h2>

            <p>
              Our governance framework ensures ethical leadership,
              effective decision-making, and long-term value creation
              for all stakeholders.
            </p>

          </div>

          <div className="governance-grid">

            {governanceData.map((item) => (

              <div
                className="governance-card"
                key={item.id}
              >

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <CTASection />

    </>
  );
}
