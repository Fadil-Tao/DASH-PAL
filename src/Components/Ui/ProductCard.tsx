import { FaStar } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';

// You can customize this to your own interface
interface ProductValue {
    id?: number;
    title?: string;
    price?: number;
    image?: string;
    rating?: number;
}

const ProductCard = ({
    id,
    title,
    price,
    image = 'https://hypebeast.com/image/2019/06/nike-sb-dunk-low-pro-pine-green-black-j-pack-release-info-bq6817-005-001.jpg',
    rating,
}: ProductValue) => {
    return (
        <div key={id} className=' bg-[#121212] w-56 h-72 rounded-[20px] px-5 m-4'>
            <div className='flex justify-center items-center bg-white rounded-lg  pt-3 h-[50%] '>
                <img
                    src={image}
                    alt='image'
                    className='object-contain w-full h-full '
                />
            </div>
            <div className='mt-0 text-sm text-gray-500 '>
                <p className='flex items-center'>
                    <span className=''>
                        <FaStar color={'#E34346'} />
                    </span>
                    {rating} China
                </p>
            </div>
            <div className=' text-[14px] text-gray-400 '>
                <p className='overflow-hidden overflow-ellipsis whitespace-nowrap max-h-[3em]'>
                    {title}
                </p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-semibold text-gray-200 text-lg'>${price}</p>
                <div className=' bg-green-500 rounded-md flex justify-center items-center  p-1 '>
                    <p className='text-gray-200 text-center text-[9px] font-semibold'>instock</p>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <div className=' bg-blue-700 rounded-full w-2 h-2 mr-1'> </div>
                    <div className=' bg-yellow-700 rounded-full w-2 h-2 mr-1'> </div>
                    <div className=' bg-red-700 rounded-full w-2 h-2 mr-1'> </div>
                    <div className=' bg-green-700 rounded-full w-2 h-2 mr-1'> </div>
                </div>
                <div>
                    <p className='text-gray-500  text-[10px]'>
                        <span>Size</span>M L XL XXL
                    </p>
                </div>
            </div>
            <div className='text-white bg-red-700 rounded-2xl w-14 h-6 mt-2 flex justify-center items-center px-3 '>
                <FaRegTrashCan />
            </div>
        </div>
    );
};

export default ProductCard;
