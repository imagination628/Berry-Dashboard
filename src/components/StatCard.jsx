import React from 'react'; // ✅ Required for JSX to work

const StatCard = ({ title, amount, icon, gradientClass }) => {
  return (
    <div
      className={`card text-white p-4 ${gradientClass}`}
      style={{ borderRadius: '16px', minWidth: '240px' }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4 className="fw-bold">{amount}</h4>
          <p className="mb-0">{title}</p>
        </div>
        <div className="fs-2">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
