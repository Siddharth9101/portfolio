import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white py-8 text-center mt-10">
      <h4 className="text-xl font-semibold">Siddharth Saxena</h4>
      <p className="text-sm mt-2">
        Designed with love, all rights reserved for Siddharth Saxena.
      </p>

      <div className="flex justify-center gap-6 mt-4 text-2xl">
        <Link
          to="https://github.com/Siddharth9101"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="hover:text-orange-500 transition" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/siddharth-saxena-b89260332/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="hover:text-orange-500 transition" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
