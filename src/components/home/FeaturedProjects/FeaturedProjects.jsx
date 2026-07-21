import "./FeaturedProjects.css";
import { Link } from "react-router-dom";

import { featuredProjects } from "../../../data/homeData";

import project1 from "../../../assets/images/projects/project1.jpg";
import project2 from "../../../assets/images/projects/project2.jpg";
import project3 from "../../../assets/images/projects/project3.jpg";

const projectImages = {
  project1,
  project2,
  project3,
};

export default function FeaturedProjects() {
  return (
    <section className="featured-projects">

      <div className="container">

        <div className="section-header">

          <span>Featured Projects</span>

          <h2>
            Powering Nepal Through
            <br />
            Innovative Hydropower Projects
          </h2>

          <p>
            Discover our flagship hydropower developments driving clean,
            reliable and sustainable energy across Nepal.
          </p>

        </div>

        <div className="projects-grid">

          {featuredProjects.map((project) => (

            <article
              className="project-card"
              key={project.id}
            >

              <div className="project-image">

                <img
                  src={projectImages[project.image]}
                  alt={project.name}
                />

                <div className="capacity-badge">
                  {project.capacity}
                </div>

              </div>

              <div className="project-content">

                <h3>{project.name}</h3>

                <p className="location">
                  📍 {project.location}
                </p>

                <p className="description">
                  {project.description}
                </p>

                <Link
                  to="/projects"
                  className="project-btn"
                >
                  View Project →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}
