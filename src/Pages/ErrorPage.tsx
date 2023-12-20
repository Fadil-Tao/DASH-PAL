import { GiSadCrab } from 'react-icons/gi';
const ErrorPage = () => {
    return (
        <div className='min-h-screen w-full flex justify-center items-center'>
            <div className='text-amber-600 '>
                <div className=' flex justify-center items-center w-full text-[120px] text-center'>
                    <p>
                        <GiSadCrab />
                    </p>
                </div>
                <div className=' text-center'>
                    <h1 className='text-xl '>Ooops i think theres something wrong</h1>
                    <p>Even the crab is sad</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
