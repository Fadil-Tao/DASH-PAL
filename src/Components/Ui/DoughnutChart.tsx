import { Chart } from 'react-chartjs-2';
import dummyCountryData from '../../Data/dummyCountryData.json';

interface CountryValue {
    label: string;
    value: number;
}

const DoughnutChart = () => {
    const data: CountryValue[] = dummyCountryData;

    return (
        <div className='w-full h-full '>
            <Chart
                type='doughnut'
                data={{
                    labels: data.map((item) => item.label),
                    datasets: [
                        {
                            label: 'Count',
                            data: data.map((item) => item.value),
                            backgroundColor: ['#FD6511', '#32E7F2', '#F23378', '#D1F00F'],
                            borderColor: ['#FD6511', '#32E7F2', '#F23378', '#D1F00F'],
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Top Buyers Country',
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

export default DoughnutChart;
