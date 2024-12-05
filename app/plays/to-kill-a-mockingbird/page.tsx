import { Dancing_Script } from 'next/font/google'
import tkamb from '@/assets/images/posters/tkamb.png'
import Image from 'next/image'
import Photo1 from '@/assets/images/tkamb/photo1.png'
import Photo2 from '@/assets/images/tkamb/photo2.png'
import Photo3 from '@/assets/images/tkamb/photo3.png'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

const TKAMB = () => {
    return (
        <div className="max-w-7xl mx-auto mt-6 p-4">
            <h1
                className={`${dancingScript.className} text-4xl font-bold text-center`}
            >
                To Kill A Mockingbird
            </h1>

            <div className="mt-10">
                {/* section 1 */}
                <div className="flex items-center flex-col md:flex-row">
                    <Image
                        src={tkamb}
                        alt="tkamb"
                        width={1920}
                        height={1080}
                        className="w-[20rem]"
                    />

                    <div className="w-full text-center md:space-y-12 mt-12 md:mt-0 flex items-center justify-around md:flex-col space-y-0">
                        <h1 className="font-bold text-xl text-[#503319] italic">
                            <span className="text-[5rem] text-[#816b58]">
                                4{' '}
                            </span>{' '}
                            Venues
                        </h1>
                        <h1 className="font-bold text-xl text-[#816b58] italic">
                            <span className="text-[5rem] text-[#503319]">
                                8{' '}
                            </span>{' '}
                            Shows
                        </h1>
                    </div>
                </div>

                {/* section 2 */}
                <div className="mt-[5rem]">
                    {/* section 2.1 */}
                    <div className="flex md:flex-row-reverse flex-col items-center space-y-3 md:items-end">
                        <Image
                            src={Photo1}
                            alt="photo"
                            width={1920}
                            height={1080}
                            className="min-w-1/4 max-w-1/2"
                        />

                        <h1 className="text-lg md:text-xl lg:text-2xl">
                            Our Largest and longest running production yet-{' '}
                            <span className="font-bold">
                                “To Kill A Mockingbird”
                            </span>{' '}
                            which we have successfully staged at the{' '}
                            <span className="font-bold">
                                Chowdiah Memorial Hall
                            </span>
                            ,{' '}
                            <span className="font-bold">
                                Prestige Centre for Performing arts
                            </span>
                            , <span className="font-bold">Jagriti Theatre</span>{' '}
                            and the prestigious{' '}
                            <span className="font-bold">Rangashankara.</span>
                        </h1>
                    </div>

                    {/* section 2.2 */}
                    <Image
                        src={Photo2}
                        alt="photo"
                        width={1920}
                        height={1080}
                        className="w-full md:mt-[10rem] mt-[5rem]"
                    />

                    {/* section 2.3 */}
                    <div className="flex md:flex-row flex-col-reverse space-y-3 items-start mt-[5rem] md:mt-[10rem] md:space-x-10">
                        <Image
                            src={Photo3}
                            alt="photo"
                            width={1920}
                            height={1080}
                            className="min-w-1/4 max-w-1/2"
                        />

                        <h1 className="text-lg md:text-xl lg:text-2xl">
                            A footfall of over 1000 was recorded for each of the
                            productions.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TKAMB
