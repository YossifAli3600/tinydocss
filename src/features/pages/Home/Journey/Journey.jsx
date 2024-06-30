import React, { useLayoutEffect, useRef, useState } from 'react';
import card1 from '../../../../assets/images/image1.png';
import './Journey.css';
import { Link } from 'react-router-dom';

export const Journey = () => {
    const [isOpened, setIsOpened] = useState(0);
    const [visible, setVisible] = useState(0);
    const [contentHeight, setContentHeight] = useState(300);
    let contentRef = useRef();
    useLayoutEffect(() => {
        if (!contentRef) return;
        setContentHeight(contentRef?.current?.scrollHeight);
    }, [contentRef, contentRef?.current?.scrollHeight]);


    const handleClick = (index) => {
        setVisible(false);
        setIsOpened(index);
        setTimeout(() => {
            setVisible(index);
        }, 550);
    };
    return (
        <div className='JourneySection my-8 custom_container'>
            <h3 className='text-2xl md:text-3xl lg:text-xl font-bold mt-11 text-black capitalize text-center max-w-[40%] m-auto mb-8'>
                Join <span className='text-[#FD6683]'>Your Kids</span> on Their <span className='text-[#6EC9E4]'>Health Journey!</span>
            </h3>
            <div className='flex gap-8'>

                <div style={{ height: contentHeight }}
                    ref={contentRef} onClick={() => handleClick(0)} className={`widthAccordion flex overflow-hidden pt-2 rounded-lg bg-[#5B8C85] text-white px-2 ${isOpened === 0 ? "active" : ""}`}>
                    <div className='flex flex-col justify-between h-full pb-5 w-[50px]'>
                        <span>01</span>
                        <span className='verticalText'>Blogs</span>
                    </div>
                    <div className={`content px-5 ${visible === 0 && isOpened === 0 ? "visible" : "hidden"}`}>
                        <h3 className='font-bold'>Imagination Vacation: Clouds</h3>
                        <p className='mt-3 mb-8'>One of the most common concerns I address in my clinic is eczema. Eczema (also called atopic dermatitis) is a very common skin problem, affecting about 10-15% of children in the United States. Children with eczema have red, dry, itchy patches of skin. </p>
                        <Link className='YellowBtn px-5 py-2 rounded-lg'>View All</Link>
                        <div className=''>
                            <img src="https://s3-alpha-sig.figma.com/img/1e86/e30f/dc9f8e426613ead8eea1369ae1594d56?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PpmdgqdsJmWoVYW39Uk-FgNHthgesVSdzLLxhh4VAwpG5-UX-5JcRLP0W1rKBOvjqlsvgxAGLcrgLKOMXGrjHkApHNPAe1WJNl~cN7xvZZ1VANWZ1rDOgzCmjf~QWU-5rJFKM53c~qkO0zi8LSiSiUVqtlEJ38gdHRRgk8ShPZ2A~4M3ObYkc1I34AEdgqVaZEBC7pxjUlwWOd3VsNxGzIKTBlYFjjoI7d9~GWgfmyvSMYwFoLvBDoE~nBTYVeBvZX-~1-4EiHIO9hZm5P4YBe4WKcx6rJzHjdJnZ7vMjyKr2FF5wjbwjli202iBS30xirtJ-dWuvWNtIDysAvokrQ__" className='w-full object-cover h-[150px] md:h-[350px] my-8 rounded-lg' alt="photo" />
                        </div>
                    </div>
                </div>

                <div style={{ height: contentHeight }}
                    onClick={() => handleClick(1)} className={`widthAccordion flex overflow-hidden pt-2 rounded-lg bg-[#FD6683] text-white px-2 ${isOpened === 1 ? "active" : ""}`}>
                    <div className='flex flex-col justify-between h-full pb-5 w-[50px]'>
                        <span>02</span>
                        <span className='verticalText'>Play Games</span>
                    </div>
                    <div className={`content px-5 ${visible === 1 && isOpened === 1 ? "visible" : "hidden"}`}>
                        <h3 className='font-bold'>Tim, Tam and Tom are hard at work</h3>
                        <p className='mt-3 mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <Link className='YellowBtn px-5 py-2 rounded-lg'>View All</Link>
                        <div>
                            <img src="https://s3-alpha-sig.figma.com/img/b571/d9e5/a7e0ac1892601099694179f25cadc786?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BJ7e1MDaNAZeOE0-iL7wQiwflxtfOUSAkjjGRW7wQo9RTldev6DV6u83Dk9Z7h7rCJ0icQSqWfwYDUHfKcRo7gJonPj9nUJh2RYOWCK6dJB849vEKqKJVO2FAeEAVLUBXfH8Cb6dQtfGtXOW6gNHROKbxhC9mSiQ3vviyU2h2EQgXq6dkQIsZrFepXQAJzOaX88jlVTH0szL9fNd~jMEkRk6xmhq3GgQ9Gwe7aN3XF4gM~doTgMYvT3YbxJ5A1OVpSiw9id0Glf-Nx5g9D8nmGMVZogZAiq8ThrxfhcqAINO7qREMclNVyjgo8Rv~lgHWxMJkQKKB8lUnGQi5SjMoQ__" className='w-full object-cover h-[150px] md:h-[350px] my-8 rounded-lg' alt="photo" />
                        </div>
                    </div>
                </div>

                <div style={{ height: contentHeight }}
                    onClick={() => handleClick(2)} className={`widthAccordion flex overflow-hidden pt-2 rounded-lg bg-[#003B76] text-white px-2 ${isOpened === 2 ? "active" : ""}`}>
                    <div className='flex flex-col justify-between h-full pb-5 w-[50px]'>
                        <span>03</span>
                        <span className='verticalText'>Parents Dashboard</span>
                    </div>
                    <div className={`content px-5 ${visible === 2 && isOpened === 2 ? "visible" : "hidden"}`}>
                        <h3 className='font-bold'>What do you know about tonsils?</h3>
                        <p className='mt-3 mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <Link className='YellowBtn px-5 py-2 rounded-lg'>View All</Link>
                        <div>
                            <img src="https://s3-alpha-sig.figma.com/img/16ad/f472/9b2c413c54ca11bc4f37738e423fc6e8?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m1W9JMndaXlHnK2qKfjdPlavn3TXlwGVDmJf4HgbFOY~Ha~lCkLCKyvcmTta4ufTYmhwE9NEEaETIfmgCO5a~Um14r1YCFkhPRp~tIYNbz0Lghcrdr7gIKWky8f5EjtBFrORhgsuhf7Lj13tHhdEtYSPyJJu4TBEpFm3Db5B2UUjL7U76WA9AehTfDUIOtxrGgNRJHHIUripdFlGskE6VqqbtpcXBMzO0qiW4KGbJXt4f8Lt7VUmLrJ16t7AHp7xd0nuKCoV3FbYCyvNZuU7646BNu9L5DztOj3oAZMYaz3voNw6Qu~yk60aWl3WxXAavRuz0Nei7Ddnf0AlHPMF7w__" className='w-full object-cover h-[150px] md:h-[350px] mb-5 my-8 rounded-lg' alt="photo" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
