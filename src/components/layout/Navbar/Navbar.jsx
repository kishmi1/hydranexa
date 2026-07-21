import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

import logo from "../../../assets/logo/logo.png";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">

          <img src={logo} alt="HydraNexa Logo" />

          <div className="logo-text">
            <h2>HydraNexa</h2>
            <span>Powering Tomorrow</span>
          </div>

        </Link>

        {/* Navigation */}

        <nav className="nav-menu">

          <Link to="/">Home</Link>

          <div className="nav-dropdown">

            <Link to="/about/company-overview">
              About
            </Link>

            <FaChevronDown className="dropdown-icon" />

          </div>

          <div className="nav-dropdown">

            <Link to="/projects">
              Projects
            </Link>

            <FaChevronDown className="dropdown-icon" />

          </div>

          <div className="nav-dropdown">

            <Link to="/investor/financial-highlights">
              Investor Relations
            </Link>

            <FaChevronDown className="dropdown-icon" />

          </div>

          <div className="nav-dropdown">

            <Link to="/news/latest-news">
              News & Events
            </Link>

            <FaChevronDown className="dropdown-icon" />

          </div>

          <div className="nav-dropdown">

            <Link to="/careers/life-at-hydranexa">
              Careers
            </Link>

            <FaChevronDown className="dropdown-icon" />

          </div>

          <div className="nav-dropdown">

            <Link to="/ebidding/active-tenders">
              E-Bidding
            </Link>

            <FaChevronDown className="dropdown-icon" />

          </div>

          <div className="nav-dropdown">

            <Link to="/contact/contact-us">
              Contact
            </Link>

            <FaChevronDown className="dropdown-icon" />

          </div>

        </nav>

        {/* CTA Button */}

        <Link
          to="/contact/contact-us"
          className="contact-btn"
        >
          Contact Us
        </Link>

      </div>

    </header>
  );
}
