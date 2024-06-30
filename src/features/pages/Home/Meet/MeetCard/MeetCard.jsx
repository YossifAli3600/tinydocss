import React from 'react';
import './MeetCard.css'
import Eat from '../../../../../assets/images/Eat.png';
import Like from '../../../../../assets/images/Like.png';
import Color from '../../../../../assets/images/Color.png';
export const MeetCard = ({ image, name, className }) => {
    return (
        <div className='meetCard z-10 hover:shadow-lg w-full'>
            <div className={`cardColor ${className ? className : ""}`}>
                <div className='meetCardImg'><img src={image} alt="image" className=' object-cover' /></div>
                <h3 className='text-center text-2xl font-bold pb-5 cardTitle'>{name}</h3>
                <div className='flex flex-col gap-3 bg-white  mb-5 meetCardInfo px-2 rounded-lg'>
                    <h3 className='text-center text-2xl font-bold'>{name}</h3>
                    <div className='flex items-center gap-5'>
                        <img className='w-[35px] h-[35px]' src={Eat} alt="Eat" />
                        <span>Apples</span>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img className='w-[35px] h-[35px]' src={Like} alt="Like" />
                        <span>Gymnastics, Rock, Climbing, Geocaching</span>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img className='w-[35px] h-[35px]' src={Color} alt="Color" />
                        <span>Yellow</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
