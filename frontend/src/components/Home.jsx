import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/chakuliimg.jpg";

function Home() {
  return (
    <section id="home" className="vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="fw-bold"
            >
              Hello, I'm <br />
              <span style={{ color: "#15caf3" }}>Shembule Chakuli</span>
            </motion.h1>

            <TypeAnimation
              sequence={[
                "I am a Web Developer",
                2000,
                "I build responsive websites",
                2000,
                "MERN Stack Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="d-block mt-3"
              style={{ fontSize: "25px", fontWeight: "500" }}
            />

            <p className="mt-3">
              I am an enthusiastic and dedicated web developer with a strong
              foundation in modern web technologies. <br />
              <strong>
                I am passionate about building responsive, user-friendly, and
                impactful web applications.
              </strong>
            </p>

            <a
              href="/Chakuli_shembule_resume (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-3 me-3"
              style={{ backgroundColor: "#15caf3", color: "#0f0f0f" }}
            >
              Preview Resume
            </a>

            <a
              href="/Chakuli_shembule_resume (1).pdf"
              download
              className="btn btn-outline-primary mt-3"
              style={{ backgroundColor: "#15caf3", color: "#0f0f0f" }}
            >
              Download Resume 📄
            </a>
          </div>

          <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
            <motion.img
              src={profileImg}
              alt="profile"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "300px" }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
