import React from 'react'
import spaceship from '../../../../assets/images/spaceship.png'
import meetPatches from '../../../../assets/images/meetPatches.gif'
import './Discover.css'
import YoutubeVideoPlayer from '../../../../components/YoutubeVideoPlayer/YoutubeVideoPlayer'
export const Discover = () => {
    return (
        <div className='my-11 relative overflow-hidden'>
            <span className='absolute rotate-180 translate-y-[50%] w-[350px] left-[-20px]'>
                <img src={spaceship} alt="spaceship" className='w-full grayscale opacity-55 spaceshipImg' />
            </span>
            <h2 className='text-2xl md:text-3xl lg:text-5xl max-w-[60%] m-auto capitalize font-bold text-center'><span className='text-[#6AC7C0]'>Ready to be</span> brave? <span className='text-[#003B76]'>Discover</span> our <span className='text-[#FD6683]'>animated library</span></h2>
            <div className='my-20'>
                <YoutubeVideoPlayer className={"md:rotate-2"} url={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} />
            </div>
            <div className='absolute meetPatches hidden md:block'>
                <img src={meetPatches} alt="meetPatchesImage" className='w-full' />
            </div>
        </div>
    )
}
