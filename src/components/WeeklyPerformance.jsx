import { useEffect, useState } from "react";

const ProgressBar = ({ title, value, color }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 300);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div>

      <div className="flex justify-between items-center mb-2">

        <span className="text-gray-600 font-medium">
          {title}
        </span>

        <span className="text-sm font-semibold text-gray-800">
          {progress}%
        </span>

      </div>

      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">

        <div
          className={`h-full rounded-full transition-all duration-2000 ease-out ${color}`}
          style={{ width: `${progress}%` }}
        ></div>

      </div>

    </div>
  );
};

const WeeklyPerformance = () => {
  return (
    <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-gray-800">
            Weekly Performance
          </h2>

          <p className="text-sm text-gray-500">
            Team productivity and analytics
          </p>

        </div>

        <button className="text-blue-600 hover:underline text-sm font-medium">
          Full Report
        </button>

      </div>

      {/* Progress Bars */}
      <div className="space-y-7">

        <ProgressBar
          title="UI Design"
          value={85}
          color="bg-blue-500"
        />

        <ProgressBar
          title="Development"
          value={72}
          color="bg-green-500"
        />

        <ProgressBar
          title="Marketing"
          value={60}
          color="bg-purple-500"
        />

        <ProgressBar
          title="Backend API"
          value={90}
          color="bg-orange-500"
        />

      </div>

    </div>
  );
};

export default WeeklyPerformance;