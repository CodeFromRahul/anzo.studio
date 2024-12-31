import React from 'react'

const TiltText = (props) => {
  return (
    <div ref={props.abc} id='page1-in' className='  mt-28'>
    <h1 className='text-[4.2vw] leading-[4vw] uppercase text-8xl font-[anzo3]'>I am <span className='text-black'>DARK MODE<span className='text-white'>™</span></span></h1>
    <h1 className='text-[8vw] leading-[7vw] font-[anzo1]'>DESIGNER</h1>
    <h1 className='text-[4.2vw] uppercase leading-[7vw] font-[anzo7]'>To Hire</h1>
</div>
  )
}

export default TiltText