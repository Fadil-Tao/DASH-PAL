import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



interface DrawerLinkprops {
    title: string;
    link: string;
    icon: any;
}

type LocationTypes = {
    pathname: string;


}
  

const DrawerLink = ({ title, link, icon }: DrawerLinkprops) => {
    const location: LocationTypes= useLocation()

    return (
        <div className='rounded-md hover:bg-zinc-900  w-full  text-zinc-500 hover:text-white after:bg-white  my-7  '>
            <Link to={link} className='flex items-center justify-start text-md '>
                <span className={`md:ml-8 ml-2 mr-2  ${location.pathname== link  &&  ' text-zinc-900 bg-amber-600 shadow-neumorphismdark'} rounded-md  p-2`}>{icon}</span>
                {title}
            </Link>
        </div>
    );
};
export default DrawerLink;
