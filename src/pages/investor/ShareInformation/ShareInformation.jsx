import "./ShareInformation.css";

import PageHero from "../../../components/common/PageHero/PageHero";
import CTASection from "../../../components/home/CTASection/CTASection";

import {
  shareInformation,
  dividendHistory,
} from "../../../data/investorData";

import heroImage from "../../../assets/images/investor/share-information-hero.jpg";

export default function ShareInformation() {
  return (
    <>
      <PageHero
        subtitle="Investor Relations"
        title="Share Information"
        description="Explore HydraNexa's share structure, ownership details, and dividend history."
        backgroundImage={heroImage}
      />

      <section className="share-section">

        <div className="container">

          <div className="section-header">

            <span>Share Details</span>

            <h2>Share Information</h2>

            <p>
              HydraNexa maintains transparency by providing updated
              information regarding shareholding, ownership structure,
              and dividend history.
            </p>

          </div>

          <div className="share-grid">

            {shareInformation.map((item) => (

              <div
                className="share-card"
                key={item.id}
              >

                <h3>{item.value}</h3>

                <span>{item.title}</span>

              </div>

            ))}

          </div>

          <div className="dividend-section">

            <h2>Dividend History</h2>

            <table className="dividend-table">

              <thead>

                <tr>
                  <th>Year</th>
                  <th>Cash Dividend</th>
                  <th>Bonus Shares</th>
                </tr>

              </thead>

              <tbody>

                {dividendHistory.map((item) => (

                  <tr key={item.year}>
                    <td>{item.year}</td>
                    <td>{item.dividend}</td>
                    <td>{item.bonus}</td>
                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      <CTASection />

    </>
  );
}
