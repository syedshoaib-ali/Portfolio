import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaCode,
  FaBrain,
} from "react-icons/fa";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-black"
    >
      <div className="max-w-6xl w-full text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Skills & Expertise
        </h2>

        <p className="text-gray-400 mb-14 max-w-2xl mx-auto text-sm md:text-base">
          Tools and technologies I use to build data-driven solutions.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Programming */}
          <div className="group p-8 rounded-2xl bg-gray-900/60 backdrop-blur border border-gray-800 hover:border-purple-500 transition duration-300">
            <h3 className="text-lg font-semibold mb-6 group-hover:text-purple-400 transition">
              Programming
            </h3>

            <div className="flex flex-wrap justify-center gap-4 text-sm">

              <div className="skill-badge">
                <FaPython className="text-xl" />
                Python
              </div>

              <div className="skill-badge">
                <FaDatabase className="text-xl" />
                Java (Basic)
              </div>

              <div className="skill-badge">
                <FaDatabase className="text-xl" />
                R Programming
              </div>

              <div className="skill-badge">
                <FaDatabase className="text-xl" />
                SQL
              </div>

            </div>
          </div>

          {/* Data & ML */}
          <div className="group p-8 rounded-2xl bg-gray-900/60 backdrop-blur border border-gray-800 hover:border-purple-500 transition duration-300">
            <h3 className="text-lg font-semibold mb-6 group-hover:text-purple-400 transition">
              Data & Machine Learning
            </h3>

            <div className="flex flex-wrap justify-center gap-4 text-sm">

              <div className="skill-badge">
                <FaBrain className="text-xl" />
                Machine Learning
              </div>

              <div className="skill-badge">
                <FaCode className="text-xl" />
                Deep Learning
              </div>

              <div className="skill-badge">
                <FaCode className="text-xl" />
                Gen Ai
              </div>

            </div>
          </div>

          {/* Visualization */}
          <div className="group p-8 rounded-2xl bg-gray-900/60 backdrop-blur border border-gray-800 hover:border-purple-500 transition duration-300">
            <h3 className="text-lg font-semibold mb-6 group-hover:text-purple-400 transition">
              Visualization & Tools
            </h3>

            <div className="flex flex-wrap justify-center gap-4 text-sm">

              <div className="skill-badge">
                <FaChartBar className="text-xl" />
                Power BI
              </div>

              <div className="skill-badge">
                <FaChartBar className="text-xl" />
                Excel
              </div>

              <div className="skill-badge">
                <FaCode className="text-xl" />
                Tableau
              </div>

            </div>
          </div>

          {/* BigData tools */}
          <div className="group p-8 rounded-2xl bg-gray-900/60 backdrop-blur border border-gray-800 hover:border-purple-500 transition duration-300">
            <h3 className="text-lg font-semibold mb-6 group-hover:text-purple-400 transition">
              BigData Tools
            </h3>

            <div className="flex flex-wrap justify-center gap-4 text-sm">

              <div className="skill-badge">
                <FaCode className="text-xl" />
                Spark
              </div>

              <div className="skill-badge">
                <FaCode className="text-xl" />
                Hadoop
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;