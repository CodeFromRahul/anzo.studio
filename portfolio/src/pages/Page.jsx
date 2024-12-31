import React, { useState } from 'react'
import { useRef } from 'react'
import Page1bottom from '../components/Page1bottom'
import TiltText from '../components/TiltText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {

  const titlRef = useRef(null)
  const [xval, setXval] = useState(0)
  const [yval, setYval] = useState(0)


  
    
  const mouseMoving=(e)=>{
    setXval((e.clientX-titlRef.current.getBoundingClientRect().x-titlRef.current.getBoundingClientRect().width/2)/70)
    setYval(-(e.clientY-titlRef.current.getBoundingClientRect().y-titlRef.current.getBoundingClientRect().height/2)/20)

    titlRef.current.style.transform=`rotateX(${yval}deg) rotateY(${xval}deg)`
    
  }

  useGSAP(function(){
    gsap.to(titlRef.current,{
    transform:`rotateX(${yval}deg) rotateY(${xval}deg)`,
    duration:5,
    ease:'elastic.out(1,0.3)'
    

})
  },[xval,yval])
  return (
    <div onMouseMove={(e)=>{
      mouseMoving(e)
    }} className='h-screen relative p-5 flex items-center justify-center bg-white'>
         <div id='page1' className='shadow-xl relative p-28 object-contain shadow-gray-700 h-full w-full rounded-3xl  bg-cover bg-black bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_3987,h_2142,fp_0.69_0.64,q_90,enc_avif,quality_auto/ANZO.jpg)]'>
         <img className='h-32  ml-6  ' src='https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_226,h_226,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png'></img>
         <TiltText  abc={titlRef}/>
        
         <Page1bottom/>
    </div>
    </div>
  ) 
}

export default Page1