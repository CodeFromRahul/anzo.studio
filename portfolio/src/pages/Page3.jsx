import React from 'react'

const Page3 = () => {
  return (
    <div className=' h-screen  relative flex items-center justify-center bg-white'>
    <img className='absolute z-20 h-[53vh] w-[50vw]' src='https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_2031,h_1168,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png'></img>
        <video  autoPlay loop muted className='border-white z-10  h-[40vh] w-[50vw]' src='https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/720p/mp4/file.mp4'></video>
        {/* <div className='h-1 w-2/3 top-[30%] absolute z-0 bg-black'></div>
        <div className='h-1 w-3/5 top-[60%] absolute z-0 bg-black'></div>
        <div className='h-1 w-4/5 top-[80%] absolute z-0 bg-black'></div> */}

    </div>
  )
}

export default Page3