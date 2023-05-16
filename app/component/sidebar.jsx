import React from 'react';
import Image from 'next/image';
import {Envelope, Linkedin} from  './icons/'


const Sidebar = ({ data}) => {
    const {name, role, education, contactLinks} = data;
    return (
        <div>sidebar
            <Image />
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
            </div>
        </div>
    )
}

export default Sidebar