import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import dummyRevenue from '../../Data/dummyRevenue.json';
import { defaults } from 'chart.js';
import { ChartDataValue, chartProps } from '../../types/types';





defaults.maintainAspectRatio = false;
defaults.responsive = true;

const BarChart = ({title,axis=true}:chartProps) => {
    const data: ChartDataValue[] = dummyRevenue;

    return (
        <div className='w-full h-full  p-10'>
            <Chart
                type='bar'
                data={{
                    labels: data.map((item) => item.label),
                    datasets: [
                        {
                            label: 'Expense',
                            data: data.map((item) => item.expense),
                            backgroundColor: 'rgba(224, 76, 136, 1)',
                            borderColor: '#E04C88',
                        },
                        {
                            label: 'Income',
                            data: data.map((item) => item.income),
                            backgroundColor: 'rgba(173, 106, 83, 1)',
                            borderColor: '#AD6A53',
                        },
                    ],
                }}
                options={{
                    indexAxis : axis?"x" : "y",
                    elements: {
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

export default BarChart;
