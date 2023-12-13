import DrawerLink from './Ui/DrawerLink';
import { AiOutlineDashboard } from 'react-icons/ai';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { MdManageAccounts } from 'react-icons/md';
import { GrAnalytics } from 'react-icons/gr';

type menuType = {
    title: string;
    link: string;
    icon: any;
};
const menus: menuType[] = [
    {
        title: 'Dashboard',
        link: '/dashboard',
        icon: <AiOutlineDashboard />,
    },
    {
        title: 'Product',
        link: '/product',
        icon: <MdOutlineProductionQuantityLimits />,
    },
    {
        title: 'Transaction',
        link: '/transaction',
        icon: <GrTransaction />,
    },
    {
        title: 'Account',
        link: '/account',
        icon: <MdManageAccounts />,
    },
    {
        title: 'Reports',
        link: '/reports',
        icon: <GrAnalytics />,
    },
];

const SideDrawer = () => {
    return (
        <div className='bg-black  text-white min-h-screen w-36 lg:w-48 '>
            <div className='pt-4 h-full'>
                <div className='flex justify-center items-center '>
                    <h1 className='font-bold'>
                        <span className='bg-orange-500 rounded-lg p-1 mx-1'>DP</span>DASH-PAL
                    </h1>
                </div>
                <div className='flex justify-center items-center mt-4 w-full'>
                    <ul className='w-full'>
                        {menus.map((data, index) => {
                            return (
                                <li key={index}>
                                    <DrawerLink
                                        title={data.title}
                                        link={data.link}
                                        icon={data.icon}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideDrawer;
