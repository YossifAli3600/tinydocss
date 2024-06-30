import React from 'react'
import { Link } from 'react-router-dom'
import childPhoto from '../../../../assets/images/childPhoto.png';
import card1 from '../../../../assets/images/card1.gif';
import card2 from '../../../../assets/images/card2.gif';
import card3 from '../../../../assets/images/card3.gif';
import './Health.css'
export const Health = () => {
    return (
        <div className='HealthSection'>
            <div className="overlay px-11">
                <div className='grid grid-cols-1 md:grid-cols-2 my-20 items-center'>
                    <div>
                        <h3 className=' text-2xl md:text-3xl lg:text-5xl text-white capitalize font-bold mb-5'>Easing child <span className='text-[#6AC7C0]'>health anxiety</span>  through <span className=' text-[#FD6683]'>storytelling</span></h3>
                        <p className='text-white my-8 text-[18px]'>At Tiny Docs, we make interactive online content that simplifies science, nurtures healthy habits, and empowers younger generations. With our cast of inclusive characters, Tiny Docs alleviates the anxiety surrounding pediatric health challenges by speaking a language that kids can understand.</p>
                        <Link className="YellowBtn px-5 py-2 rounded-lg">Get Started</Link>
                    </div>
                    <div>
                        <img src={childPhoto} alt="childPhoto" className='w-full mt-8 md:mt-0' />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mb-16 gap-11'>

                    <div className='text-white'>
                        <h3 className='text-2xl font-bold'>Interactive and Engaging Content</h3>
                        <p className='my-4'>Educational health is important, and it shouldn’t end when you leave the doctor’s office. That’s why Tiny Docs uses animated characters, interactive features, blogs, games, and other engaging tools to make complex health topics accessible and fun for children.</p>
                        <img src={card1} alt="card1Image" className='rounded-xl' />
                    </div>

                    <div className='text-white'>
                        <h3 className='text-2xl font-bold'>Inclusive and Universal Design</h3>
                        <p className='my-4'>The content is carefully crafted to cater to both children and adults from diverse backgrounds. This inclusivity ensures that the educational material is understandable by a wide audience, regardless of their prior knowledge or experience with health topics.</p>
                        <img src={card2} alt="card1Image" className='rounded-xl' />
                    </div>

                    <div className='text-white'>
                        <h3 className='text-2xl font-bold'>Expertly Reviewed Material</h3>
                        <p className='my-4'>Educational health is important, and it shouldn’t end when you leave the doctor’s office. That’s why Tiny Docs uses animated characters, interactive features, blogs, games, and other engaging tools to make complex health topics accessible and fun for children.</p>
                        <img src={card3} alt="card1Image" className='rounded-xl' />
                    </div>

                </div>
            </div>
        </div>
    )
}
