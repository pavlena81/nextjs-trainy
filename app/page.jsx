import Image from 'next/image';
import React from 'react';
import AboutMe from './component/about-me';
import { aboutMe } from './data/page-data';

export default function Home() {
  return (
    <div className='bg-green'>
      {/* <Image 
        src='/vercel.svg'
        alt='Vercel Logo'
        className='darc:invert'
        width={100}
        height={100} /> */}
      <AboutMe data={aboutMe} />
    </div>
  )
}
