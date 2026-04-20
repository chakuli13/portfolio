import { motion } from "framer-motion";

function About() {
  return (
    <section id="about">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2>What I Do</h2>
          <p>
            I am an enthusiastic MERN Stack developer eager to start my
            professional journey in web development. I enjoy building responsive
            and dynamic web applications with a focus on performance and user
            experience. <br />
            <br />I am proficient in{" "}
            <strong>HTML, CSS, JavaScript, React.js, and Python</strong>, and I
            am always ready to learn new technologies and take on challenges to
            grow as a developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
