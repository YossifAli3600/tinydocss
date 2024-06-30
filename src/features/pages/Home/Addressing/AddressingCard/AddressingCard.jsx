import React from 'react'
import './AddressingCard.css'
export const AddressingCard = ({ image, title, subTitle }) => {
    return (
        <div className='text-center text-white px-5'>
            <div className='w-[100px] m-auto -translate-y-12'>
                <img src={image} alt="Cardimage" />
            </div>
            <div className='pb-20'>
                <h3 className='text-2xl font-semibold mb-3'>{title}</h3>
                <p>
                    {subTitle}
                </p>
            </div>
        </div>
    )
}
