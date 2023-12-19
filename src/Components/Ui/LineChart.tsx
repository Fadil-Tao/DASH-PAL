import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import dummyRevenue from '../../Data/dummyRevenue.json';
import { defaults } from 'chart.js';
import { ChartDataValue, chartProps } from '../../types/types';




defaults.maintainAspectRatio = false;
defaults.responsive = true;



const LineChart = ({title}:chartProps) => {
    const data: ChartDataValue[] = dummyRevenue;

    return (
        <div className='w-full h-full  px-10 py-5'>
            <Chart
                type='line'
                data={{
                    labels: data.map((item) => item.label),
                    datasets: [
                        {
                            label: 'Expense',
                            data: data.map((item) => item.expense),
                            backgroundColor: 'rgba(224, 76, 136, 0.3)',
                            borderColor: '#E04C88',
                        },
                        {
                            label: 'Income',
                            data: data.map((item) => item.income),
                            backgroundColor: 'rgba(173, 106, 83, 0.1)',
                            borderColor: '#AD6A53',
                            fill: true,
                        },
                    ],
                }}
                options={{
                    elements: {
                        line: {
                            tension: 0.5,
                            borderWidth: 1,
                        },
                        point: {
                            pointStyle: 'circle',
                            borderWidth: 1,
                            radius: 2,
                        },
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: title,
                            align:"start",
                            color:"#FEFEFE",
                            font:{
                                size:18
                            }
                        },
                        legend: {
                            display: true,
                            labels: {
                                usePointStyle: true,
                                boxWidth: 7,
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default LineChart;
