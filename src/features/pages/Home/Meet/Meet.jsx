import React from 'react';
import { Link } from 'react-router-dom';
import { MeetCard } from './MeetCard/MeetCard';
import './Meet.css';
import { Pagination } from 'swiper/modules';
import Tim from '../../../../assets/images/Tim.png';
import Tam from '../../../../assets/images/Tam.png';
import Tom from '../../../../assets/images/Tom.png';
import Scrubs from '../../../../assets/images/Scrubs.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const Meet = () => {
    return (
        <div className='px-11'>
            <div className='grid md:grid-cols-2 items-center gap-5'>
                <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold capitalize mt-8'>
                    Meet the <span className='text-[#FD6683]'>Tiny Docs</span>
                </h3>
                <div className='md:max-w-[65%] mx-auto'>
                    <p className='my-5'>
                        Say hello to your child’s new favorite characters! Dr. Patches, Tim, Tam, Tom, and Scrubs are ready to simplify any medical topic!
                    </p>
                    <Link to="/all-characters" className='YellowBtn px-8 py-2 rounded-md'>
                        View All
                    </Link>
                </div>
            </div>
            <Swiper
                modules={[Pagination]}
                className='rounded-2xl gap-24 md:gap-0 pt-20 pb-8 h-[500px]'
                slidesPerView={4}
                spaceBetween={0}
                pagination={{ clickable: true }}
                breakpoints={{
                    200: { slidesPerView: 1 },
                    768: { slidesPerView: 4 },
                }}
            >
                <SwiperSlide>
                    <MeetCard image={Tim} name="Tim" />
                </SwiperSlide>
                <SwiperSlide>
                    <MeetCard image={Tam} name="Tam" />
                </SwiperSlide>
                <SwiperSlide>
                    <MeetCard image={Tom} name="Tom" />
                </SwiperSlide>
                <SwiperSlide>
                    <MeetCard image={Scrubs} name="Scrubs" className={"rounded-r-2xl"} />
                </SwiperSlide>
                <SwiperSlide>
                    <MeetCard image={Tim} name="Tim" className={"rounded-2xl"} />
                </SwiperSlide>
            </Swiper>
            <div className="meetBorder mb-20"></div>
        </div>
    );
};
