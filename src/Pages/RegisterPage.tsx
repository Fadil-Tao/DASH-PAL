import { Link } from 'react-router-dom';
import InputForm from '../Components/input/InputForm';
import { GiCrab } from 'react-icons/gi';

const RegisterPage = () => {
    return (
        <div className='  min-h-screen flex justify-center items-center bg-zinc-900 w-full '>
            <div className='mx-10 max-w-full   flex-col flex justify-start items-center  md:mx-10'>
                <div className='flex justify-start items-center w-full '>
                    <span className='text-amber-600 font-bold text-[150px]'>
                        <GiCrab />
                    </span>
                    <h1 className='text-zinc-500 font-bold text-4xl md:text-6xl'>
                        Dashboard <span className='text-amber-600 font-bold'>PAL</span>
                    </h1>
                </div>
                <div className='w-full'>
                    <p className='text-zinc-500 text-center'>
                        An Admin Dashboard Template To Boost Your Productivity
                    </p>
                </div>
            </div>
            <div className='border border-amber-600 shadow-neumorphismdark rounded-md w-84 p-10'>
                <h1 className='text-amber-600 font-bold text-4xl mb-5'>Register</h1>
                <InputForm title='Email' placeholder='Your Email' name='email' type='text' />
                <InputForm
                    title='Password'
                    placeholder='Your Password'
                    name='password '
                    type='password'
                />
                <InputForm
                    title='Retype Password'
                    placeholder='Your Password'
                    name='passwordvalidate'
                    type='password'
                />
                <div className='bg-amber-600 text-zinc-800 w-full mt-10 rounded-full p-2 flex justify-center items-center font-bold'>
                    <Link to={'/dashboard'} className='w-full text-center'>Register</Link>
                </div>
                <div className='text-zinc-500 my-2 '>
                    <p>
                        Already Have An Account?{' '}
                        <Link className='text-amber-600 font-bold' to={'/login'}>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default RegisterPage;
