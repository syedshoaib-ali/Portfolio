import profileImg from "../assets/profile.webp"
import { Typewriter } from "react-simple-typewriter"

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 pt-24 bg-black"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            Syed Shoaib Ali
          </h1>

          {/* Typing Role */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 mb-8">
            <span className="text-purple-400">
              <Typewriter
                words={["Data Scientist", "Data Analyst"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 mb-10">
            I specialize in transforming complex datasets into meaningful,
            actionable insights through machine learning, predictive modeling,
            and data-driven decision making.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download="SYED SHOAIB Resume.pdf"
              className="px-6 py-3 rounded-lg border border-gray-700 hover:border-purple-400 hover:text-purple-400 transition duration-300"
            >
              Download Resume
            </a>

          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center">
          <div className="relative group">

            {/* Gradient Border Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-40 blur-md group-hover:opacity-70 transition duration-500"></div>

            {/* Image */}
            <img
              src={profileImg}
              alt="Syed Shoaib Ali"
              className="relative w-64 sm:w-80 md:w-96 rounded-2xl object-cover transition duration-500 group-hover:scale-105"
            />

          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
