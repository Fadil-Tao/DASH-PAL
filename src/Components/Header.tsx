import { IoIosNotifications } from 'react-icons/io';
import { useContext } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { isOpenContext } from '../Pages/RootLayout';
import { BsMoonStarsFill } from "react-icons/bs";
const Header = () => {
    const {isOpen,setIsopen} = useContext(isOpenContext);
    
   
    return (
        <div className=' bg-black pr-3 mt-2  md:mx-2 text-[34px] text-zinc-400  w-full w-max-screen h-14 justify-between flex items-center'>
            <div className='flex items-center justify-center ml-4'>
                <button
                    className={`bg-orange-500 rounded-md p-1  items-center justify-center mx-2 md:hidden text-white ${isOpen? '-left-36':'left-0'}`}
                    onClick={() => setIsopen(!isOpen)}
                >
                    {<GiHamburgerMenu />}
                </button>
                <div className='mx-3' >
                    <BsMoonStarsFill />
                </div>
            </div>
            <div className='flex ml-12 '>
                <div className='flex items-center mx-1'>
                    <IoIosNotifications />
                </div>
                <div className='hidden lg:flex flex-col text-sm text-right mr-2'>
                    <p>Arman Sarukyan</p>
                    <p className='text-[12px]'>arman@gmail.com</p>
                </div>
                <div className=' rounded-full w-12 h-12 mr-5'>
                    <img
                        src='https://loremflickr.com/640/360'
                        alt='profile image'
                        className='rounded-full object-cover w-full h-full'
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
