import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { PersonType, USERS } from '../../Data/UsersData';
import { FaRegTrashCan } from 'react-icons/fa6';
import DebouncedInput from './DebouncedEffect';
import Table from './Table';

const MyTable = () => {
    const [data, setData] = useState([...USERS]);
    const [globalFilter, setGlobalFilter] = useState('');


    const columns: ColumnDef<PersonType, any>[] = [
        {
            accessorKey: '',
            header: 'No',
            cell: (info) => <span>{info.row.index + 1}</span>,
        },
        {
            accessorKey: 'image',
            header: 'Profile',
            cell: (info) => (
                <img
                    src={info.getValue()}
                    alt='Image'
                    className='rounded-full h-10 w-10 object-cover'
                />
            ),
        },
        {
            accessorKey: 'fullName',
            cell: (info) => <span>{info.getValue()}</span>,
            header: 'name',
        },
        {
            accessorKey: 'email',
            cell: (info) => <span>{info.getValue()}</span>,
            header: 'email',
        },
        {
            accessorKey: 'status',
            cell: (info) => (
                <div className='font-semibold text-center text-sm'>
                    {info.getValue() ? (
                        <div className='bg-green-600 p-0.5 rounded-lg w-16 '>Active</div>
                    ) : (
                        <div className='bg-red-600 p-1 rounded-lg w-16 text-[13px]'>Unknown</div>
                    )}
                </div>
            ),
            header: 'status',
        },
        {
            accessorKey: 'action',
            cell: (info) => (
                <div className='flex justify-center items-center'>
                    <button onClick={() =>{
                        const dataCopy = [...data]
                        dataCopy.splice(info.row.index, 1);
                        setData(dataCopy)
                    }}>
                        <FaRegTrashCan color={'#FF7E23'} />
                    </button>
                </div>
            ),
            header: 'Action',
        },
    ];
    return (
        <div className='p-2 overflow-x-auto rounded-xl max-w-5xl mx-auto text-white fill-gray-400 border border-amber-600 my-10'>
            <div className='flex justify-between mb-2'>
                <div className='w-full flex items-center gap-1'>
                    <DebouncedInput
                        value={globalFilter ?? ''}
                        onChange={(value: number | string) => setGlobalFilter(String(value))}
                        className='p-2  bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-amber-600'
                        placeholder='Search all columns...'
                    />
                </div>
            </div>
            <Table data={data} columns={columns} globalFilter={globalFilter} />
        </div>
    );
};

export default MyTable;
