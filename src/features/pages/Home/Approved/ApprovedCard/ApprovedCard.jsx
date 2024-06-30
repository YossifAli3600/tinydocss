import React from 'react'
import './ApprovedCard.css'
export const ApprovedCard = ({ text, name, image, role, carton }) => {
    return (
        <div className='bg-[#FFE0E4] relative pt-11 rounded-2xl overflow-hidden'>
            <div className='px-11'>
                <svg width="52" height="68" viewBox="0 0 72 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M26.7746 37.8657V67.0684H0V44.0137C0 31.5315 1.47977 22.4959 4.43931 16.9068C8.3237 9.45479 14.474 3.81918 22.8902 0L28.9942 9.78081C23.9075 11.9233 20.1618 15.137 17.7572 19.4219C15.3526 23.6137 14.0116 29.7616 13.7341 37.8657H26.7746ZM69.7803 37.8657V67.0684H43.0058V44.0137C43.0058 31.5315 44.4855 22.4959 47.4451 16.9068C51.3295 9.45479 57.4798 3.81918 65.896 0L72 9.78081C66.9133 11.9233 63.1676 15.137 60.763 19.4219C58.3584 23.6137 57.0173 29.7616 56.7399 37.8657H69.7803Z" fill="#E46E7E" />
                </svg>
                <p className='my-8 pb-11 m-auto'>
                    {text}
                </p>
            </div>
            <img className='w-[80px] h-[100px] absolute bottom-12 z-[1] -right-6 -rotate-[30deg] opacity-50' src={carton} alt="carton" />
            <div className='approvedCardBottom w-full relative z-40'>
                <div className='flex items-center gap-5 px-5 py-3'>
                    <div><img className='w-[50px] h-[50px] rounded-full' src={image} alt="personImg" /></div>
                    <div className='text-white'>
                        <h3 className='text-xl font-bold'>{name}</h3>
                        <span>{role}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
