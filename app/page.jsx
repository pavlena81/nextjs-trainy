import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-green'>page
      <Image 
        src='/vercel.svg'
        alt='Vercel Logo'
        className='darc:invert'
      width={100}
      height={100}/>
    </div>
  )
}
