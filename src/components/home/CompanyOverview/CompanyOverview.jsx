import "./CompanyOverview.css";
import overviewImage from "../../../assets/images/company/company.jpg";
import { companyOverview } from "../../../data/homeData";

import { Link } from "react-router-dom";

export default function CompanyOverview() {
  return (
    <section className="company-overview">

      <div className="container company-grid">

        {/* Left */}

        <div className="company-image">

          <img
            src={overviewImage}
            alt="HydraNexa"
          />

        </div>

        {/* Right */}

        <div className="company-content">

          <span>{companyOverview.subtitle}</span>

          <h2>{companyOverview.title}</h2>

          <p>{companyOverview.description}</p>

          <ul>

            {companyOverview.features.map((item, index) => (

              <li key={index}>✓ {item}</li>

            ))}

          </ul>

       <Link
  to="/about/company-overview"
  className="company-btn"
>
  {companyOverview.button}
</Link>

        </div>

      </div>

    </section>
  );
}
