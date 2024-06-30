import React from 'react'
import card1 from '../../../../assets/images/image1.png';
import card2 from '../../../../assets/images/image2.png';
import card3 from '../../../../assets/images/image3.png';
import card4 from '../../../../assets/images/image4.png';
import './Addressing.css'
import { AddressingCard } from './AddressingCard/AddressingCard';
import { Link } from 'react-router-dom';
export const Addressing = () => {
    return (
        <div className='AddressingSection'>
            <div className="overlay p-11">
                <div>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-11 mb-5 text-[#003B76] capitalize text-center max-w-[65%] m-auto'>Addressing kids’ health from every angle</h3>
                    <p className='text-[#003B76] text-center max-w-[75%] m-auto my-5'>Children deserve to understand what is happening with their bodies. Here are some of the many topics our growing library covers.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 my-16 gap-11 bg-[#47887F] w-[95%] m-auto rounded-3xl rotate-1'>
                    <AddressingCard image={card1} title={"Mental Health"} subTitle={"Learn about the importance of mental health and how it can influence your emotional and physical shape."} />
                    <AddressingCard image={card2} title={"Surgeries"} subTitle={"We cover many different types of surgeries and show how they can correct, treat, or alleviate various conditions."} />
                    <AddressingCard image={card3} title={"Chronic Diseases"} subTitle={"We talk about chronic diseases, which are healthcare conditions that occur over a long period of time. They require ongoing management and can impact a person’s quality of life."} />
                    <AddressingCard image={card4} title={"General Wellness"} subTitle={"Our general wellness education includes how individual aspects of can affect overall health. This includes nutrition, fitness, and mental health."} />
                </div>
                <Link className='YellowBtn px-5 py-2 rounded-lg'>Get Started</Link>
            </div>
        </div>
    )
}
