import { useState } from 'react';
import ClimateImpactCard from '../components/cards/ClimateImpactCard';


const CaseStudy = () => {
  const [selectedCase, setSelectedCase] = useState('arctic');

  const caseStudies = {
    arctic: {
      title: 'Arctic Ice Loss',
      region: 'Arctic Circle',
      description: 'Rapid melting of Arctic sea ice is disrupting polar ecosystems and accelerating global warming through reduced albedo effect.',
      impacts: [
        'Polar bear populations declining by 30% since 2000',
        'Sea ice extent decreased by 13% per decade',
        'Arctic warming twice as fast as global average',
        'Permafrost thaw releasing methane and CO2'
      ],
      data: {
        temperature: { value: '+3.2', unit: '°C', trend: 'increasing' },
        iceExtent: { value: '-13', unit: '%/decade', trend: 'decreasing' },
        species: { value: '30', unit: '% loss', trend: 'increasing' }
      }
    },
    coral: {
      title: 'Coral Reef Bleaching',
      region: 'Great Barrier Reef',
      description: 'Ocean warming and acidification causing widespread coral bleaching events, threatening marine biodiversity.',
      impacts: [
        '50% of coral reefs suffered bleaching since 2016',
        'Ocean temperatures 1-2°C above historical average',
        '30% reduction in coral growth rates',
        'Loss of habitat for 25% of marine species'
      ],
      data: {
        temperature: { value: '+1.5', unit: '°C', trend: 'increasing' },
        bleaching: { value: '50', unit: '%', trend: 'increasing' },
        biodiversity: { value: '-25', unit: '%', trend: 'decreasing' }
      }
    },
    amazon: {
      title: 'Amazon Rainforest Dieback',
      region: 'Amazon Basin',
      description: 'Deforestation and climate change pushing the Amazon toward a tipping point where it could transform into savanna.',
      impacts: [
        '17% of Amazon forest lost to deforestation',
        'Drought frequency increased 3x since 2000',
        'Carbon sink capacity reduced by 30%',
        'Thousands of species at risk of extinction'
      ],
      data: {
        deforestation: { value: '17', unit: '%', trend: 'increasing' },
        carbon: { value: '-30', unit: '%', trend: 'decreasing' },
        drought: { value: '3x', unit: 'frequency', trend: 'increasing' }
      }
    }
  };

  const currentCase = caseStudies[selectedCase];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Climate Impact Case Studies
        </h1>

        {/* Case Study Selector */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => setSelectedCase('arctic')}
            className={`p-4 rounded-xl transition ${
              selectedCase === 'arctic'
                ? 'bg-primary text-white border-2 border-primary'
                : 'bg-white border-2 border-gray-200 hover:border-primary/50'
            }`}
          >
            <h3 className={`text-lg font-semibold ${selectedCase === 'arctic' ? 'text-white' : 'text-primary'}`}>
              ❄️ Arctic Ice Loss
            </h3>
            <p className={`text-sm mt-1 ${selectedCase === 'arctic' ? 'text-white/80' : 'text-gray-600'}`}>
              Polar ecosystems
            </p>
          </button>

          <button
            onClick={() => setSelectedCase('coral')}
            className={`p-4 rounded-xl transition ${
              selectedCase === 'coral'
                ? 'bg-primary text-white border-2 border-primary'
                : 'bg-white border-2 border-gray-200 hover:border-primary/50'
            }`}
          >
            <h3 className={`text-lg font-semibold ${selectedCase === 'coral' ? 'text-white' : 'text-primary'}`}>
              🪸 Coral Reefs
            </h3>
            <p className={`text-sm mt-1 ${selectedCase === 'coral' ? 'text-white/80' : 'text-gray-600'}`}>
              Ocean acidification
            </p>
          </button>

          <button
            onClick={() => setSelectedCase('amazon')}
            className={`p-4 rounded-xl transition ${
              selectedCase === 'amazon'
                ? 'bg-primary text-white border-2 border-primary'
                : 'bg-white border-2 border-gray-200 hover:border-primary/50'
            }`}
          >
            <h3 className={`text-lg font-semibold ${selectedCase === 'amazon' ? 'text-white' : 'text-primary'}`}>
              🌳 Amazon Rainforest
            </h3>
            <p className={`text-sm mt-1 ${selectedCase === 'amazon' ? 'text-white/80' : 'text-gray-600'}`}>
              Deforestation impacts
            </p>
          </button>
        </div>

        {/* Case Study Details */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-accent mb-2">
              {currentCase.title}
            </h2>
            <p className="text-gray-600 mb-4">📍 {currentCase.region}</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {currentCase.description}
            </p>
          </div>

          {/* Data Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(currentCase.data).map(([key, data]) => (
              <ClimateImpactCard
                key={key}
                title={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                value={data.value}
                unit={data.unit}
                trend={data.trend}
              />
            ))}
          </div>

          {/* Impacts */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Key Impacts
            </h3>
            <ul className="space-y-3">
              {currentCase.impacts.map((impact, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-warning mt-1">⚠️</span>
                  <span className="text-gray-700 flex-1">{impact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-accent/20 to-primary/20 p-8 rounded-2xl shadow-lg border border-accent/30">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              What Can We Do?
            </h3>
            <p className="text-gray-700 mb-4">
              These case studies illustrate the urgent need for climate action. 
              Individual and collective efforts can make a difference:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Support conservation organizations</li>
              <li>✓ Reduce carbon footprint</li>
              <li>✓ Advocate for climate policies</li>
              <li>✓ Spread awareness and education</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
