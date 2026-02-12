const ExplanationPanel = ({ data }) => {
  if (!data) {
    return (
      <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Explanation</h3>
        <p className="text-slate-400">Select a data point to see detailed explanation.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
      <h3 className="text-lg font-semibold text-white mb-4">
        {data.title || 'Detailed Explanation'}
      </h3>
      
      <div className="space-y-4">
        {data.description && (
          <p className="text-slate-300">{data.description}</p>
        )}

        {data.factors && (
          <div>
            <h4 className="text-white font-medium mb-2">Key Factors:</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              {data.factors.map((factor, idx) => (
                <li key={idx}>{factor}</li>
              ))}
            </ul>
          </div>
        )}

        {data.impact && (
          <div>
            <h4 className="text-white font-medium mb-2">Impact:</h4>
            <p className="text-slate-300">{data.impact}</p>
          </div>
        )}

        {data.recommendations && (
          <div>
            <h4 className="text-white font-medium mb-2">Recommendations:</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              {data.recommendations.map((rec, idx) => (
                <li key={idx}>{rec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplanationPanel;
