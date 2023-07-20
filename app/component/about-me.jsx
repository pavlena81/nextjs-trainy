import React, {useId} from 'react';


const AboutMe = ({data}) => {
    const { title, body } = data;
    const id = useId();
    return (
        <div className='mb-10'>
        <h2 className='mb-8 uppercase'>{title}</h2>
            {body?.map((el, i) => (
                <p key={`${id}_${i}`} className='mb-6'>
                    {el}
                </p>
        ))}
            
    </div>
    )
}

export default AboutMe