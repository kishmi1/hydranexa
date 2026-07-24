import "./Events.css";

import { Link } from "react-router-dom";

import PageHero from "../../../components/common/PageHero/PageHero";
import CTASection from "../../../components/home/CTASection/CTASection";

import { events } from "../../../data/newsData";

import heroImage from "../../../assets/images/news/events-hero.jpg";

import event1 from "../../../assets/images/news/event1.jpg";
import event2 from "../../../assets/images/news/event2.jpg";
import event3 from "../../../assets/images/news/event3.jpg";

const images = {
  event1,
  event2,
  event3,
};

export default function Events() {
  return (
    <>
      <PageHero
        subtitle="News & Events"
        title="Events"
        description="Explore our upcoming events, corporate meetings, community programs, and renewable energy initiatives."
        backgroundImage={heroImage}
      />

      <section className="events-section">

        <div className="container">

          <div className="section-header">

            <span>Upcoming Events</span>

            <h2>Our Events</h2>

            <p>
              Join HydraNexa's important corporate events, sustainability
              initiatives and community engagement programs.
            </p>

          </div>

          <div className="events-grid">

            {events.map((item) => (

              <div
                className="event-card"
                key={item.id}
              >

                <div className="event-image">

                  <img
                    src={images[item.image]}
                    alt={item.title}
                  />

                </div>

                <div className="event-content">

                  <span className="event-date">
                    📅 {item.date}
                  </span>

                  <span className="event-location">
                    📍 {item.location}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <Link
                    to={`/events/${item.id}`}
                    className="primary-btn"
                  >
                    View Details
                  </Link>

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
