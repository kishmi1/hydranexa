import "./AnnualReports.css";

import PageHero from "../../../components/common/PageHero/PageHero";
import CTASection from "../../../components/home/CTASection/CTASection";

import { annualReports } from "../../../data/investorData";

import heroImage from "../../../assets/images/investor/annual-reports-hero.jpg";

export default function AnnualReports() {
  return (
    <>
      <PageHero
        subtitle="Investor Relations"
        title="Annual Reports"
        description="Access HydraNexa's annual reports, financial statements, and corporate performance summaries."
        backgroundImage={heroImage}
      />

      <section className="reports-section">

        <div className="container">

          <div className="section-header">

            <span>Reports & Publications</span>

            <h2>
              Annual
              <br />
              Reports
            </h2>

            <p>
              Download our annual reports to explore HydraNexa's
              financial performance, operational milestones,
              sustainability initiatives, and future growth strategy.
            </p>

          </div>

          <div className="reports-grid">

            {annualReports.map((report) => (

              <div
                className="report-card"
                key={report.id}
              >

                <div className="report-year">

                  {report.year}

                </div>

                <h3>{report.title}</h3>

                <p>{report.description}</p>

                <a
                  href={report.file}
                  className="primary-btn"
                >
                  Download Report
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
