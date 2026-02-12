import { useState, useMemo } from "react";
import { runSimulation } from "../services/simulationService";
const MarinePrediction = () => {
    const [formData, setFormData] = useState({
        latitude: "",
        longitude: "",
        temperature: "",
        salinity: "",
        depth: "",
        chlorophyll: "",
        density: "",
        trendIndex: ""
    });

    const [results, setResults] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await runSimulation(formData);
            setResults(response);
        } catch (err) {
            console.error("Prediction failed:", err);
        }
        setLoading(false);
    };

    /* ================= FILTERED SPECIES ================= */
    const filteredSpecies = useMemo(() => {
        if (!results?.speciesFullList) return [];
        return results.speciesFullList
            .filter((s) =>
                s.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => b.score - a.score);
    }, [results, searchTerm]);

    return (
        <div className="min-h-screen bg-white py-16 px-6">
            <div className="container mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}
                <div className="text-center mb-14">
                    <h1 className="text-4xl font-bold text-blue-600">
                        Marine Species Suitability Prediction
                    </h1>
                    <p className="mt-4 text-lg text-black/80 max-w-3xl mx-auto">
                        Evaluate marine habitat viability using environmental parameters
                        and AI-driven ecological modeling.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* ================= PREMIUM INPUT PANEL ================= */}
                    <div
                        className="bg-white rounded-3xl shadow-lg border border-blue-100 p-10 space-y-8 animate-fadeIn"
                    >
                        <h2 className="text-2xl font-semibold text-blue-600">
                            Environmental Parameters
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">

                            {/* Latitude */}
                            <div className="relative">
                                <input
                                    type="number"
                                    name="latitude"
                                    value={formData.latitude}
                                    onChange={handleChange}
                                    className="peer w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                                    placeholder=" "
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-700 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                                    Latitude
                                </label>
                            </div>

                            {/* Longitude */}
                            <div className="relative">
                                <input
                                    type="number"
                                    name="longitude"
                                    value={formData.longitude}
                                    onChange={handleChange}
                                    className="peer w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                                    placeholder=" "
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-700 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                                    Longitude
                                </label>
                            </div>

                            {/* Temperature */}
                            <div className="relative">
                                <input
                                    type="number"
                                    name="temperature"
                                    value={formData.temperature}
                                    onChange={handleChange}
                                    className="peer w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                                    placeholder=" "
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-700 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                                    Temperature (°C)
                                </label>
                            </div>

                            {/* Salinity */}
                            <div className="relative">
                                <input
                                    type="number"
                                    name="salinity"
                                    value={formData.salinity}
                                    onChange={handleChange}
                                    className="peer w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                                    placeholder=" "
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-700 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                                    Salinity (PSU)
                                </label>
                            </div>

                            {/* Depth */}
                            <div className="relative">
                                <input
                                    type="number"
                                    name="depth"
                                    value={formData.depth}
                                    onChange={handleChange}
                                    className="peer w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                                    placeholder=" "
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-700 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                                    Depth (m)
                                </label>
                            </div>

                            {/* Chlorophyll */}
                            <div className="relative">
                                <input
                                    type="number"
                                    name="chlorophyll"
                                    value={formData.chlorophyll}
                                    onChange={handleChange}
                                    className="peer w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                                    placeholder=" "
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-700 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                                    Chlorophyll (mg/m³)
                                </label>
                            </div>

                            {/* Density */}
                            <div className="relative">
                                <input
                                    type="number"
                                    name="density"
                                    value={formData.density}
                                    onChange={handleChange}
                                    className="peer w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                                    placeholder=" "
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-700 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                                    Water Density (kg/m³)
                                </label>
                            </div>

                            {/* Trend Index */}
                            <div className="relative">
                                <input
                                    type="number"
                                    name="trendIndex"
                                    value={formData.trendIndex}
                                    onChange={handleChange}
                                    className="peer w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                                    placeholder=" "
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-700 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                                    Environmental Trend Index
                                </label>
                            </div>

                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold shadow-md hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50"
                        >
                            {loading ? "Processing Prediction..." : "Run Prediction"}
                        </button>
                    </div>


                    {/* ================= RESULTS PANEL ================= */}
                    <div className="space-y-8">

                        {results ? (
                            <>
                                {/* Suitability */}
                                <ResultCard
                                    title="Species Suitability Probability"
                                    value={`${results.suitabilityProbability}%`}
                                    score={results.suitabilityProbability}
                                />

                                {/* Habitat Stability */}
                                <ResultCard
                                    title="Habitat Stability Score"
                                    value={results.habitatStabilityScore}
                                    score={results.habitatStabilityScore}
                                />

                                {/* ================= SPECIES LIST ================= */}
                                <div className="card border border-blue-100">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold text-blue-600">
                                            Ranked Marine Species
                                        </h3>
                                        <span className="text-sm text-black/60">
                                            Total Evaluated: {results.speciesFullList.length}
                                        </span>
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Search species..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="mb-4"
                                    />

                                    <div className="max-h-96 overflow-y-auto pr-2">
                                        {filteredSpecies.slice(0, 20).map((species, index) => {
                                            const scoreColor =
                                                species.score > 80
                                                    ? "text-blue-600"
                                                    : species.score > 50
                                                        ? "text-orange-500"
                                                        : "text-black";

                                            return (
                                                <div
                                                    key={index}
                                                    className="flex justify-between items-center py-2 border-b"
                                                >
                                                    <div className="flex gap-3">
                                                        <span className="text-black/60">
                                                            #{index + 1}
                                                        </span>
                                                        <span className="font-medium text-black">
                                                            {species.name}
                                                        </span>
                                                    </div>
                                                    <span className={`font-semibold ${scoreColor}`}>
                                                        {species.score}%
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="card border border-blue-100 text-center text-black/60">
                                Enter parameters and run prediction to view results.
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarinePrediction;


/* ================= REUSABLE INPUT ================= */
const InputField = ({ label, name, value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-black mb-2">
            {label}
        </label>
        <input
            type="number"
            name={name}
            value={value}
            onChange={onChange}
            required
        />
    </div>
);


/* ================= RESULT CARD ================= */
const ResultCard = ({ title, value, score }) => {
    const scoreColor =
        score > 80
            ? "text-blue-600"
            : score > 50
                ? "text-orange-500"
                : "text-black";

    return (
        <div className="card border border-blue-100">
            <h3 className="text-sm text-black/70">{title}</h3>
            <div className={`text-4xl font-bold mt-3 ${scoreColor}`}>
                {value}
            </div>
        </div>
    );
};
