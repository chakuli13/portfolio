import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className=" text-white text-center p-3"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="mb-2">
        <a
          href="https://github.com/chakuli13"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white me-3"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/chakuli-shembule/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FaLinkedin size={20} />
        </a>
      </div>

      <p className="mb-0">© 2026 Portfolio Chakuli Shembule</p>
    </footer>
  );
}

export default Footer;
