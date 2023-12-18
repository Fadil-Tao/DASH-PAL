import InputText from './input/InputText';
const ProfileForm = () => {
    return (
        <div className='rounded-xl mx-10 border-amber-600 text-zinc-400 py-4 px-6 border mt-10 mb-4 '>
            <div className='border-b-2  border-b-zinc-500'>
                <h2 className='text-xl'>Profile Setting</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>
                <InputText name='name' label='Name' defaultValue='Tj Dillashaw' />
                <InputText name='title' label='Title' defaultValue='Chief Manager' />
                <InputText name='place' label='Place' defaultValue='Sydney' />
                <InputText name='email' label='Email' defaultValue='Tjshaw@gmail.com' />
            </div>
            <div className='w-full border border-zinc-500'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <InputText name='lang' label='Language' defaultValue='Malay' />
                <InputText name='timezone' label='Timezone' defaultValue='GMT+8' />
            </div>
        </div>
    );
};

export default ProfileForm;
