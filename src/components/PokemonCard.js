import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import fire from '../images/fire.png';

const CardWrapper = styled.div`

  background-image: url(${fire});
  background-size: cover;
  background-position: center;

  width: 300px;
  height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  padding: 20px;
  margin: 10px;
`;

const CardWrapperFooter = styled.div`
  width: 280px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: top;
  background-color: rgb(224, 226, 227) ;
  border-radius: 5px;
  font-size: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 8);
  padding: 20px;
  margin: 10px;
`;

const CardTitle = styled.h3`
  text-transform: uppercase;
  font-size: 24px;
  margin-bottom: 10px;
  border: 2px solid red; color: blue;
  color: gray
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 0px;
`;

const CardStat = styled.p`
color:gray;
  margin: 5px 0;
`;

const CardLabel = styled.span`
  color:gray;
  font-weight: bold;
`;

const StyledBar = styled(Bar)`
  background-color: rgb(224, 226, 227);
  border-color: blue;
  border-width: 1;
`;


function PokemonCard({ name, image, stats, weight, abilities, weaknesses }) {

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
        <CardWrapper>
            <CardTitle>{name}</CardTitle>
            <CardImage src={image} />
            <CardStat>
                <StyledBar data={chartData} options={chartOptions} Chart={Chart} />
            </CardStat>
            <CardWrapperFooter>
                <CardStat>
                    <CardLabel>Weight:</CardLabel> {weight} kg
                </CardStat>
                <CardStat>
                    <CardLabel>Abilities:</CardLabel> {abilities.join(', ')}
                </CardStat>
                <CardStat>
                    <CardLabel>Weaknesses:</CardLabel> {weaknesses.join(', ')}
                </CardStat>
            </CardWrapperFooter>
        </CardWrapper>
    );
}

export default PokemonCard;