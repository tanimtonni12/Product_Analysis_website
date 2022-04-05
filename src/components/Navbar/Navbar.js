import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import Linkdata from '../Linkdata/Linkdata';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Reviews', link: '/reviews' },
        { id: 3, name: 'Dashboard', link: '/dashboard' },
        { id: 4, name: 'Blogs', link: '/blogs' },
        { id: 5, name: 'About', link: '/about' }
    ];
    return (


        <nav className=' bg-black text-white py-3'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-black w-full duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Linkdata key={route.id}
                        route={route}>

                    </Linkdata>)
                }

            </ul>
        </nav>


    );
};

export default Navbar;