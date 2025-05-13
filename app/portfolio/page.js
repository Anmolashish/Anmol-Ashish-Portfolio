"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoEyeOutline, IoCodeSlashOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 10,
      category: "Live Project",
      name: "Steelmans public School website",
      img: "/images/Screenshot 2025-05-13 105946.png", // Replace with actual image path
      "image-alt": "Steelmans public School website",
      link: "https://steelmansschool.com/",
      code: "",
    },
    {
      id: 1,
      category: "Hackathon",
      name: "Your lie in april Tribute website",
      img: "/images/Screenshot 2025-05-13 104735.png", // Replace with actual image path
      "image-alt": "Your lie in april tribute website",
      link: "https://your-lie-in-april.vercel.app/",
      code: "",
    },
    {
      id: 2,
      category: "Hackathon",
      name: "Season based Anime Recommendation",
      img: "/images/Screenshot 2025-05-13 104906.png", // Replace with actual image path
      "image-alt": "Season based Anime Recommendation",
      link: "https://season-based-anime-recommendation.vercel.app/",
      code: "",
    },
    {
      id: 3,
      category: "Hackathon",
      name: "Reimagination Hackathon round 1 (ZOA Drinks)",
      img: "/images/image.png", // Replace with actual image path
      "image-alt": "Reimagination Hackathon",
      link: "https://code-x-reimagine-hackathon-round-1.vercel.app/",
      code: "",
    },
    {
      id: 4,
      category: "Web development",
      name: "Spotify Clone",
      img: "/images/Screenshot 2025-05-13 102655.png", // Replace with actual image path
      "image-alt": "Spotify Clone",
      link: "https://spotify-clone-iota-sand.vercel.app/",
      code: "",
    },
    {
      id: 5,
      category: "Web development",
      name: "Portfolio Website",
      img: "/images/Screenshot 2025-05-13 102827.png", // Replace with actual image path
      "image-alt": "Portfolio Website",
      link: "/",
      code: "",
    },
    {
      id: 6,
      category: "Web development",
      name: "Pokémon Search App",
      img: "/images/pokemon.png", // Replace with actual image path
      "image-alt": "Pokémon Search App",
      link: "https://anmolashish.github.io/Pokemon-Search/",
      code: "",
    },
    {
      id: 7,
      category: "Web development",
      name: "Weather App",
      img: "/images/Screenshot 2025-05-13 103048.png", // Replace with actual image path
      "image-alt": "Weather App",
      link: "https://anmolashish.github.io/Weather-website/",
      code: "",
    },
    {
      id: 8,
      category: "Live Project",
      name: "Poet Website for Shayar Varun Anand",
      img: "/images/Screenshot 2025-05-13 103150.png", // Replace with actual image path
      "image-alt": "Poet Website",
      link: "https://www.varunanand.in",
      code: "",
    },
    {
      id: 9,
      category: "Hackathon",
      name: "Reimagination Hackathon round 2 (Herbalife)",
      img: "/images/Screenshot 2025-05-13 103255.png", // Replace with actual image path
      "image-alt": "Reimagination Hackathon",
      link: "https://codex-reimgination-hackthon-round-2.vercel.app/",
      code: "",
    },
    {
      id: 11,
      category: "Live Project",
      name: "Steelmans gears website",
      img: "/images/Screenshot 2025-05-13 110104.png", // Replace with actual image path
      "image-alt": "Steelmans gears website",
      link: "https://steelmansgears.com/",
      code: "",
    },
    {
      id: 12,
      category: "Live Project",
      name: "The gear Edges website",
      img: "/images/Screenshot 2025-05-13 110349.png", // Replace with actual image path
      "image-alt": "The gear Edges website",
      link: "https://www.thegearedges.com/",
      code: "",
    },
    {
      id: 13,
      category: "Web development",
      name: "Solitare infosys redesign (prototype)",
      img: "/images/Screenshot 2025-05-13 110638.png", // Replace with actual image path
      "image-alt": "Solitare infosys redesign (prototype)",
      link: "https://solitaire-infosys.vercel.app/",
      code: "",
    },
    {
      id: 14,
      category: "Web development",
      name: "Steelmans Gears V1",
      img: "/images/Screenshot 2025-05-13 110926.png", // Replace with actual image path
      "image-alt": "Steelmans Gears V1",
      link: "https://solitaire-infosys.vercel.app/",
      code: "",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {["All", "Web development", "Hackathon", "Live Project"].map(
            (category) => (
              <li className="filter-item" key={category}>
                <button
                  className={selectedCategory === category ? "active" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            )
          )}
        </ul>

        <ul className="project-list">
          {filteredProjects.map((element) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={element.category}
              key={element.id}
            >
              <div className="project-wrapper">
                <div className="project-img">
                  <div className="project-hover-overlay">
                    {element.link && (
                      <a
                        href={element.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink />
                        <span>View Demo</span>
                      </a>
                    )}
                    {element.code && (
                      <a
                        href={element.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <IoCodeSlashOutline />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>

                  <Image
                    src={element.img}
                    alt={element["image-alt"]}
                    width={500}
                    height={500}
                  />
                </div>

                <h3 className="project-title">{element.name}</h3>
                <p className="project-category">{element.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
