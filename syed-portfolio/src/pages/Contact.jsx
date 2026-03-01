import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black via-gray-950 to-black"
      >
      {/* Thin Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-60"></div>
      
      <div className="text-center max-w-2xl w-full">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s connect and build something impactful in Data Science and AI.
        </p>

        {/* Email */}
        <a
          href="mailto:yourfullname@gmail.com"
          className="inline-block text-lg md:text-xl font-medium text-purple-400 hover:text-purple-300 transition duration-300"
        >
          shoaibsyed2020@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-10">

          <a
            href="https://www.linkedin.com/in/syed-shoaib-ali-5240a42a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="https://github.com/syedshoaib-ali"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={30} />
          </a>

          <a
            href="https://www.kaggle.com/syedshoaib021"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <SiKaggle size={30} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;