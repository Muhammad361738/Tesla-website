import React from 'react';
import Image from 'next/image';
import solar from "../Assests/solar.jpg"
import solaroof from "../Assests/solaroof.jpg"
import power from "../Assests/power.jpg"
import ass from "../Assests/ass.jpg"

const Page = () => {
    return (
        <div>
        <div className='lg:flex '>
             <div className='relative h-screen w-auto lg:w-[700px]  pt-5 px-5 rounded-lg'>
                <Image className=' h-screen w-full rounded-lg' src={solar} alt="" />
                <div className='absolute inset-0 flex justify-center  text-white font-bold'>
                    <div className='text-white text-center lg:pt-16  rounded-lg  flex-wrap lg:text-4xl'>
                              <h1 className=' text-sm sm:text-xl md:text-2xl lg:text-6xl  pt-10 '>Solar Panels</h1>
                
                                <p className=' text-sm sm:text-xl md:text-2xl lg:text-3xl  opacity-100 pt-1'>Schedule a Virtual Consulation</p>
                                <div className='h-0.5 mt-0.5 w-auto bg-white rounded-xl'></div>
                                {/* <p className=' text-sm sm:text-xl md:text-2xl lg:text-2xl  opacity-100 pt-2'>Lease Starting at $349/mo </p> */}
                                <div>
                        
                    </div>
                    </div>
                   
                </div>
                    <div className='absolute inset-0 flex justify-center gap-5 items-end pb-2 sm:pb-10 md:pb-16 lg:pb-16 '>
                        <button className='h-8 w-32 sm:w-44 md:w-52 lg:w-52 bg-blue-700 text-white rounded-lg font-bold'>Order Now</button>
                        <button className='h-8 w-32 sm:w-44 md:w-52 lg:w-52 bg-white text-gray-500 rounded-lg font-bold'>Demo Drive</button>
                        </div>
                 
            </div>
            <div className='relative h-auto w-auto lg:w-[700px] pt-5 px-5 rounded-lg'>
                <Image className='h-auto w-full lg:h-screen rounded-lg' src={solaroof} alt="" />
                <div className='absolute inset-0 flex justify-center  text-white font-bold'>
                    <div className='text-white text-center lg:pt-16  rounded-lg  flex-wrap lg:text-4xl'>
                              <h1 className=' text-xl sm:text-xl md:text-2xl lg:text-6xl  pt-10 '>Model Y</h1>
                
                                <p className=' text-sm text-gray-400 sm:text-xl md:text-2xl lg:text-2xl pt-1'>Produce Clean Energy From Your Roof</p>
                                <div className='h-0.5 mt-0.5 w-auto bg-white rounded-xl'></div>
                                {/* <p className=' text-sm sm:text-xl md:text-2xl lg:text-2xl  opacity-100 pt-2'>Lease Starting at $349/mo </p> */}
                                <div>
                        
                    </div>
                    </div>
                   
                </div>
                    <div className='absolute inset-0 flex justify-center gap-5 items-end pb-2 sm:pb-10 md:pb-16 lg:pb-16 '>
                        <button className='h-8 w-32 sm:w-44 md:w-52 lg:w-52 bg-blue-700 text-white rounded-lg font-bold'>Order Now</button>
                        <button className='h-8 w-32 sm:w-44 md:w-52 lg:w-52 bg-white text-gray-500 rounded-lg font-bold'>Demo Drive</button>
                        </div>
                 
            </div>
        </div>
        {/* Power Wall  */}
        <div className='relative h-auto w-auto pt-5 px-5 rounded-lg'>
                <Image className='h-screen w-full rounded-lg' src={power} alt="" />
                <div className='absolute inset-0 flex justify-center pt-10  text-white font-bold'>
                    <div className='text-white text-center lg:pt-16  rounded-lg  flex-wrap lg:text-4xl'>
                              <h1 className=' text-xl sm:text-xl md:text-2xl lg:text-6xl  pt-5 '>Powerwall</h1>
                                <div>
                    </div>
                    </div>
                   
                </div>
                    <div className='absolute inset-0 flex justify-center gap-5 items-end pb-2 sm:pb-10 md:pb-16 lg:pb-16 '>
                        <button className='h-8 w-32 sm:w-44 md:w-52 lg:w-72 bg-blue-700 text-white rounded-lg font-bold'>Order Now</button>
                        <button className='h-8 w-32 sm:w-44 md:w-52 lg:w-72 bg-white text-gray-500 rounded-lg font-bold'>Demo Drive</button>
                        </div>
                 
            </div>
            {/* Accessories */}
            <div className='relative h-auto w-auto  pt-5 px-5 rounded-lg'>
                <Image className='h-auto lg:h-screen w-full rounded-lg' src={ass} alt="" />
                <div className='absolute inset-0 flex justify-center  text-white font-bold'>
                    <div className='text-white text-center lg:pt-8  rounded-lg  flex-wrap lg:text-4xl'>
                              <h1 className=' text-xl sm:text-2xl md:text-3xl lg:text-6xl  pt-10 '>Accessories</h1>
                                <div>
                        
                    </div>
                    </div>
                   
                </div>
                    <div className='absolute inset-0 flex justify-center gap-5 items-end pb-2 sm:pb-10 md:pb-16 lg:pb-16 '>
                        <button className='h-8 w-64 md:w-52 lg:w-64 bg-blue-700 text-white rounded-lg font-bold'>Shop Now</button>
                        </div>
                 
            </div>

        </div>
    );
}

export default Page;
