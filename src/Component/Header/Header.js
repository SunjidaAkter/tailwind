import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = (props) => {
    return (
        <div>
            <nav className='flex nav w-full py-5 justify-start bg-slate-600'>
                <div onClick={() => props.setOpen(!props.open)} className='ml-5 w-6 h-6 md:hidden bg-slate-600 text-zinc-50 '>
                    {props.open ? <XIcon></XIcon> : <MenuAlt1Icon ></MenuAlt1Icon>}
                </div>
                <div className={`md:flex flex md:flex-row md:justify-center flex-col items-center pl-11 md:w-full w-full absolute md:sticky duration-1000 ease-out bg-slate-600 top-16 text-zinc-50 ${props.open ? 'block' : 'hidden'} `}>
                    <CustomLink className="nav" to="/">Home</CustomLink>
                    <CustomLink className="nav" to="/Shop">Shop</CustomLink>
                    <CustomLink className="nav" to="/recharts">Recharts</CustomLink>
                    <CustomLink className="nav" to="/animation">Animation</CustomLink>
                    <CustomLink className="nav" to="/about">About</CustomLink>
                </div>

            </nav>

        </div>
    );
};

export default Header;