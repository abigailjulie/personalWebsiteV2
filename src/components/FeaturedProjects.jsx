import React from "react";
import { Row, Col } from "react-bootstrap";
import YelpCamp from "../assets/images/YelpCamp.jpg";
import personalWebsite from "../assets/images/personalWebsite.jpg";
import ProjectBadge from "./ProjectBadge";
import Ecommerce from "../assets/images/ecommerceScreenshot.jpg";
import Fetch from "../assets/images/fetchApp.jpg";
import ArchWay from "../assets/images/ArchWay.jpg";
import { Link } from "react-router-dom";
import "./FeaturedProjects.css";

const projects = [
  {
    link: "https://github.com/abigailjulie/ArtFeenClientPortal",
    imgSrc: ArchWay,
    imgAlt: "snapshot of the ArchWay home page",
    title: "The ArchWay",
    description:
      "A role-based web app that streamlines architect–client collaboration by centralizing timelines, budgets, and project phases in a single dashboard. Built with a custom backend API to manage dynamic project lifecycles and real-time updates. Designed for extensibility, with Twilio integration enabling automated milestone notifications, aiming to reduce project delays by up to 30%.",
    badges: [
      "TypeScript",
      "React",
      "Redux",
      "Redux Toolkit",
      "Twilio API",
      "Mongo",
      "Express",
      "Node",
      "Bootstrap",
      "MUI",
    ],
  },
  {
    link: "https://fetch-silk.vercel.app/",
    imgSrc: Fetch,
    imgAlt: "snapshot of fetch browse page",
    title: "Fetch",
    description:
      "An interactive platform to browse adoptable dogs across the U.S. designed to increase adoption success by up to 20%. Features include secure API integration, real-time filtering, favorites, geolocation popovers, performance-optimized pagination, and clean error handling.",
    badges: [
      "JavaScript",
      "React",
      "Secure API Integration",
      "Bootstrap",
      "Vercel",
    ],
  },
  {
    link: "https://frontendmentorecommerceproductpage.vercel.app/",
    imgSrc: Ecommerce,
    imgAlt: "snapshot of ecommerce product page",
    title: "Ecommerce Product Page",
    description:
      "E-commerce product page with lightbox product gallery and cart functionality",
    badges: ["JavaScript", "React", "Bootstrap", "Vercel"],
  },
  {
    link: "https://github.com/abigailjulie/personalWebsiteV1",
    imgSrc: personalWebsite,
    imgAlt: "snapshot of personal website home page",
    title: "Personal Website",
    description:
      "web application showcasing projects, with user authentication, and a time-based session management",
    badges: ["JavaScript", "React", "Bootstrap", "Vercel"],
  },
  {
    link: "https://abigaildesignsyelpcamp.onrender.com",
    imgSrc: YelpCamp,
    imgAlt: "snapshot of YelpCamp home page",
    title: "YelpCamp",
    description:
      "blog application allowing users to create, review, and explore campgrounds with interactive maps powered by Mapbox, along with responsive design and user authentication features",
    badges: [
      "JavaScript",
      "JWT",
      "Mapbox API",
      "Cloudinary",
      "Node.js",
      "Express",
      "MongoDB",
      "Render",
    ],
  },
];

export default function FeaturedProjects() {
  return (
    <>
      <h5 className="mobileHeading">PROJECTS</h5>
      <div className="projects">
        <section className="featProjs">
          <ul id="projects">
            {projects.map((project, index) => (
              <li key={index}>
                <Link
                  className="project"
                  target="_blank"
                  rel="noopener noreferrer"
                  to={project.link}
                >
                  <Row className="align-items-top mx-3">
                    <Col
                      md={4}
                      className="proj-img align-items-md-start d-md-flex"
                    >
                      <img
                        src={project.imgSrc}
                        width="200"
                        height="125"
                        alt="image"
                      />
                    </Col>
                    <Col md={8} className="proj-text">
                      <h5>{project.title}</h5>
                      <p>{project.description}</p>
                      <ProjectBadge
                        badges={project.badges}
                        className="projectBadge"
                      />
                    </Col>
                  </Row>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <div className="featProjLinks">
          <Link className="link" to="/projects/architecture">
            View Architecture Projects Archive
            <i className="bi bi-arrow-right-short"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
