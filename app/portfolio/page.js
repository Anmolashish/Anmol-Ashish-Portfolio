"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    // {
    //   id: 1,
    //   category: "Web development",
    //   name: "AI Chatbot",
    //   img: "/images/ai-chatbot.jpg", // Replace with actual image path
    //   "image-alt": "AI Chatbot",
    //   link: "",
    // },
    // {
    //   id: 2,
    //   category: "Web development",
    //   name: "Law-based Chatbot",
    //   img: "/images/law-chatbot.jpg", // Replace with actual image path
    //   "image-alt": "Law-based Chatbot",
    //   link: "",
    // },
    {
      id: 3,
      category: "Hackathon",
      name: "Reimagination Hackathon round 1 (ZOA Drinks)",
      img: "/images/Hackathon-round1.jpg", // Replace with actual image path
      "image-alt": "Reimagination Hackathon",
      link: "https://code-x-reimagine-hackathon-round-1.vercel.app/",
    },
    {
      id: 4,
      category: "Web development",
      name: "Spotify Clone",
      img: "/images/spotify-clone.jpg", // Replace with actual image path
      "image-alt": "Spotify Clone",
      link: "https://spotify-clone-iota-sand.vercel.app/",
    },
    {
      id: 5,
      category: "Web development",
      name: "Portfolio Website",
      img: "/images/portfolio.jpg", // Replace with actual image path
      "image-alt": "Portfolio Website",
      link: "/",
    },
    {
      id: 6,
      category: "Web development",
      name: "Pokémon Search App",
      img: "/images/pokemon-app.jpg", // Replace with actual image path
      "image-alt": "Pokémon Search App",
      link: "https://anmolashish.github.io/Pokemon-Search/",
    },
    {
      id: 7,
      category: "Web development",
      name: "Weather App",
      img: "/images/weather-app.jpg", // Replace with actual image path
      "image-alt": "Weather App",
      link: "https://anmolashish.github.io/Weather-website/",
    },
    {
      id: 8,
      category: "Live Project",
      name: "Poet Website for Shayar Varun Anand",
      img: "/images/Live-project.jpg", // Replace with actual image path
      "image-alt": "Poet Website",
      link: "www.varunanand.in",
    },
    {
      id: 9,
      category: "Hackathon",
      name: "Reimagination Hackathon round 2 (Herbalife)",
      img: "/images/Hackathon-round2.jpg", // Replace with actual image path
      "image-alt": "Reimagination Hackathon",
      link: "https://codex-reimgination-hackthon-round-2.vercel.app/",
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
              <a href={element.link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IoEyeOutline />
                  </div>

                  <Image
                    src={element.img}
                    alt={element["image-alt"]}
                    width={500}
                    height={500}
                  />
                </figure>

                <h3 className="project-title">{element.name}</h3>

                <p className="project-category">{element.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
