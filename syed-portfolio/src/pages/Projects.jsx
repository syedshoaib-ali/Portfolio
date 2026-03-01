import alzheimersImg from "../assets/alzheimers.jpeg"
import solarImg from "../assets/solar.jpeg"

function Projects() {
  const projectList = [
    {
      title: "Alzheimer’s Disease Prediction",
      description:
        "Machine Learning model to predict early-stage Alzheimer’s using clinical datasets and advanced feature engineering.",
      tech: "Python • Scikit-learn • Pandas",
      image: alzheimersImg,
      github: "https://github.com/syedshoaib-ali/-Alzheimer-s-Disease-Risk-Prediction",
      demo: "https://alzheimers-disease-risk-prediction.streamlit.app/",
    },
    {
      title: "Solar Power Generation Forecasting",
      description:
        "Deep learning time-series forecasting model to predict solar energy output using weather and historical production data.",
      tech: "Python • TensorFlow • LSTM",
      image: solarImg,
      github: "https://github.com/syedshoaib-ali/Solar-Power-Generation-Predictor",
      demo: "https://solar-power-generation-predictor.streamlit.app/",
    },
  ]

  return (
    <section id="projects" className="min-h-screen px-4 sm:px-6 md:px-8 py-24 bg-black">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20">
  Featured <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
</h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/30 hover:border-purple-500/30 hover:-translate-y-3 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <p className="text-sm text-purple-400 mb-6">
                {project.tech}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border border-gray-700 hover:border-purple-500 hover:text-purple-400 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects