import { Chart } from "react-chartjs-2"
import dummyCountryData from '../../Data/dummyCountryData.json'
import { DummyCountryValue, chartProps } from "../../types/types"


const PolarChart = ({title}:chartProps) => {
    const data: DummyCountryValue[] = dummyCountryData

    return (
        <div className='w-full h-full '>
            <Chart
                type='polarArea'
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
                    scales:{r:{
                        ticks:{
                            display:false,
                        }
                    }},
                    plugins: {
                        title: {
                            display: true,
                            text: title,
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
    )
}

export default PolarChart