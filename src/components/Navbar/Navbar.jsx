import React, { useEffect, useState } from 'react'
import logoImg from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import './Navbar.css'
import { useStore } from '../../zustand/store';
export const Navbar = () => {
    const [bgChange, setBgChange] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setBgChange(true);
        } else {
            setBgChange(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarOpened = useStore((state) => state.navBarOpened);
    const setNavBarOpened = useStore((state) => state.setNavBarOpened);

    function closeSideBar(e) {
        if (!e.target.closest(".links") && !e.target.closest(".smNav")) {
            setNavBarOpened(false);
        }
    }
    useEffect(() => {
        document.addEventListener("click", closeSideBar);
    }, []);

    return (
        <div className={`flex items-center justify-between navbar px-11 py-3 bg-transparent fixed top-0 w-full z-50 ${bgChange ? "md:bg-sky-900 md:shadow-lg" : ""}`}>
            <Link to={'/'} className='image'>
                <img src={logoImg} alt="logoImg" className='w-full' />
            </Link>
            <span className='smNav text-white cursor-pointer md:hidden' onClick={() => setNavBarOpened(!navbarOpened)}><FaBarsStaggered size={25} /></span>
            <div className={`links flex items-center md:justify-between gap-11 ${navbarOpened ? "right-0" : "right-[-100%] md:right-0"}`}>
                <Link to={"/parent"}>Parent</Link>
                <Link>Providers</Link>
                <Link>Teachers</Link>
                <Link>Our Story</Link>
                <Link className='YellowBtn px-11 py-2 rounded-lg'>Login</Link>
            </div>
        </div>
    )
}
