
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { navItems } from "../../../data/navData";
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

          {navItems.map((item) => (

            item.children ? (

              <div
                className="nav-dropdown"
                key={item.title}
              >

                <Link to={item.children[0].path}>
                  {item.title}
                </Link>

                <FaChevronDown className="dropdown-icon" />

                <div className="dropdown-menu">

                  {item.children.map((child) => (

                    <Link
                      key={child.title}
                      to={child.path}
                    >
                      {child.title}
                    </Link>

                  ))}

                </div>

              </div>

            ) : (

              <Link
                key={item.title}
                to={item.path}
              >
                {item.title}
              </Link>

            )

          ))}

        </nav>

        {/* Contact Button */}

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

