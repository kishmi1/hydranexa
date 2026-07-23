import "./CompletedProjects.css";

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

export default function CompletedProjects() {

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  );

  return (
    <>
      <PageHero
        subtitle="HydraNexa Projects"
        title="Completed Projects"
        description="Explore our successfully completed hydropower projects delivering clean energy across Nepal."
        backgroundImage={heroImage}
      />

      <section className="projects-section">

        <div className="container">

          <div className="section-header">

            <span>Completed Projects</span>

            <h2>Successfully Delivered Projects</h2>

            <p>
              These hydropower projects have been completed and are
              contributing renewable electricity to Nepal.
            </p>

          </div>

          <div className="projects-grid">

            {completedProjects.map((project) => (

              <div className="project-card" key={project.id}>

                <div className="project-image">

                  <img
                    src={images[project.image]}
                    alt={project.name}
                  />

                  <span className="status completed">
                    Completed
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
