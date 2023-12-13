import { Link } from 'react-router-dom';

interface DrawerLinkprops {
    title: string;
    link: string;
    icon: any;
}

const DrawerLink = ({ title, link, icon }: DrawerLinkprops) => {
    return (
        <div className='rounded-md hover:bg-zinc-900 p-2 w-full  text-zinc-500 hover:text-white after:bg-white'>
            <Link to={link} className='flex items-center justify-start'>
                <span className='md:ml-8 ml-2 mr-2'>{icon}</span>
                {title}
            </Link>
        </div>
    );
};
export default DrawerLink;
