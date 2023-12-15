interface OverviewCardprops {
    title: string;
    total: number;
    icon: any;
    color: string
}

const OverviewCard = ({ title, total,  icon ,color}: OverviewCardprops) => {
    return (
        <div className='grid w-64 md:w-60 grid-cols-2 mb-5 md:mx-4 bg-[#121212] py-3 px-3 rounded-xl'>
            <div className='grid grid-cols-1'>
                <p className='text-sm font-semibold text-white'>{title}</p>
                <p className={`${color} text-[40px] font-semibold`}>{total}</p>
            </div>
            <div className='flex justify-center items-center p-2'>
                <p className=' text-5xl text-rose-600'>
                    {icon}
                </p>
            </div>
        </div>
    );
};

export default OverviewCard;
