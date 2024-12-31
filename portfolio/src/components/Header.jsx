import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='absolute flex items-center justify-end w-full py-28 px-20  z-10 '>
   <button className='bg-black  border-4 px-8 rounded-3xl  py-3 hover:bg-gray-500 ' >Hire Me</button>
   <i className="ri-more-2-fill text-4xl ml-3 "></i>
</div>
  )
}

export default Header