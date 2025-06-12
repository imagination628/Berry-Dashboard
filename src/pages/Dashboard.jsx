// src/pages/Dashboard.jsx
import React from 'react'; // ✅ Required for JSX to work

import StatCard from '../components/StatCard';
import { FaWallet, FaShoppingCart, FaDollarSign } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Investment',
      data: [100, 280, 120, 100, 130, 230, 210, 60, 120, 190, 250, 200],
      backgroundColor: '#70a1ff',
    },
    {
      label: 'Loss',
      data: [40, 30, 50, 40, 60, 80, 90, 20, 40, 60, 40, 50],
      backgroundColor: '#d63031',
    },
    {
      label: 'Profit',
      data: [30, 60, 30, 20, 30, 70, 90, 10, 30, 50, 70, 20],
      backgroundColor: '#6c5ce7',
    },
    {
      label: 'Maintenance',
      data: [20, 70, 60, 30, 50, 100, 20, 10, 20, 30, 90, 60],
      backgroundColor: '#ffeaa7',
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <h3 className="my-4">Dashboard</h3>
      <div className="d-flex flex-wrap gap-4 mb-4">
        <StatCard title="Total Earning" amount="$500.00" icon={<FaWallet />} gradientClass="card-gradient-purple" />
        <StatCard title="Total Order" amount="$961" icon={<FaShoppingCart />} gradientClass="card-gradient-blue" />
        <StatCard title="Total Income" amount="$203k" icon={<FaDollarSign />} gradientClass="card-gradient-green" />
      </div>
      <h5>Total Growth: $2,324.00</h5>
      <div className="bg-white p-4 rounded shadow-sm" style={{ height: '400px' }}>
        <Bar
          data={barData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
