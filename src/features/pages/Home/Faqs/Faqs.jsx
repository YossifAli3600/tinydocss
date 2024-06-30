import React from 'react'
import Accordion from '../../../../components/Accordion/Accordion'
import faqsImg from '../../../../assets/images/faqs.png'
export const Faqs = () => {
    return (
        <div className='custom_container pt-16'>
            <div className='grid md:grid-cols-8 h-[150px] mb-11'>
                <div className='md:col-span-5'>
                    <h3 className='text-3xl font-bold'>Frequently Asked Questions</h3>
                <p className='md:my-4 max-w-[90%]'>We’re on a mission to improve kids' health and make one billion children and parents smile. Take a look at our FAQs to learn more about Tiny Docs and the value we offer.</p>
                </div>
                <div className='relative md:col-span-3 hidden md:block'>
                    <img className='w-[200px] absolute -bottom-4 right-0 z-0' src={faqsImg} alt="faqsImg" />
                </div>
            </div>
            <Accordion
                title={"What exactly is Tiny Docs?"}
                bodyNoPadding
                body={<p className='px-5 pb-4'>An enjoyable interactive children's learning platform packed with age-appropriate educational videos, activities, and resources that help kids understand and cope with and understand healthcare and wellness.   </p>}
                className={`mb-3 z-10 relative`}
            />
            <Accordion
                title={"How can Tiny Docs help?"}
                bodyNoPadding
                body={<p className='px-5 pb-4'>An enjoyable interactive children's learning platform packed with age-appropriate educational videos, activities, and resources that help kids understand and cope with and understand healthcare and wellness.   </p>}
                className={` mb-3`}
            />
            <Accordion
                title={"What can I find on the Tiny Docs platform?"}
                bodyNoPadding
                body={<p className='px-5 pb-4'>An enjoyable interactive children's learning platform packed with age-appropriate educational videos, activities, and resources that help kids understand and cope with and understand healthcare and wellness.   </p>}
                className={` mb-3`}
            />
            <Accordion
                title={"What age range is Tiny Docs geared to?"}
                bodyNoPadding
                body={<p className='px-5 pb-4'>An enjoyable interactive children's learning platform packed with age-appropriate educational videos, activities, and resources that help kids understand and cope with and understand healthcare and wellness.   </p>}
                className={` mb-3`}
            />
            <Accordion
                title={"Is the Tiny Docs platform ad-free?"}
                bodyNoPadding
                body={<p className='px-5 pb-4'>An enjoyable interactive children's learning platform packed with age-appropriate educational videos, activities, and resources that help kids understand and cope with and understand healthcare and wellness.   </p>}
                className={` mb-3`}
            />
        </div>
    )
}
