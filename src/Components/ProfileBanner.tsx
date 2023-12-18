import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const ProfileBanner = () => {
    return (
        <>
            <div className='flex md:justify-between justify-around lg:px-10 items-center mt-7'>
                <h1 className='text-white font-bold text-2xl'> Welcome Arman </h1>
            </div>
            <div className=' w-full h-full px-6 rounded-[20px] mt-8'>
                <div className='relative'>
                    <div className='bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400 to-black border-8 border-zinc-900 w-full rounded-[20px] h-48 '>
                        <div className='h-40 w-40 absolute bottom-[-60px]   left-1/2 transform -translate-x-1/2 border-8 border-zinc-900  rounded-full'>
                            <img
                                src='https://loremflickr.com/640/360'
                                alt=''
                                className='object-cover w-full h-full rounded-full'
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full mt-16 '>
                    <p className='text-center font-bold text-xl text-zinc-300'>Arman Tsarukyan</p>
                    <p className='text-zinc-500 text-center text-[10px]'>
                        <span>Admin</span> | <span>IT Manager</span> |{' '}
                        <span>Chief FrontEnd Designer</span>
                    </p>
                </div>
                <div className="flex justify-center text-amber-600 mt-4 text-4xl">
                    <div className="mx-10"><CiLinkedin /></div>
                    <div><FaFacebook/></div>
                    <div className="mx-10"><FaInstagram/></div>
                </div>
                <div className="flex justify-center items-center mt-3">
                    <p className="text-center text-zinc-500 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora nemo saepe expedita dolore, dolores optio fugit cum minima quam alias consectetur ad rerum soluta, qui molestias quisquam, officiis delectus?</p>
                </div>
            </div>
        </>
    );
};

export default ProfileBanner;
