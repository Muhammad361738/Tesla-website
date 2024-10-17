import React from 'react';
import home from "../Assests/home.jpg"
import Image from 'next/image';
import Link from 'next/link';

import logo1 from "../Assests/logo1.jpg"
import logo2 from "../Assests/logo2.jpg"
import logo3 from "../Assests/logo3.jpg"
import last1 from "../Assests/last1.jpg"
import last22 from "../Assests/last22.jpg"
import last3 from "../Assests/last3.jpg"

const Page = () => {
    return (
      <div className='relative h-screen w-auto'>
        
    <div className="h-screen w-auto ">
      {/* Use next/image for better performance */}
          <Image 
        src={home} 
        alt="Background Image" 
        // layout="fill" 
        // objectFit="cover" 
        // quality={100}
        // className="absolute inset-0 z-[-1] w-ful" 
      />
      <div className="absolute inset-0   flex justify-center items-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">Overlay Content</h1>
          <p className="mt-4">This text is on top of the background image.</p>
        </div>
      </div>
      </div>
      </div>
    
  );
}

        
  

export default Page;
