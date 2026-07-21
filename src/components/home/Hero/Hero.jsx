import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../../../assets/images/hero/hero1.jpg";
import hero2 from "../../../assets/images/hero/hero2.jpg";
import hero3 from "../../../assets/images/hero/hero3.jpg";

export default function Hero() {
  const slides = [hero1, hero2, hero3];

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="hero-slider"
    >
      {slides.map((image, index) => (
        <SwiperSlide key={index}>
          <section
            className="hero"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="hero-overlay"></div>

            <div className="container hero-content">

              <span className="hero-subtitle">
                Renewable Energy for Nepal
              </span>

              <h1>
                Powering Tomorrow Through
                <br />
                Sustainable Hydropower
              </h1>

              <p>
                HydraNexa is building Nepal's future through innovative
                hydropower projects, reliable clean energy, and sustainable
                infrastructure.
              </p>

              <div className="hero-buttons">

                <button className="primary-btn">
                  Explore Projects
                </button>

                <button className="secondary-btn">
                  Investor Relations
                </button>

              </div>

            </div>

          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
