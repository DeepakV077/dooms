import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const EnvironmentalTrendChart = ({ data }) => {
  return (
    <div className="bg-white border border-blue-100 rounded-3xl shadow-lg p-6 h-[400px]">
      <h3 className="text-blue-600 font-semibold mb-4">
        Environmental Trend Analytics
      </h3>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="year" stroke="#000" />
          <YAxis stroke="#000" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#0046FF" strokeWidth={3} />
          <Line type="monotone" dataKey="seaLevel" stroke="#FF9013" strokeWidth={3} />
          <Line type="monotone" dataKey="salinity" stroke="#000000" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnvironmentalTrendChart;
