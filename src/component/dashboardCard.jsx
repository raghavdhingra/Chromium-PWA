import React from 'react';

const DashboardCard = ({ header = 'Header', value = 20, index = 0 }) => {
  const colorArray = ['#d6acf7', '#ff6598', '#a4aab5', '#e5da82', '#28e1ae'];
  const colorValue = (val) => colorArray[index % colorArray.length];
  return (
    <div className="system-process-card">
      <div className="system-process-header">{header}</div>
      <div className="system-process-graph">
        <svg height="200" width="200">
          <g id="UrTavla">
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke={colorValue(index)}
              stroke-width="20"
              fill="#fff0"
            ></circle>
            <text
              text-anchor="middle"
              x="50%"
              y="58%"
              stroke="#1a2435"
              stroke-width="0.1rem"
              font-size="3rem"
            >
              {value}
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DashboardCard;
