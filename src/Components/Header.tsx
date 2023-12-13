import { CgDarkMode } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";

const Header = () =>{
    return (
        <div className=" bg-black py-2 text-[34px] text-zinc-400  w-full w-max-screen h-14 justify-between flex items-center">
            <div className="  mx-10">
                <CgDarkMode/> 
            </div>
            <div className="flex ml-12">
                <div className="flex items-center mx-4">
                    <IoIosNotifications />
                </div>
                <div className="hidden lg:flex flex-col text-sm text-right mr-2">
                    <p>Arman Sarukyan</p>
                    <p className="text-[12px]">arman@gmail.com</p>
                </div>
                <div className=" rounded-full w-12 h-12 mr-5">
                    <img src="https://loremflickr.com/640/360" alt="profile image"  className="rounded-full object-cover w-full h-full"/>
                </div>
            </div>
        </div>
    )
}

export default Header