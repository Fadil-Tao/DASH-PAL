import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import SideDrawer from '../Components/SideDrawer';
import { createContext, useState} from 'react';


export const isOpenContext = createContext<boolean | any>(false);

const RootLayout = () => {
    const [isOpen,setIsopen] = useState<boolean | void>(false);
    return (
        <isOpenContext.Provider value={{isOpen, setIsopen}}  >
            <div className='flex min-h-screen  max-w-screen'>
                <SideDrawer />
                <div className='w-full'>
                    <Header />
                    <div className=' bg-neutral-950 max-h-full min-h-screen  flex justify-start  items-start '>
                        <div className='w-[98%] max-h-full min-h-screen rounded-md bg-zinc-900'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </isOpenContext.Provider>
    );
};

export default RootLayout;
