import React from 'react'
import card1 from '../../../../assets/images/image1.png';
import card2 from '../../../../assets/images/image2.png';
import card3 from '../../../../assets/images/image3.png';
import card4 from '../../../../assets/images/image4.png';
import { Pagination } from 'swiper/modules';

import './Join.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import YoutubeVideoPlayer from '../../../../components/YoutubeVideoPlayer/YoutubeVideoPlayer';
export const Join = () => {
    return (
        <div className='JoinSection my-8'>
            <div className="overlay p-11 w-full">
                <div>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-11 text-white capitalize text-center max-w-[75%] m-auto'> <span className='text-[#6AC7C0]'>Join our</span> tiny community of <span className='text-[#FD6683]'>kids, parents</span> and  <span className='text-[#6AC7C0]'>providers</span></h3>
                </div>
                <Swiper
                    modules={[Pagination]}
                    className=' pb-8 w-full'
                    slidesPerView={1}
                    spaceBetween={50}
                    initialSlide={1}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <YoutubeVideoPlayer className={"rotate-2 join"} url={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <YoutubeVideoPlayer className={"rotate-2 join"} url={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <YoutubeVideoPlayer className={"rotate-2 join"} url={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
