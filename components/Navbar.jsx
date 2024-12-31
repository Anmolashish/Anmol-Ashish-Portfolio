"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");

  // Set the initial active link to the current pathname when the component mounts
  useEffect(() => {
    setActiveLink(window.location.pathname); // Use window.location.pathname to get the current path
  }, []);

  const handleNavigation = (path) => {
    setActiveLink(path); // Update active link state
    router.push(path); // Navigate to the selected page
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${activeLink === "/" ? "active" : ""}`}
            onClick={() => handleNavigation("/")}
          >
            About
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeLink === "/resume" ? "active" : ""
            }`}
            onClick={() => handleNavigation("/resume")}
          >
            Resume
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeLink === "/portfolio" ? "active" : ""
            }`}
            onClick={() => handleNavigation("/portfolio")}
          >
            Portfolio
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeLink === "/certificate" ? "active" : ""
            }`}
            onClick={() => handleNavigation("/certificate")}
          >
            Certificates
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeLink === "/contact" ? "active" : ""
            }`}
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
