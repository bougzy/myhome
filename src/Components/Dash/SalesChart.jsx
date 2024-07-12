// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Card, Container } from 'react-bootstrap';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import "./SalesChart.css"

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//         {
//             label: 'Sales Statistics',
//             data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
//             borderColor: '#FF6D00',
//             backgroundColor: 'rgba(255, 109, 0, 0.5)',
//             fill: true,
//             tension: 0.4,
//         },
//     ],
// };

// const options = {
//     plugins: {
//         legend: {
//             display: false,
//         },
//         tooltip: {
//             callbacks: {
//                 label: function (context) {
//                     return `${context.raw}`;
//                 },
//             },
//         },
//     },
//     scales: {
//         y: {
//             beginAtZero: true,
//             ticks: {
//                 stepSize: 100,
//             },
//         },
//     },
// };

// const SalesChart = () => (
//     <Container className="mt-4">
//         <Card style={{ width: '800px', margin: '20px auto', padding: '20px' }}>
//             <Card.Body>
//                 <Card.Title>Sales Statistics</Card.Title>
//                 <Line data={data} options={options} />
//             </Card.Body>
//         </Card>
//     </Container>
// );

// export default SalesChart;









// SalesChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import 'chart.js/auto';

const SalesChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '',
        data: [50, 20, 150, 100, 300, 400, 200, 250, 300, 150, 200, 300],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#003366',
        },
      },
      y: {
        ticks: {
          color: '#003366',
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <Card className="border border-0">
      <Card.Body>
        <Card.Title style={{ color: '#003366' }}>Sales Statistics</Card.Title>
        <div style={{ height: '300px' }}>
          <Line data={data} options={options}  />
        </div>
      </Card.Body>
    </Card>
  );
};

export default SalesChart;

