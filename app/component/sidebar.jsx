import React from 'react';
import Image from 'next/image';
import {Envelope, Linkedin} from  './icons/'


const Sidebar = ({ data}) => {
    const {name, role, education, contactLinks} = data;
    return (
        <div className='bg-black flex flex-col h-screen w-full content-between sm:justify-around sm:w-1/3 sm:fixed'>sidebar
            <div className='text-white flex flex-col p-10 items-senter'>
                <Image
                    priority
					width={300}
					height={300}
                    className='rounded-full  mb-6'
                    src='/images/PhotoToProj.jpg'
                    alt='Olena Nesteruk photo'
                aria-label=''/>
                <h1>{name}</h1>
                <h2>{role}</h2>
                <p>{education}</p>
            
            <div>
                <h3>CONTACT ME</h3>
                <a href={contactLinks?.[0]} aria-label={'email link'}>
                    <Envelope/>
                </a>
                <a href={contactLinks?.[2]} aria-label={'linkedin link'}>
                    <Linkedin/>
                </a>
                {/* <a href={contactLinks?.[3]} aria-label={'github link'}>
                    <Github/>
                </a> */}
            </div></div>
        </div>
    )
}

export default Sidebar