import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import dummyRevenue from '../../Data/dummyRevenue.json';
import { defaults } from 'chart.js';
interface dataValue {
    label: string;
    income: number;
    expense: number;
}

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const LineChart = () => {
    const data: dataValue[] = dummyRevenue;

    return (
        <div className='md:w-[600px] md:h-[346px] p-3 rounded-lg bg-[#121212] mx-4 '>
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
                            radius: 1,
                        },
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Revenue Overview',
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
