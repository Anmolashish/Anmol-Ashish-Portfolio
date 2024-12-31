"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoChevronDown,
} from "react-icons/io5";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // State for sidebar toggling
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarActive((prevState) => !prevState);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Loader />
        <main>
          <aside
            className={`sidebar sidebar-main-div ${
              isSidebarActive ? "active" : ""
            }`}
            data-sidebar
          >
            <div className="sidebar-info">
              <figure className="avatar-box">
                <Image
                  src="/images/my-avatar.jpg"
                  alt="Anmol Ashish Image"
                  width="800"
                  height="800"
                />
              </figure>

              <div className="info-content">
                <h1 className="name" title="anmol ashish">
                  Anmol Ashish
                </h1>

                <p className="title">Web developer</p>
              </div>

              <button
                className="info_more-btn"
                data-sidebar-btn
                onClick={toggleSidebar}
              >
                <span>Show Contacts</span>
                <IoChevronDown />
              </button>
            </div>

            <div className="sidebar-info_more">
              <div className="separator"></div>

              <ul className="contacts-list">
                <li className="contact-item">
                  <div className="icon-box">
                    <IoMailOutline />
                  </div>

                  <div className="contact-info">
                    <p className="contact-title">Email</p>

                    <a
                      href="mailto:anmolashish20@gmail.com"
                      className="contact-link"
                    >
                      anmolashish20@gmail.com
                    </a>
                  </div>
                </li>

                <li className="contact-item">
                  <div className="icon-box">
                    <IoPhonePortraitOutline />
                  </div>

                  <div className="contact-info">
                    <p className="contact-title">Phone</p>

                    <a href="tel:+919465337387" className="contact-link">
                      +91 9465337387
                    </a>
                  </div>
                </li>

                <li className="contact-item">
                  <div className="icon-box">
                    <IoCalendarOutline />
                  </div>

                  <div className="contact-info">
                    <p className="contact-title">Birthday</p>

                    <time dateTime="2003-06-06">June 6, 2003</time>
                  </div>
                </li>

                <li className="contact-item">
                  <div className="icon-box">
                    <IoLocationOutline />
                  </div>

                  <div className="contact-info">
                    <p className="contact-title">Location</p>

                    <address>Jalandhar, Punjab, India</address>
                  </div>
                </li>
              </ul>

              <div className="separator"></div>

              <ul className="social-list">
                <li className="social-item">
                  <a
                    href="https://www.facebook.com/anmish.batwal/"
                    className="social-link"
                  >
                    <IoLogoFacebook />
                  </a>
                </li>
                <li className="social-item">
                  <a href="https://x.com/batwal_anmol" className="social-link">
                    <IoLogoTwitter />
                  </a>
                </li>
                <li className="social-item">
                  <a
                    href="https://www.instagram.com/anmolashishbatwal/"
                    className="social-link"
                  >
                    <IoLogoInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <div className="main-content">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
