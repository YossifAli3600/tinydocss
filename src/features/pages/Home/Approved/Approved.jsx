import React from 'react'
import './Approved.css'
import { Pagination } from 'swiper/modules';
import carton1 from '../../../../assets/images/carton.png';
import carton2 from '../../../../assets/images/Tam.png';
import { Swiper, SwiperSlide } from 'swiper/react'
import { ApprovedCard } from './ApprovedCard/ApprovedCard'
export const Approved = () => {
    return (
        <div className='w-[90%] m-auto'>
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-11 mb-5 capitalize text-center max-w-[55%] m-auto'> <span className='text-[#6AC7C0]'>Approved by</span> doctors. <span className='text-[#003B76]'>Trusted by</span> parents. <span className='text-[#FD6683]'>Loved by</span> kids.</h3>
            <Swiper
                modules={[Pagination]}
                className='pt-20 pb-8 w-[70%]'
                slidesPerView={2}
                spaceBetween={50}
                pagination={{ clickable: true }}
                breakpoints={{
                    200: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                }}
            >
                <SwiperSlide>
                    <ApprovedCard
                        text={" “Tiny Docs was a great resource for us when our daughter had eye surgery. It can be challenging to talk to your child about the process and we were lucky.” "}
                        name={"Regan Lynch"}
                        image={"https://s3-alpha-sig.figma.com/img/25a3/b6dc/51018d8ccfce793bd626df9ce4517634?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qevAzIBLIIPIq6ew6AyV8bM9zm1pg0e-w-tNIV2UQymP1SF6RFgFqq0RrFyYXtW1c3bgGpYYS143tDkLFvnj4ZuIqofE574MyqyRv7BPkuo9yqyyE4NwfLOiam22UIVE~tZtgk~05EhK-z3JyktzmMhSZLnXOIARAXb1j1WIdKCPHQMfuyseQYOJwA-Zmb9fHviy2hu7lIPISLBHGsL9ejhAmErleLyBmhqvBoZvh6OgKHacmP~V4kDqPaOLMKnszEkbMNp27PEmkL94l02ucpo~irQuiVhUY0q4IKtcQEgasHg4f319lsbxtdcgsKyrR4GDI88dRjc~89rUmokKJg__"}
                        role={"Parent"}
                        carton={carton1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ApprovedCard
                        text={" “Tiny Docs was a great resource for us when our daughter had eye surgery. It can be challenging to talk to your child about the process and we were lucky.” "}
                        name={"Lauren L. | Third-grader"}
                        image={"https://s3-alpha-sig.figma.com/img/2298/9b20/878e53b45bf33ef316143ad04f5532fa?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYKT1xGhOy1A5NT6GwxWwsQwpu4k35ngeAgTgUJ1yxAKxmRJAvfaWIk-6hVYL1qsUY585-WjNsIE0oaZziQMcAHyHaxFelf1-FXfR4j4XiMe8LcwvkXGZWiGJN9joJFC1GJXF4b3keSUhMy6QXXZyBlzUl~Eb8MWOs1p9c5qmNK4ivKeN8JrlEGi7c5gtZms-Z2LL8ab2ryNVe3CC5M0jAewZBBHPDOHUnpYu7dJ4r6pAfk-rMzymL9j81CEC1PMGDchfoO5ZB5yn4qep1q-BoCj7ogqkedH9uDkzblmzqOl~JU5m0ldtiCi6uRroKNJapLNL6OK8AQ2KNG8QD~SIQ__"}
                        role={"Kid"}
                        carton={carton2}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ApprovedCard
                        text={" “Tiny Docs was a great resource for us when our daughter had eye surgery. It can be challenging to talk to your child about the process and we were lucky.” "}
                        name={"Regan Lynch"}
                        image={"https://s3-alpha-sig.figma.com/img/25a3/b6dc/51018d8ccfce793bd626df9ce4517634?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qevAzIBLIIPIq6ew6AyV8bM9zm1pg0e-w-tNIV2UQymP1SF6RFgFqq0RrFyYXtW1c3bgGpYYS143tDkLFvnj4ZuIqofE574MyqyRv7BPkuo9yqyyE4NwfLOiam22UIVE~tZtgk~05EhK-z3JyktzmMhSZLnXOIARAXb1j1WIdKCPHQMfuyseQYOJwA-Zmb9fHviy2hu7lIPISLBHGsL9ejhAmErleLyBmhqvBoZvh6OgKHacmP~V4kDqPaOLMKnszEkbMNp27PEmkL94l02ucpo~irQuiVhUY0q4IKtcQEgasHg4f319lsbxtdcgsKyrR4GDI88dRjc~89rUmokKJg__"}
                        role={"Parent"}
                        carton={carton1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ApprovedCard
                        text={" “Tiny Docs was a great resource for us when our daughter had eye surgery. It can be challenging to talk to your child about the process and we were lucky.” "}
                        name={"Lauren L. | Third-grader"}
                        image={"https://s3-alpha-sig.figma.com/img/2298/9b20/878e53b45bf33ef316143ad04f5532fa?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYKT1xGhOy1A5NT6GwxWwsQwpu4k35ngeAgTgUJ1yxAKxmRJAvfaWIk-6hVYL1qsUY585-WjNsIE0oaZziQMcAHyHaxFelf1-FXfR4j4XiMe8LcwvkXGZWiGJN9joJFC1GJXF4b3keSUhMy6QXXZyBlzUl~Eb8MWOs1p9c5qmNK4ivKeN8JrlEGi7c5gtZms-Z2LL8ab2ryNVe3CC5M0jAewZBBHPDOHUnpYu7dJ4r6pAfk-rMzymL9j81CEC1PMGDchfoO5ZB5yn4qep1q-BoCj7ogqkedH9uDkzblmzqOl~JU5m0ldtiCi6uRroKNJapLNL6OK8AQ2KNG8QD~SIQ__"}
                        role={"Kid"}
                        carton={carton2}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
