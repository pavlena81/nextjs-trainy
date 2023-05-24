import React from 'react';
import Image from 'next/image';
import {Envelope, Linkedin} from  './icons/'


const Sidebar = ({ data}) => {
    const {name, role, education, contactLinks} = data;
    return (
        <div className='bg-black flex flex-col h-screen w-full content-between sm:justify-around sm:w-1/3 sm:fixed'>
            <div className='text-white text-center flex flex-col p-10 items-center'>
                <Image
                    priority
					width={300}
					height={300}
                    className='rounded-full h-full mb-6'
                    src='/images/PhotoToProj.jpg'
                    alt='Picture of the author'
                    aria-label='Picture of the author'/>
                <h1 className='text-yellow text-4xl sm: text-6xl mb-2'>{name}</h1>
                <h2 className='text-2xl mb-8'>{role}</h2>
                <p className='mb-8'>{education[0]}</p>
                <p className='mb-2'>{education[1]}</p>
            
            <div className='text-white text-center mb-4 mt-4 sm:mt-8'>
                <h3 className='mb-2'>CONTACT ME</h3>
                <div className='flex flex-row justify-center gap-2'>
                        <a
                            className='icons-contactme'
                            href={contactLinks?.[0]} aria-label={'email link'}>
                    <Envelope/>
                </a>
                        <a
                            className='icons-contactme'
                            href={contactLinks?.[2]} aria-label={'linkedin link'}>
                    <Linkedin/>
                </a>
                {/* <a href={contactLinks?.[3]} aria-label={'github link'}>
                    <Github/>
                </a> */}
                </div>
            </div></div>
        </div>
    )
}

export default Sidebar