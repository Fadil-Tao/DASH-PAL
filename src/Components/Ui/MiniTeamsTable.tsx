import dummyTeam from '../../Data/dummyTeamData.json';

interface TeamValue {
    name: string;
    avatar: string;
    email: string;
    location: string;
    role: string;
}

const MiniTeamsTable = () => {
    const data: TeamValue[] = dummyTeam;
    return (
        <div className='h-full overflow-x-auto w-full text-white py-1'>
            <p className='font-bold text-white text-[18px]'>Team Leads</p>
            <table className='table w-full'>
                <thead className=' border-b-[0.5px] border-[#535353] '>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>location</th>
                        <th>role</th>
                    </tr>
                </thead>
                <tbody className='text-[#535353]'>
                    {data.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td className='flex mt-3'>
                                    <div className='flex items-center justify-center'>
                                        <div className=' w-12 h-12'>
                                            <img
                                                src={item.avatar}
                                                alt='Avatar'
                                                className=' object-fit h-full w-full rounded-full'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center ml-2 '>
                                        <div className='font-bold  '>{item.name}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='mx-6'>{item.email}</div>
                                </td>
                                <td>
                                    <div className='mx-6'>{item.location}</div>
                                </td>
                                <td>
                                    <div className='mx-6'>{item.role}</div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MiniTeamsTable;
