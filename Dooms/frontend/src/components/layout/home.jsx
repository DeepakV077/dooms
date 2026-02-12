const Home = () => {
  return (
    <div className="bg-background text-primary">

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-[85vh] flex items-center bg-white">
        <div className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              AI-Powered Ocean Intelligence
              <span className="block text-accent mt-2">
                For Climate & Biodiversity Protection
              </span>
            </h1>

            <p className="mt-6 text-lg text-primary/80 max-w-xl">
              OSIS transforms marine environmental data into predictive insights,
              enabling ecosystem stability modeling, species forecasting, and
              climate scenario simulation — all within one intelligent platform.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
                Explore Dashboard
              </button>

              <button className="border-2 border-warning text-warning px-6 py-3 rounded-xl font-semibold hover:bg-warning hover:text-white transition">
                Run Simulation
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://i.pinimg.com/1200x/2a/75/2f/2a752f09c9c901e5beffc3dde037dc89.jpg" 
              alt="Underwater coral reef ecosystem" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-primary">
            What We Do
          </h2>

          <p className="mt-6 text-lg text-primary/80">
            OSIS integrates oceanographic datasets, biodiversity records,
            and climate projections into a unified AI-driven decision system.
            We convert raw marine data into actionable ecosystem intelligence.
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Why Choose OSIS?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="font-semibold text-primary text-lg">
                Predictive Intelligence
              </h3>
              <p className="mt-4 text-primary/70">
                Go beyond historical data. Model future environmental changes
                and biodiversity shifts with AI-powered simulation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="font-semibold text-primary text-lg">
                Ecosystem Stability Index
              </h3>
              <p className="mt-4 text-primary/70">
                A composite scoring system that quantifies marine stress levels
                using scientifically grounded environmental parameters.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="font-semibold text-primary text-lg">
                Climate Scenario Simulation
              </h3>
              <p className="mt-4 text-primary/70">
                Evaluate temperature rise, sea-level changes, and salinity
                shifts through threshold-based ecological modeling.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CORE CAPABILITIES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-primary">
            Core Capabilities
          </h2>

          <ul className="mt-8 space-y-4 text-lg text-primary/80">
            <li>• Species Habitat Suitability Prediction</li>
            <li>• Ocean Stability Composite Index</li>
            <li>• Coastal Hazard Risk Detection</li>
            <li>• Climate-Driven Migration Modeling</li>
            <li>• Interactive Environmental Simulation</li>
          </ul>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold">
            Transform Marine Data into Intelligence
          </h2>

          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Join researchers, coastal planners, and climate analysts
            who are using OSIS to model ecosystem resilience and
            plan sustainable ocean strategies.
          </p>

          <button className="mt-8 bg-warning text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
