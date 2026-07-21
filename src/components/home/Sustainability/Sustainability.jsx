import "./Sustainability.css";
import { sustainabilityData } from "../../../data/homeData";



export default function Sustainability() {
  return (
    <section className="sustainability">

      <div className="container">

        <div className="section-header light">

          <span>Sustainability</span>

          <h2>
            Creating Lasting Value Through
            <br />
            Clean Energy
          </h2>

          <p>
            Sustainability is at the heart of HydraNexa. Every project is
            designed to generate renewable energy while protecting the
            environment and empowering local communities.
          </p>

        </div>

        <div className="sustainability-grid">

         {sustainabilityData.map((item) => {
  const Icon = item.icon;

  return (
    <div className="sustainability-card" key={item.id}>

      <div className="icon">
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
  );
}
