import { Chart } from 'react-chartjs-2';
import dummyCategory from '../../Data/dummyCategory.json';

interface CategoryValues {
    label: string;
    value: number;
}
const RadarChart = () => {
    const data: CategoryValues[] = dummyCategory;

    return (
        <div className='w-full h-full'>
            <Chart
                type='radar'
                data={{
                    labels: data.map((item) => item.label),
                    datasets: [
                        {
                            label: '2019',
                            data: data.map((item) => item.value),
                            backgroundColor: 'rgba(173, 106, 83, 0.1)',
                            borderColor: 'rgba(173, 106, 83, 0.9)',
                            borderWidth: 1,
                            pointRadius: 1,
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    scales: {
                        r: {
                            angleLines: {
                                color: '#1E1E1E',
                            },
                            ticks: {
                                display: false, 
                            },
                            grid: {
                                color: 'rgba(30, 30, 30, 0.5)',
                            },
                            suggestedMin: 50,
                            suggestedMax: 50,
                        },
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Top Categories',
                            align: 'start',
                            color: '#FEFEFE',
                            font: {
                                size: 18,
                            },
                        },
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default RadarChart;
