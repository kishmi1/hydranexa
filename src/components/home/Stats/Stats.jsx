import "./Stats.css";
import { statsData } from "../../../data/homeData";

export default function Stats() {
  return (
    <section className="stats">

      <div className="container">

        <div className="stats-grid">

          {statsData.map((item) => (

            <div className="stat-card" key={item.id}>

              <h2>
                {item.value}
                {item.suffix}
              </h2>

              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
