import React from 'react'

const Carousel = () => {

    const slides = [
        {
            image: "/public/encrypted.jpg",
            heading: "End to End Encryption",
            text: "Data is encrypted from the voter's smartphone through transmission to the servers"
        },
        {
            image: "/public/identity_verification.png",
            heading: "Identity Verification",
            text: "Seamless Aadhaar verification powered by DigiLocker’s secure services"
        },
        {
            image: "/public/reciept.jpg",
            heading: "Digital Receipts",
            text: "Every voter receives a post-vote ballot receipt"
        }
    ]
    return (
        <div className='h-screen flex flex-col  items-center justify-between py-10 '>
            <div className="flex relative w-1/3 overflow-hidden">
                {slides.map((slide, index) => (
                    <div className="relative w-full" key={index}>
                        <div className="flex flex-col items-center gap-2 mt-6 max-md:mt-24 rounded-xl p-5 py-7 max-md:p-2 ">
                            <img className="h-60 max-md:h-52 max-sm:h-40" src={slide.image} alt="Encryption" />
                            <div className="flex flex-col gap-3 items-center">
                                <div className="text-2xl max-md:text-lg">{slide.heading}</div>
                                <div className="w-96 text-base max-md:text-sm text-center text-gray-500">
                                    {slide.text}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className='flex justify-between w-full px-20'>
                <button className='text-gray-400 font-semibold shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] px-8 py-2 rounded-full'>Skip</button>
                <button className='text-white bg-amber-400 px-8 py-2 rounded-full font-semibold'>Next</button>
            </div>


        </div >
    )
}

export default Carousel