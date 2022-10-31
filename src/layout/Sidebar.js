import React from 'react'
import { ExploreIcon, HomeIcon, ListsIcon, MessagesIcon, MoreIcon, NotificationsIcon, PopulerIcon, ProfileIcon } from '../icons/Icon'

const Sidebar = () => {
    return (
        <div className='w-72 bg-blue-200'>
            <h1>Sidebar</h1>
            <HomeIcon/>
            <ExploreIcon/>
            <NotificationsIcon/>
            <MessagesIcon/>
            <ListsIcon/>
            <ProfileIcon/>
            <MoreIcon/>
        </div>
    )
}

export default Sidebar

