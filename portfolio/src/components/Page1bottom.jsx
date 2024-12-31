import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Page1bottom = () => {
   useGSAP(function(){
    gsap.to('#banner img ',{
      rotate:360,
      duration:5,
      repeat:-1,
      ease:'linear'
    })
   })
  return (
    <div className='absolute left-0 p-24 flex items-end justify-between bottom-0 w-full '>
        <div className='pl-12'>
            <h2 className='font-[anzo3] text-2xl'>BRAND DESIGN | WEBSITE DESIGN</h2>
            <h3 className='text-gray-500 font-[anzo4] text-xl'>BESPOKE FREELANCE</h3>
        </div>
        <div id='banner' >
            <img  className='h-36 mt-6   mb-5 ' src='https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_232,h_232,al_c,lg_1,q_85,enc_avif,quality_auto/cssda-wotd-white.png'></img>
            <img  className='h-36 ' src='https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_232,h_232,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png'></img>
        </div>
    </div>
  )
}

export default Page1bottom