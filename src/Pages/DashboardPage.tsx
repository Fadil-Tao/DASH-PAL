import { FaOpencart } from 'react-icons/fa';
import OverviewCard from '../Components/Ui/OverviewCards';
import { SiMoneygram } from "react-icons/si";
import { FaUserTag } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import LineChart from '../Components/Ui/LineChart';
import DoughnutChart from '../Components/Ui/DoughnutChart';
import RadarChart from '../Components/Ui/RadarChart';
import MiniTeamsTable from '../Components/Ui/MiniTeamsTable';

const DashboardPage = () => {
    return (
        <div>
            {/* Title and date */}
            <div className='flex md:justify-between justify-around lg:px-10 items-center mt-7'>
                <h1 className='text-white font-bold text-2xl'> Dashboard</h1>
                <div className=''>
                    <input
                        type='date'
                        name='datepicker'
                        id='datepicker'
                        className='rounded-lg bg-inherit text-white border-2 border-neutral-600'
                        defaultValue={new Date().toISOString().substring(0, 10)}
                    />
                </div>
            </div>

            {/* Overview Contaienr */}

            <div className='flex md:flex-row flex-col  items-center mt-5 justify-center '>
                {/* OverviewCard */}

                <OverviewCard title='Total Order' total={32} icon={<FaOpencart color={`#DA5D12`}/>} color='text-[#DA5D12]' />
                <OverviewCard title='Total Sales' total={45} icon={<SiMoneygram color={'#FC3884'}/>}  color='text-[#FC3884]'/>
                <OverviewCard title='Total User' total={12} icon={<FaUserTag color={`#DA5D12`}/>}  color='text-[#DA5D12]'/>
                <OverviewCard title='Total Revenue' total={2000} icon={<IoStatsChart color={'#FC3884'}/>}  color='text-[#FC3884]'/>
            </div>

            {/* charts container  */}
            <div className='flex md:flex-row flex-col mt-1'>
                <div className='md:w-[600px] md:h-[346px] p-3 rounded-lg bg-[#121212] mx-4'>
                    <LineChart/>
                </div>
                <div className='md:w-[400px] flex justify-center md:mt-0  bg-[#121212] rounded-2xl px-8 py-4 mx-4 md:h-[346px] items-center mt-4 '>
                    <DoughnutChart/>
                </div>
            </div>

            {/* third layer container */}
            <div className='mt-8 flex md:justify-around  flex-col md:flex-row md:h-auto h-auto mb-10 md:px-2 '>
                <div className='  flex justify-center md:mt-0 mt-10 bg-[#121212] rounded-2xl px-10  py-4 md:mx-4 mx-[10px] mx items-center  h-full md:h-auto max-h-full w-[95%] md:w-full'>
                    <RadarChart />
                </div>
                <div className='md:mt-0 mt-4  bg-[#121212] md:w-[645px] px-10 py-3 h-full rounded-xl mx-4'>
                    <MiniTeamsTable/>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
