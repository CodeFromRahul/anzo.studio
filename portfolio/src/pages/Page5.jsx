import React from 'react'

const Page5 = () => {
  return (
    <div className='h-screen p-10 relative bg-white '>
        <div className='h-full  w-full overflow-hidden bg-black rounded-[50px]'>
            <video autoPlay='true' className='h-full rounded-[100px] w-full object-cover' muted loop src='https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/1080p/mp4/file.mp4'></video>
            <h1 className='absolute -bottom-20 font-[anzo6] left-40  uppercase text-[30vw] text-white'>ABOUT</h1>
        </div>
    </div>
  )
}

export default Page5