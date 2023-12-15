import { Chart } from "react-chartjs-2"
import dummyCategoryData from "../../Data/dummyCategory.json"

interface CategoryValue{
    label:string 
    value:number
}

const DoughnutChart = () =>{
    const data:CategoryValue[] = dummyCategoryData

    return (
        <div className="md:w-[400px] flex justify-center md:mt-0 mt-10 bg-[#121212] rounded-2xl px-8 py-4 mx-4 md:h-[346px] items-center ">
            <Chart type="doughnut" data={{
                labels: data.map(item => item.label),
                datasets:[
                    {
                        label:"Count",
                        data: data.map(item => item.value),
                        backgroundColor:[
                            "#FD6511",
                            "#32E7F2",
                            "#F23378",
                            "#D1F00F", 
                        ],
                        borderColor:[
                            "#FD6511",
                            "#32E7F2",
                            "#F23378",
                            "#D1F00F", 
                        ],
                        
                    }
                ],
            }} options={{
                responsive:true,
                plugins:{
                    title:{
                        display:true,
                        text:"Top Categories",
                        align:"start",
                        color:"#FEFEFE",
                        font:{
                            size:18
                        }
                    },
                    legend:{
                        position:'bottom',
                       labels:{
                        usePointStyle:true,
                       }
                    }
                }
            }}
            />
        </div>
    )
}

export default DoughnutChart;