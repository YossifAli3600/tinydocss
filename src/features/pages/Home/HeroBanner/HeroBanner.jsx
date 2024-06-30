import React from 'react'
import './HeroBanner.css'
import { Link } from 'react-router-dom'
import { FaPlayCircle } from "react-icons/fa";
import heroIllustration from '../../../../assets/images/heroIllustration.png'
import heroLogo1 from '../../../../assets/images/heroLogo1.png'
import heroLogo2 from '../../../../assets/images/heroLogo2.png'
import heroLogo3 from '../../../../assets/images/heroLogo3.png'
import heroLogo4 from '../../../../assets/images/heroLogo4.png'
export const HeroBanner = () => {
    return (
        <div className='heroBg relative'>
            <div className="overlay w-full h-full">
                <div className='text-white -translate-y-11 z-10'>
                    <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold capitalize text-center'>Happier <span className='text-[#6AC7C0]'>learning,</span> happier <span className='text-[#FD6683]'>health.</span></h2>
                    <p className='text-center mt-5 max-w-[60%] m-auto'>An interactive children's health platform that nurture's better health and wellness for the next generation.</p>
                    <p className='text-center mt-2'>Join us for just: <span className='text-[#FFD64E]'>$4.99/month. Cancel anytime.</span></p>
                    <div className='flex items-center justify-center mt-4 gap-3 font-bold z-30'>
                        <Link className="bg-[#FFD64E] text-[#003B76] rounded-md px-5 py-2 z-10">Start Free Trial</Link>
                        <Link className="bg-[#FD6683] rounded-md px-5 py-2  flex items-center gap-2 z-10"> <span><FaPlayCircle /></span> Watch Demo</Link>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 -left-6 hidden md:flex items-center justify-center z-0'>
                <div className='w-[40%]'>
                    <img src={heroIllustration} alt="heroIllustration" className='w-full' />
                </div>
            </div>
            <div className='w-full h-[100px] -translate-y-[100px] relative hidden md:grid grid-cols-12'>

                <div className='bg-white w-full col-span-5 relative h-full'>
                    <div className="logos grid grid-cols-3 px-8 justify-center items-center h-full">
                        <img src={heroLogo1} alt="heroLogo1" className='px-5 w-full' />
                        <img src={heroLogo2} alt="heroLogo2" className='px-5 w-full' />
                        <img src={heroLogo3} alt="heroLogo3" className='px-5 w-full' />
                    </div>
                    <div className='bottomLeftCorner'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"><path fill="#fff" d="M0 0v40C0 17.909 17.909 0 40 0H0Z"></path></svg>
                    </div>
                </div>

                <div className='w-full col-span-2 centerDiv'>

                    <svg className='w-[101%] h-full' preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="-24.011 -6.14856 48.06 15.16">
                        <path d="M -24 9.014 L -24.011 -6.039 C -19.762 -6.323 -17.122 -4.985 -15.534 -3.844 C -12.832 -1.846 -12.957 0.473 -9.147 3.336 C -3.929 7.234 3.687 7.35 8.959 3.176 C 12.651 0.455 12.098 -1.748 15.933 -4.281 C 16.816 -4.852 18.618 -6.315 24.049 -6.133 L 24 9" fill="#fff" />
                    </svg>
                </div>

                <div className='bg-white w-full col-span-5'>
                    <div className='bg-white w-full col-span-5 relative h-full'>
                        <div className="logos grid grid-cols-3 px-8 justify-center items-center h-full">
                            <div>
                                <img src={heroLogo4} alt="heroLogo4" className='px-5 w-[50%] m-auto' />
                            </div>
                            <img src={heroLogo1} alt="heroLogo1" className='px-5 w-full' />
                            <img src={heroLogo2} alt="heroLogo2" className='px-5 w-full' />
                        </div>
                    </div>
                    <div className='bottomRightCorner'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"><path fill="#fff" d="M0 0v40C0 17.909 17.909 0 40 0H0Z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
