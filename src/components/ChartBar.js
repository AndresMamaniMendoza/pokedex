import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const StyledBar = styled(Bar)`
    background-color: rgb(224, 226, 227);
    border-color: blue;
    border-width: 1;
`;


function ChartBar({ stats }) {

    const chartData = {
        labels: stats.map(stat => stat.stat.name),
        datasets: [
            {
                label: 'Stats',
                data: stats.map(stat => stat.base_stat),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                    min: 0,
                    max: 100
                }
            }
        }
    };

    return (
        <StyledBar data={chartData} options={chartOptions} Chart={Chart} />
    );
}

export default ChartBar;