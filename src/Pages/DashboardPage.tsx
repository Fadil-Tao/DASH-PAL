import { FaOpencart } from 'react-icons/fa';
import OverviewCard from '../Components/Ui/OverviewCards';
import { SiMoneygram } from "react-icons/si";
import { FaUserTag } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";


const DashboardPage = () => {
    return (
        <div>
            {/* Title and date */}
            <div className='flex md:justify-between justify-around lg:px-10 items-center mt-7'>
                <h1 className='text-white font-bold text-4xl'> Dashboard</h1>
                <div className=''>
                    <input
                        type='date'
                        name='datepicker'
                        id='datepicker'
                        className='rounded-lg bg-inherit text-white border-2 border-neutral-600'
                        value={new Date().toISOString().substring(0, 10)}
                    />
                </div>
            </div>

            {/* Overview Contaienr */}

            <div className='flex md:flex-row flex-col  items-center mt-10 justify-center '>
                {/* OverviewCard */}

                <OverviewCard title='Total Order' total={32} icon={<FaOpencart color={`#DA5D12`}/>} color='text-[#DA5D12]' />
                <OverviewCard title='Total Sales' total={45} icon={<SiMoneygram color={`#35F5FA`}/>}  color='text-[#35F5FA]'/>
                <OverviewCard title='Total User' total={12} icon={<FaUserTag color={'#FC3884'}/>}  color='text-[#FC3884]'/>
                <OverviewCard title='Total Revenue' total={2000} icon={<IoStatsChart color={'#D8F70F'}/>}  color='text-[#D8F70F]'/>
            </div>
        </div>
    );
};

export default DashboardPage;
