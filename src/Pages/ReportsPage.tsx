import LineChart from '../Components/Ui/LineChart';
import DoughnutChart from '../Components/Ui/DoughnutChart';
import PieChart from '../Components/Ui/PieChart';
import PolarChart from '../Components/Ui/PolarChart';
import BarChart from '../Components/Ui/BarChart';
import RadarChart from '../Components/Ui/RadarChart';
const ReportsPage = () => {
    return (
        <div className='mx-10 my-10 p-1  '>
            <div className='md:h-[346px] p-3 rounded-lg bg-[#121212] '>
                <LineChart title='Line Chart'/>
            </div>
            <div className='flex flex-wrap mt-5'>
                <div className='md:w-[312px] flex justify-center md:mt-0  bg-[#121212] rounded-2xl px-8 py-4 mr-[33px] md:h-[346px] items-center mt-4 '>
                    <DoughnutChart title='Dougnut Chart'/>
                </div>
                <div className='md:w-[312px] flex justify-center md:mt-0  bg-[#121212] rounded-2xl px-8 py-4 mr-[33px] md:h-[346px] items-center mt-4 '>
                    <PieChart title='PieChart' />
                </div>
                <div className='md:w-[312px] flex justify-center md:mt-0  bg-[#121212] rounded-2xl px-8 py-4  md:h-[346px] items-center mt-4 '>
                    <PolarChart title='Polar Chart'/>
                </div>
            </div>
            <div className='flex flex-wrap mt-10 md:grid md:grid-cols-2 md:gap-3'>
                <div className='md:h-[346px] w-full mt-2 mx-2 rounded-lg bg-[#121212] '>
                    <LineChart title='Line Chart'/>
                </div>
                <div className='md:h-[346px] w-full mt-2 mx-2 rounded-lg bg-[#121212] '>
                    <BarChart axis={true}  title='BarChart Vertical'/>
                </div>
                <div className='md:h-[346px] w-full mt-2 mx-2 rounded-lg bg-[#121212] '>
                    <BarChart axis={false} title='BarChart Horizontal' />
                </div>
                <div className='md:h-[346px] w-full mt-2 mx-2 rounded-lg bg-[#121212] '>
                    <RadarChart title='Radar Chart'/>
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;
