import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import yy from "../Assests/yy.jpg"
import model3 from "../Assests/model3.jpg"
import models from "../Assests/models.jpg"
import modelx from "../Assests/modelx.jpg"
import saiber from "../Assests/saiber.jpg"

const ModelY = () => {
    return (
        <div className='mt-28'>
            {/* Model y */}
            <div className='relative h-auto w-auto pt-5 px-5 rounded-sm'>
                <Image className='h-auto w-full rounded-lg' src={yy} alt="" />
                <div className='absolute inset-0 flex justify-center  text-white font-bold'>
                    <div className='text-white text-center lg:pt-16  rounded-lg  flex-wrap lg:text-4xl'>
                              <h1 className=' text-sm sm:text-xl md:text-2xl lg:text-6xl  pt-5 '>Model Y</h1>
                
                                <p className=' text-sm sm:text-xl md:text-2xl lg:text-3xl  opacity-100 pt-1'>% APR With Purchase of FSD (Supervised)</p>
                                <div className='h-0.5 mt-0.5 w-auto bg-white rounded-xl'></div>
                                <p className=' text-sm sm:text-xl md:text-2xl lg:text-2xl  opacity-100 pt-2'>Lease Starting at $349/mo </p>
                                <div>
                        
                    </div>
                    </div>
                   
                </div>
                    <div className='absolute inset-0 flex justify-center gap-5 items-end pb-2 sm:pb-10 md:pb-16 lg:pb-32 '>
                        <button className='h-8 w-32 sm:w-44 md:w-52 lg:w-72 bg-blue-700 text-white rounded-lg font-bold'>Order Now</button>
                        <button className='h-8 w-32 sm:w-44 md:w-52 lg:w-72 bg-white text-gray-500 rounded-lg font-bold'>Demo Drive</button>
                        </div>
                 
            </div>
            {/* Model 3 */}
            <div>
            <div className='relative h-auto w-auto pt-5 px-5 rounded-lg'>
                <Image className='h-auto w-full rounded-lg' src={model3} alt="" />
                <div className='absolute inset-0 flex justify-center  text-white font-bold'>
                    <div className='text-gray-500 text-center lg:pt-8  rounded-lg  flex-wrap lg:text-4xl'>
                              <h1 className=' text-sm sm:text-xl md:text-2xl lg:text-6xl  pt-5 '>Model 3</h1>
                
                                <p className=' text-xs sm:text-xl md:text-2xl lg:text-3xl  opacity-100 '>% APR With Purchase of FSD (Supervised)</p>
                                <div className='h-0.5 mt-0.5 w-auto bg-white rounded-xl'></div>
                                <p className=' text-sm sm:text-xl md:text-2xl lg:text-2xl  opacity-100 pt-2'>Lease Starting at $299/mo </p>
                                <div>
                        
                    </div>
                    </div>
                   
                </div>
                    <div className='absolute inset-0 flex justify-center gap-5 items-end pb-1 sm:pb-10 md:pb-16 lg:pb-16 '>
                        <button className='h-8 w-32 font-thin sm:w-44 md:w-52 lg:w-72 bg-blue-700 text-white rounded-lg lg:font-bold'>Order Now</button>
                        <button className='h-8 w-32 font-thin sm:w-44 md:w-52 lg:w-72 bg-white text-gray-500 rounded-lg lg:font-bold'>Demo Drive</button>
                        </div>
                 
            </div>
        </div>
        {/* Model X */}
        <div>
            <div className='relative h-auto w-auto pt-5 px-5 rounded-lg'>
                <Image className='h-auto w-full rounded-lg' src={modelx} alt="" />
                <div className='absolute inset-0 flex justify-center  text-white font-bold'>
                    <div className='text-white text-center lg:pt-8  rounded-lg  flex-wrap lg:text-4xl '>
                              <h1 className=' text-sm sm:text-xl md:text-2xl lg:text-6xl  pt-5 '>Model X</h1>
                              <p className=' text-xs sm:text-xl lg:text-3xl '> From $65,990 </p>

                                <p className=' text-xs sm:text-xl  '>After Federal Tax credit $7,500 </p>
                                <div className='h-0.5 mt-0.5 w-auto bg-white rounded-xl'></div>
                                <p className=' text-sm sm:text-xl  '>And Est. Gas Savings $6,500 </p>
                                <div className='h-0.5 mt-0.5 w-auto bg-white rounded-xl'></div>
                                <div>
                        
                    </div>
                    </div>
                   
                </div>
                    <div className='absolute inset-0 flex justify-center gap-5 items-end pb-1 sm:pb-10 md:pb-16 lg:pb-24 '>
                        <button className='h-8 w-32 font-thin sm:w-44 md:w-52 lg:w-72 bg-blue-700 text-white rounded-lg lg:font-bold'>Order Now</button>
                        <button className='h-8 w-32 font-thin sm:w-44 md:w-52 lg:w-72 bg-white text-gray-500 rounded-lg lg:font-bold'>Demo Drive</button>
                        </div>
                 
            </div>
        </div>
        {/* Model S */}
        <div className='relative h-auto w-auto pt-5 px-5 rounded-lg'>
                <Image className='h-auto w-full rounded-lg' src={models} alt="" />
                <div className='absolute inset-0 flex justify-center  text-white font-bold'>
                    <div className='text-gray-700 text-center lg:pt-16  rounded-lg  flex-wrap lg:text-4xl'>
                              <h1 className=' text-sm sm:text-xl md:text-2xl lg:text-6xl  pt-5 '>Model S</h1>
                
                                <p className=' text-sm sm:text-xl md:text-2xl lg:text-3xl  opacity-100 pt-1'>From $68,490</p>
                                <p className='text-white bg-black rounded-sm opacity-60  text-sm sm:text-xl  '>And Est. Gas Savings $6,500 </p>

                                <div className='h-0.5 mt-0.5 w-auto bg-white rounded-xl'></div>
                                <div>
                        
                    </div>
                    </div>
                   
                </div>
                    <div className='absolute inset-0 flex justify-center gap-5 items-end pb-2 sm:pb-10 md:pb-16 lg:pb-32 '>
                        <button className='h-8 w-32 sm:w-44 md:w-52 lg:w-72 bg-blue-700 text-white rounded-lg font-bold'>Order Now</button>
                        <button className='h-8 w-32 sm:w-44 md:w-52 lg:w-72 bg-white text-gray-500 rounded-lg font-bold'>Demo Drive</button>
                        </div>
                 
            </div>
           {/* saiber track */}
           <div className='relative h-auto w-auto pt-5 px-5 rounded-lg'>
                <Image className='h-auto w-full rounded-lg' src={saiber} alt="" />
                <div className='absolute inset-0 flex justify-center  text-white font-bold'>
                    <div className='text-white text-center lg:pt-16  rounded-lg  flex-wrap lg:text-4xl'>
                              <h1 className=' text-sm sm:text-xl md:text-2xl lg:text-6xl  pt-5 '>Cyber Truck</h1>
                
                                <p className=' text-sm outline-none sm:text-xl md:text-2xl lg:text-3xl  opacity-100 pt-1'>FOUNDATION</p>
                                <div className='h-0.5 mt-0.5 w-auto bg-white rounded-xl'></div>
                                <p className=' text-sm sm:text-xl md:text-2xl lg:text-2xl  opacity-100 pt-2'>SERIES </p>

                                <div>
                        
                    </div>
                    </div>
                   
                </div>
                    <div className='absolute inset-0 flex justify-center gap-5 items-end pb-2 sm:pb-10 md:pb-16 lg:pb-32 '>
                        <button className='h-8  md:h-10 lg:h-12  w-32 sm:w-44 md:w-52 lg:w-72 bg-gray-900 text-white rounded-lg font-bold'>Order Now</button>
                        <button className='h-8  md:h-10 lg:h-12 w-32 sm:w-44 md:w-52 lg:w-72  bg-gray-900 text-gray-500 rounded-lg font-bold'>Demo Drive</button>
                        </div>
                 
            </div>
        </div>
    );
}

export default ModelY;
