import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

             <motion.span
  className="hero-subtitle"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Renewable Energy for Nepal
</motion.span>

             <motion.h1
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  Powering Tomorrow Through
  <br />
  Sustainable Hydropower
</motion.h1>

             <motion.p
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.4 }}
>
  HydraNexa is building Nepal's future through innovative
  hydropower projects, reliable clean energy, and sustainable
  infrastructure.
</motion.p>

             <motion.div
  className="hero-buttons"
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6 }}
>
 <Link to="/projects" className="primary-btn">
  Explore Projects
</Link>

  <Link
  to="/investor/financial-highlights"
  className="secondary-btn"
>
  Investor Relations
</Link>
</motion.div>

            </div>

          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
