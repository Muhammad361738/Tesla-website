import React from 'react';
import Image from 'next/image';
import logo1 from "../Assests/logo1.jpg"
import logo2 from "../Assests/logo2.jpg"
import logo3 from "../Assests/logo3.jpg"
import last1 from "../Assests/last1.jpg"
import last22 from "../Assests/last22.jpg"
import last3 from "../Assests/last3.jpg"
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <div className='absolute inset-0 flex flex-wrap  justify-between text-center items-center   h-20  mt-2 w-full mx-auto  z-10'>
                <div className=''>
                    <Image className='w-36 h-24 p-5   ' src={logo2} alt="" />
                </div>
                <div className='hidden md:block'>
                    <ul className='flex justify-center items-center text-white gap-7 font-bold'>
                        <li><Link href="/"></Link>Vehicles</li>
                        <li><Link href="/">Energy</Link></li>
                        <li><Link href="/">Charging</Link></li>
                        <li><Link href="/">Discover</Link></li>
                        <li><Link href="/">Shop</Link></li>
                        <li><Link href="/">We,Robot</Link></li>
                    </ul>
                </div>
                <div className='block md:hidden'>
                    <button className='text-4xl   text-white p-3'>&#8801;</button>
                </div>
                <div className=' hidden md:block gap-2 items-center p-5'>
                    <ul className='flex outline-none gap-2 items-center '>
                        <li><Link href="/"><Image className='w-8 h-8 outline-none rounded-full'  src={last1} alt="" /></Link></li>
                        <li><Link href="/"><Image className='w-8 h-8 outline-none rounded-full' src={last22} alt="" /></Link></li>
                        <li><Link href="/"><Image className='w-8 h-8 outline-none rounded-full' src={last3} alt="" /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
