function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 py-24 bg-black"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 text-center">
          About Me
        </h2>

        {/* Content */}
        <div className="space-y-6 text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">

          <p>
            I am a Computer Science Graduate with a strong interest in
            Data Science, Machine Learning, and Analytics.
            My focus is on solving real-world problems by extracting
            meaningful insights from complex datasets.
          </p>

          <p>
            I have experience building predictive models, performing
            exploratory data analysis, and developing data-driven
            applications using Python and modern ML frameworks.
          </p>

          <p>
            My goal is to continuously improve my analytical thinking,
            mathematical foundation, and technical expertise to become
            a well-rounded Data Scientist capable of delivering impactful solutions.
          </p>

        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">

          <div className="group p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition duration-300 hover:scale-105">
            <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-purple-400 transition">
              2+
            </h3>
           <p className="text-gray-500 text-sm mt-2">
            Major Projects
            </p>
          </div>

          <div className="group p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition duration-300 hover:scale-105">
            <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-purple-400 transition">
              Python
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Primary Language
            </p>
          </div>

  <div className="group p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition duration-300 hover:scale-105">
    <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-purple-400 transition">
      ML
    </h3>
    <p className="text-gray-500 text-sm mt-2">
      Specialization
    </p>
  </div>

  <div className="group p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition duration-300 hover:scale-105">
    <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-purple-400 transition">
      AI
    </h3>
    <p className="text-gray-500 text-sm mt-2">
      Interest Area
    </p>
  </div>

      </div>
      </div>
    </section>
  )
}

export default About