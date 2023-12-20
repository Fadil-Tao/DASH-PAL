import DrawerLink from './Ui/DrawerLink';
import { AiOutlineDashboard } from 'react-icons/ai';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { MdManageAccounts } from 'react-icons/md';
import { GrAnalytics } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';
import { useContext } from 'react';
import { isOpenContext } from '../Pages/RootLayout';
import { FaUsers } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { FaRegRegistered } from 'react-icons/fa6';
import { GiCrab } from 'react-icons/gi';

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
        title: 'Users',
        link: '/Users',
        icon: <FaUsers />,
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
    {
        title: 'Login',
        link: '/login',
        icon: <FiLogIn />,
    },
    {
        title: 'Register',
        link: '/register',
        icon: <FaRegRegistered />,
    },
];

const SideDrawer = () => {
    const { isOpen, setIsopen } = useContext(isOpenContext);

    return (
        <div
            className={`bg-black md:static fixed  min-h-screen text-white md:min-h-screen  w-36 lg:w-48 md:flex transition-all duration-500 ease-in-out ${
                isOpen ? 'left-0' : '-left-36'
            } `}
        >
            <div className='pt-4 h-full'>
                <div className='flex justify-center items-center '>
                    <div className=' p-1 text-4xl text-amber-600 rounded '>
                        <GiCrab />
                    </div>
                    <h1 className='font-bold text-zinc-500'>
                        DashPal
                    </h1>
                    <button
                        className='bg-orange-500 rounded-md p-1 flex items-center justify-center mx-2 md:hidden '
                        onClick={() => setIsopen(!isOpen)}
                    >
                        {<IoMdClose />}
                    </button>
                </div>
                <div className='flex justify-center  items-start mt-4 w-full'>
                    <ul className=''>
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
