import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import taskImg from "../assets/Task_Manager_Application.png";
import ecommerceImg from "../assets/E-Commerces-Admin-Dashboard.webp";
import portfolioImg from "../assets/portfolioimg.png";

function Projects() {
  const projects = [
    {
      title: "Task Manager Application",
      img: taskImg,
      description:
        "A task management web app where users can add, update, and delete tasks. Helps in organizing daily work efficiently.",
      tech: "React.js, Node.js, Express.js, MongoDB",
      github: "https://github.com/chakuli13/task-manager-app",
    },

    {
      title: "E-Commerce Website",
      img: ecommerceImg,
      description:
        "A full-stack e-commerce platform with product listing, admin dashboard, and user-friendly interface for managing online shopping.",
      tech: "React, Node.js, Express, MongoDB, Bootstrap",
      github: "https://github.com/chakuli13/Ecommerce_Website",
    },

     {
      title: "Portfolio Website",
      img: portfolioImg,
      description:
        "A responsive personal portfolio website showcasing my projects, skills, and contact form with full-stack integration.",
      tech: "React, Node.js, Express, MongoDB, Bootstrap",
      github: "https://github.com/chakuli13/portfolio",
      demo: "https://portfolio-mu-rust-91.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">Projects</h2>

        <div className="row">
          {projects.map((p, i) => (
            <motion.div
              className="col-12 col-md-6 col-lg-4 mb-4"
              whileHover={{ scale: 1.05 }}
              key={i}
            >
              <div className="card shadow h-100 bg-dark text-white">
                
                <img src={p.img} className="card-img-top" alt={p.title} />

                <div className="card-body">
                  <h5>{p.title}</h5>

                  
                  <p style={{ fontSize: "14px" }}>{p.description}</p>

                  
                  <p className="text-warning fw-semibold">{p.tech}</p>

                 
                  <div className="d-flex justify-content-center gap-2">
                    
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light"
                    >
                      <FaGithub /> Code
                    </a>
                    {p.title === "Portfolio Website" && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-info"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
