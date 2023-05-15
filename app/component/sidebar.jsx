import React from 'react';
import Image from 'next/image';


const Sidebar = ({ data}) => {
    const {name, role, education} = data;
    return (
        <div>sidebar
            <Image />
            <h1>{name}</h1>
            <h2>{role}</h2>
            <p>{education}</p>
            <div>
                <h3>Contact me</h3>
                <a href=''></a>
            </div>
        </div>
    )
}

export default Sidebar