const About = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="container mx-auto max-w-5xl space-y-16">

        {/* ================= HEADER ================= */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">
            About V-Forge
          </h1>
          <p className="mt-4 text-lg text-black/80">
            AI-powered marine intelligence for climate resilience and
            ecosystem sustainability.
          </p>
        </div>

        {/* ================= WHAT WE DO ================= */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            What V-Forge Does
          </h2>

          <p className="text-black/80 leading-relaxed">
            V-Forge is an advanced marine ecosystem intelligence platform
            designed to transform complex environmental datasets into
            actionable climate insights. By integrating oceanographic
            parameters, biodiversity records, and predictive AI models,
            V-Forge enables data-driven decision-making for coastal and
            marine sustainability.
          </p>

          <p className="mt-4 text-black/80 leading-relaxed">
            The platform evaluates marine species suitability, ecosystem
            stability, coastal hazard risks, and long-term climate impact
            projections — all within a unified, interactive dashboard.
          </p>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            How It Works
          </h2>

          <div className="space-y-6 text-black/80 leading-relaxed">
            <p>
              1. Environmental data such as temperature, salinity,
              chlorophyll concentration, and depth are processed through
              AI-based predictive models.
            </p>
            <p>
              2. The system calculates a composite Ocean Stability Index
              to assess ecosystem health under current and projected
              climate conditions.
            </p>
            <p>
              3. Marine species habitat suitability is predicted using
              probabilistic modeling across hundreds of biodiversity records.
            </p>
            <p>
              4. Risk analytics evaluate coastal vulnerability and
              environmental stress patterns across selected regions.
            </p>
          </div>
        </section>

        {/* ================= WHY IT MATTERS ================= */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Why It Matters
          </h2>

          <p className="text-black/80 leading-relaxed">
            Climate change is rapidly altering marine ecosystems. Rising
            temperatures, shifting salinity levels, and sea-level changes
            directly impact biodiversity, fisheries, and coastal communities.
          </p>

          <p className="mt-4 text-black/80 leading-relaxed">
            V-Forge provides predictive intelligence that moves marine
            management from reactive to proactive. Instead of analyzing
            past data alone, decision-makers can simulate future scenarios
            and assess ecological resilience in advance.
          </p>
        </section>

        {/* ================= WHO IT SERVES ================= */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Who It Serves
          </h2>

          <ul className="space-y-3 text-black/80">
            <li>• Marine researchers and climate scientists</li>
            <li>• Coastal planners and environmental agencies</li>
            <li>• Fisheries sustainability analysts</li>
            <li>• Policy makers and conservation organizations</li>
            <li>• Climate-tech innovators and institutions</li>
          </ul>
        </section>

        {/* ================= UNIQUE VALUE ================= */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            What Makes V-Forge Different
          </h2>

          <p className="text-black/80 leading-relaxed">
            Unlike traditional ocean monitoring tools that provide
            static historical data, V-Forge combines predictive AI,
            environmental simulation, and ecosystem stability modeling
            into a unified intelligence platform.
          </p>

          <p className="mt-4 text-black/80 leading-relaxed">
            It is not just a data dashboard — it is a decision-support
            system engineered for long-term climate resilience.
          </p>
        </section>

        {/* ================= CLOSING ================= */}
        <div className="text-center pt-10">
          <h3 className="text-xl font-semibold text-blue-600">
            Building Intelligence for Sustainable Oceans
          </h3>
        </div>

      </div>
    </div>
  );
};

export default About;
