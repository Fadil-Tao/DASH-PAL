import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import SideDrawer from '../Components/SideDrawer';

const RootLayout = () => {
    return (
        <div className='flex min-h-screen  max-w-screen'>
            <SideDrawer />
            <div className='w-full'>
                <Header />
                <div className=' bg-neutral-950 min-h-screen flex justify-center items-center '>
                    <div className='w-[98%]  h-[97vh] rounded-md bg-zinc-900'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RootLayout;
