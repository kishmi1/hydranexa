import "./Downloads.css";

import PageHero from "../../../components/common/PageHero/PageHero";
import CTASection from "../../../components/home/CTASection/CTASection";

import { downloadFiles } from "../../../data/investorData";

import heroImage from "../../../assets/images/investor/downloads-hero.jpg";

export default function Downloads() {
  return (
    <>
      <PageHero
        subtitle="Investor Relations"
        title="Downloads"
        description="Download annual reports, financial statements, company profile, and other important investor documents."
        backgroundImage={heroImage}
      />

      <section className="downloads-section">

        <div className="container">

          <div className="section-header">

            <span>Resources</span>

            <h2>Downloads</h2>

            <p>
              Access important company documents including annual
              reports, financial statements, prospectus, corporate
              governance reports and investor presentations.
            </p>

          </div>

          <div className="downloads-grid">

            {downloadFiles.map((file) => (

              <div
                className="download-card"
                key={file.id}
              >

                <div className="download-icon">

                  📄

                </div>

                <div className="download-content">

                  <h3>{file.title}</h3>

                  <span>
                    {file.type} • {file.size}
                  </span>

                </div>

                <a
                  href={file.file}
                  className="download-btn"
                >
                  Download
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      <CTASection />

    </>
  );
}
