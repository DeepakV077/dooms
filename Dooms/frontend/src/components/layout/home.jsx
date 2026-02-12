import React from 'react';
import { 
  BarChart3, 
  Waves, 
  ThermometerSnowflake, 
  ShieldCheck, 
  Fish, 
  Activity, 
  Navigation, 
  Zap 
} from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-background text-primary">

      {/* ================= HERO SECTION (UNTOUCHED) ================= */}
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
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="flex justify-center mb-4">
            <Activity className="text-accent w-10 h-10" />
          </div>
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
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all group">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <BarChart3 size={24} />
              </div>
              <h3 className="font-semibold text-primary text-lg">
                Predictive Intelligence
              </h3>
              <p className="mt-4 text-primary/70">
                Go beyond historical data. Model future environmental changes
                and biodiversity shifts with AI-powered simulation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all group">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-semibold text-primary text-lg">
                Ecosystem Stability Index
              </h3>
              <p className="mt-4 text-primary/70">
                A composite scoring system that quantifies marine stress levels
                using scientifically grounded environmental parameters.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all group">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <ThermometerSnowflake size={24} />
              </div>
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
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Core Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { text: "Species Habitat Suitability Prediction", icon: <Fish className="text-accent" size={20} /> },
              { text: "Ocean Stability Composite Index", icon: <Waves className="text-accent" size={20} /> },
              { text: "Coastal Hazard Risk Detection", icon: <ShieldCheck className="text-accent" size={20} /> },
              { text: "Climate-Driven Migration Modeling", icon: <Navigation className="text-accent" size={20} /> },
              { text: "Interactive Environmental Simulation", icon: <Zap className="text-accent" size={20} /> }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition">
                {item.icon}
                <span className="text-lg text-primary/80 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold">
            Transform Marine Data into Intelligence
          </h2>

          <p className="mt-6 text-lg max-w-2xl mx-auto opacity-90">
            Join researchers, coastal planners, and climate analysts
            who are using OSIS to model ecosystem resilience and
            plan sustainable ocean strategies.
          </p>

          <button className="mt-8 bg-warning text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2 mx-auto">
            Get Started <Zap size={18} fill="currentColor" />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;