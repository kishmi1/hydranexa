import "./UpcomingProjects.css";

import PageHero from "../../../components/common/PageHero/PageHero";
import CTASection from "../../../components/home/CTASection/CTASection";

import { projects } from "../../../data/projectData";

import heroImage from "../../../assets/images/hero/project-hero.jpg";

import project1 from "../../../assets/images/projects/project1.jpg";
import project2 from "../../../assets/images/projects/project2.jpg";
import project3 from "../../../assets/images/projects/project3.jpg";
import project4 from "../../../assets/images/projects/project4.jpg";
import project5 from "../../../assets/images/projects/project5.jpg";
import project6 from "../../../assets/images/projects/project6.jpg";

const images = {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
};

export default function UpcomingProjects() {

  const upcomingProjects = projects.filter(
    (project) => project.status === "Upcoming"
  );

  return (
    <>
      <PageHero
        subtitle="HydraNexa Projects"
        title="Upcoming Projects"
        description="Discover our upcoming hydropower projects planned to strengthen Nepal's renewable energy future."
        backgroundImage={heroImage}
      />

      <section className="projects-section">

        <div className="container">

          <div className="section-header">

            <span>Upcoming Projects</span>

            <h2>Future Hydropower Developments</h2>

            <p>
              These projects are currently under planning,
              feasibility study, or pre-construction and will
              contribute to Nepal's renewable energy future.
            </p>

          </div>

          <div className="projects-grid">

            {upcomingProjects.map((project) => (

              <div className="project-card" key={project.id}>

                <div className="project-image">

                  <img
                    src={images[project.image]}
                    alt={project.name}
                  />

                  <span className="status upcoming">
                    Upcoming
                  </span>

                </div>

                <div className="project-content">

                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  <div className="project-info">

                    <span>📍 {project.location}</span>

                    <span>⚡ {project.capacity}</span>

                    <span>📅 {project.year}</span>

                  </div>

                  <button className="primary-btn">
                    View Details
                  </button>

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
