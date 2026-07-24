import "./MediaGallery.css";

import PageHero from "../../../components/common/PageHero/PageHero";
import CTASection from "../../../components/home/CTASection/CTASection";

import heroImage from "../../../assets/images/news/gallery-hero.jpg";

import gallery1 from "../../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../../assets/images/gallery/gallery3.jpg";
import gallery4 from "../../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../../assets/images/gallery/gallery5.jpg";
import gallery6 from "../../../assets/images/gallery/gallery6.jpg";

import video1 from "../../../assets/images/gallery/video1.jpg";
import video2 from "../../../assets/images/gallery/video2.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

const videos = [
  {
    id: 1,
    title: "Project Construction Progress",
    thumbnail: video1,
  },
  {
    id: 2,
    title: "HydraNexa Corporate Documentary",
    thumbnail: video2,
  },
];

export default function MediaGallery() {
  return (
    <>
      <PageHero
        subtitle="News & Events"
        title="Media Gallery"
        description="Explore our latest project photos, construction updates, community programs, and corporate videos."
        backgroundImage={heroImage}
      />

      <section className="gallery-section">

        <div className="container">

          <div className="section-header">

            <span>Gallery</span>

            <h2>Photo Gallery</h2>

            <p>
              Explore our hydropower projects, construction progress,
              community activities and corporate events.
            </p>

          </div>

          <div className="photo-grid">

            {images.map((image, index) => (

              <div
                className="photo-card"
                key={index}
              >

                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                />

              </div>

            ))}

          </div>

          <div className="section-header video-title">

            <span>Videos</span>

            <h2>Video Gallery</h2>

          </div>

          <div className="video-grid">

            {videos.map((video) => (

              <div
                className="video-card"
                key={video.id}
              >

                <div className="video-image">

                  <img
                    src={video.thumbnail}
                    alt={video.title}
                  />

                  <div className="play-btn">
                    ▶
                  </div>

                </div>

                <div className="video-content">

                  <h3>{video.title}</h3>

                  <button className="primary-btn">
                    Watch Video
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
