import React from 'react'
import SideLink from '../components/SideLink';
import { ExploreIcon, HomeIcon, ListsIcon, MessagesIcon, MoreIcon, NotificationsIcon, PopulerIcon, ProfileIcon } from '../icons/Icon'
import twitterLogo from "../images/twitter.svg"

const sideLinks = [
    {
        name: "Home",
        icon: HomeIcon,
    },
    {
        name: "Explore",
        icon: ExploreIcon,
    },
    {
        name: "Notifications",
        icon: NotificationsIcon,
    },
    {
        name: "Messages",
        icon: MessagesIcon,
    },
   
    {
        name: "Lists",
        icon: ListsIcon,
    },
    {
        name: "Profile",
        icon: ProfileIcon,
    },
    {
        name: "More",
        icon: MoreIcon,
    },
];
const Sidebar = () => {
    return (
        <div className='flex flex-col justify-between w-72 px-2'>
            <div>
                <div className='flex items-center justify-center w-12 h-12 rounded-full mt-1 mb-4 ml-1 hover:bg-gray-lightest'>
                    <img src={twitterLogo} alt="Twitter logo" className="w-9 h-9" />

                </div>
                <nav className='mb-4'>
                    <ul>
                        {sideLinks.map(({ name, icon }) => (
                            <SideLink
                                key={name}
                                name={name}
                                Icon={icon}
                            
                            />
                        ))}
                    </ul>
                </nav>
                <button className='bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200'>Tweet</button>
            </div>
            <div>Alt Taraf</div>
        </div>
    )
}

export default Sidebar

