const About = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6 text-center sm:text-left">
            About Doomsphere
          </h1>
          
          <div className="space-y-6">
            <section className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-semibold text-accent mb-4">
                Our Mission
              </h2>
              <p className="leading-relaxed text-sm sm:text-base text-gray-700">
                Doomsphere is an interactive platform designed to visualize and understand 
                the profound impacts of climate change on our planet's ecosystems and species. 
                We combine real-time data, machine learning predictions, and intuitive 
                visualizations to make climate science accessible to everyone.
              </p>
            </section>

            <section className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-semibold text-accent mb-4">
                What We Do
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-primary mb-2">
                    🌡️ Climate Impact Simulation
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base text-gray-700">
                    Run advanced simulations to project how different climate scenarios 
                    affect ecosystems, species populations, and environmental stability 
                    over time.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-primary mb-2">
                    🐾 Species Vulnerability Tracking
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base text-gray-700">
                    Monitor at-risk species worldwide, analyzing factors like habitat 
                    loss, temperature changes, and ecosystem disruption to assess 
                    vulnerability scores.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-primary mb-2">
                    🗺️ Interactive Visualizations
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base text-gray-700">
                    Explore climate data through interactive maps, heatmaps, and charts 
                    that make complex environmental data easy to understand.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-primary mb-2">
                    🤖 AI-Powered Insights
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base text-gray-700">
                    Get instant answers to climate questions through our AI assistant, 
                    backed by scientific research and real-time data analysis.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-semibold text-accent mb-4">
                Technology Stack
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-primary mb-2">Frontend</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700">
                    <li>React with Vite</li>
                    <li>Tailwind CSS</li>
                    <li>Zustand for state management</li>
                    <li>Axios for API calls</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-primary mb-2">Backend</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700">
                    <li>Flask REST API</li>
                    <li>NumPy & Pandas</li>
                    <li>scikit-learn</li>
                    <li>Machine Learning models</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-semibold text-accent mb-4">
                Get Involved
              </h2>
              <p className="leading-relaxed text-sm sm:text-base text-gray-700">
                Climate change affects us all. Use this platform to explore, learn, 
                and understand the challenges facing our planet. Share insights with 
                your community and help raise awareness about the urgent need for 
                climate action.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
