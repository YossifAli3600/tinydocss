import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.png';
import footer1 from '../../assets/images/footer1.png';
import footer2 from '../../assets/images/footer2.png';
import footer3 from '../../assets/images/footer3.png';
import footer4 from '../../assets/images/footer4.png';
import footer5 from '../../assets/images/footer5.png';
import { Link } from 'react-router-dom';
export const Footer = () => {
    return (
        <div className='footer bg-[#003B76] mt-11 overflow-hidden relative'>
            <div className='absolute w-full h-full opacity-10'>
                <img src={footer1} alt="footer1 animation" />
            </div>
            <div className='absolute top-0 left-0'>
                <img src={footer2} alt="footer2 animation" />
            </div>
            <div className='absolute top-0 left-0'>
                <img src={footer3} alt="footer3 animation" />
            </div>
            <div className='absolute top-0 left-0 w-[100px]'>
                <img src={footer5} alt="footer3 animation" />
            </div>
            <div className='absolute bottom-0 right-0 w-[100px]'>
                <img src={footer4} alt="footer3 animation" />
            </div>
            <div className="custom_container z-40 relative">
                <img src={logo} alt="logo" className='w-[215px] m-auto pt-6' />
                <div className='m-auto text-center text-white my-5'>
                    <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold my-5'>Want a free kids activity book?</h3>
                    <span>Enter your email below.</span>
                    <div className='relative md:w-[600px] m-auto my-5'>
                        <input type="text" placeholder='Email Address' className='w-full h-[60px] bg-white/80 rounded-xl indent-5 placeholder:text-black' />
                        <button className='YellowBtn px-10 py-2 rounded-lg absolute top-[50%] translate-y-[-50%] right-11'>Submit</button>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-20 text-white mt-11'>
                    <Link>Our Story</Link>
                    <Link>Contact Us</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Terms and Condititons</Link>
                </div>
            </div>
            <div className='my-5 border-t'>
                <div className='custom_container flex items-center justify-between p-8 text-white z-40 relative'>
                    <span>© Tiny Docs 2023 All Copyright Reserved</span>
                    <div className='flex items-center gap-3 footerIcons'>
                        <svg width="40" height="36" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="56" height="56" rx="10" fill="white" />
                            <path d="M28 44.5C37.1127 44.5 44.5 37.1127 44.5 28C44.5 18.8873 37.1127 11.5 28 11.5C18.8873 11.5 11.5 18.8873 11.5 28C11.5 37.1127 18.8873 44.5 28 44.5Z" stroke="#00A4D5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M34.875 21.125H32.125C31.5827 21.1228 31.0453 21.2279 30.5438 21.4344C30.0423 21.6409 29.5866 21.9447 29.2032 22.3282C28.8197 22.7116 28.5159 23.1673 28.3094 23.6688C28.1029 24.1703 27.9978 24.7077 28 25.25V44.5" stroke="#00A4D5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22.5 30.75H33.5" stroke="#00A4D5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg width="40" height="36" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="56" height="56" rx="10" fill="white" />
                            <path d="M28 33.8438C31.2274 33.8438 33.8438 31.2274 33.8438 28C33.8438 24.7726 31.2274 22.1562 28 22.1562C24.7726 22.1562 22.1562 24.7726 22.1562 28C22.1562 31.2274 24.7726 33.8438 28 33.8438Z" stroke="#00A4D5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M36.25 11.5H19.75C15.1937 11.5 11.5 15.1937 11.5 19.75V36.25C11.5 40.8063 15.1937 44.5 19.75 44.5H36.25C40.8063 44.5 44.5 40.8063 44.5 36.25V19.75C44.5 15.1937 40.8063 11.5 36.25 11.5Z" stroke="#00A4D5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M36.9375 21.8125C38.4563 21.8125 39.6875 20.5813 39.6875 19.0625C39.6875 17.5437 38.4563 16.3125 36.9375 16.3125C35.4187 16.3125 34.1875 17.5437 34.1875 19.0625C34.1875 20.5813 35.4187 21.8125 36.9375 21.8125Z" fill="#00A4D5" />
                        </svg>
                        <svg width="40" height="36" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="56" height="56" rx="10" fill="white" />
                            <path d="M28 21.1246C28 17.3434 31.1796 14.1981 34.9609 14.2496C36.2851 14.2649 37.5767 14.6624 38.6805 15.3941C39.7842 16.1259 40.6531 17.1609 41.1828 18.3746H47.25L41.6984 23.9262C41.3401 29.5028 38.8715 34.7337 34.7945 38.5553C30.7175 42.3769 25.3381 44.5024 19.75 44.4996C14.25 44.4996 12.875 42.4371 12.875 42.4371C12.875 42.4371 18.375 40.3746 21.125 36.2496C21.125 36.2496 10.125 30.7496 12.875 15.6246C12.875 15.6246 19.75 22.4996 28 23.8746V21.1246Z" stroke="#00A4D5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg width="40" height="36" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="56" height="56" rx="10" fill="white" />
                            <path d="M34.1875 28L24.5625 21.8125V34.1875L34.1875 28Z" stroke="#00A4D5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.125 27.9997C10.125 33.1216 10.6578 36.1122 11.0531 37.6591C11.1621 38.0788 11.3682 38.467 11.6549 38.7924C11.9415 39.1179 12.3005 39.3714 12.7031 39.5325C18.4609 41.7325 28 41.681 28 41.681C28 41.681 37.5391 41.7325 43.2969 39.5325C43.6995 39.3714 44.0585 39.1179 44.3451 38.7924C44.6318 38.467 44.8379 38.0788 44.9469 37.6591C45.3422 36.1122 45.875 33.1216 45.875 27.9997C45.875 22.8778 45.3422 19.8872 44.9469 18.3403C44.8379 17.9206 44.6318 17.5324 44.3451 17.207C44.0585 16.8816 43.6995 16.628 43.2969 16.4669C37.5391 14.2669 28 14.3185 28 14.3185C28 14.3185 18.4609 14.2669 12.7031 16.4669C12.3005 16.628 11.9415 16.8816 11.6549 17.207C11.3682 17.5324 11.1621 17.9206 11.0531 18.3403C10.6578 19.8872 10.125 22.8778 10.125 27.9997Z" stroke="#00A4D5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}
