import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartWindow = ({ chartData }) => {
    return (
        <div style={{ width: '800px', height: '600px', margin: 'auto' }}>
            <h3 className="text-primary">📊 Prediction Comparison</h3>
            <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
    );
};

export default ChartWindow;