import FourteenPoster from '@/assets/images/posters/fourteen.png'
import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'
import Photo1 from '@/assets/images/fourteen/Photo1.png'
import Photo2 from '@/assets/images/fourteen/Photo2.png'
import Photo3 from '@/assets/images/fourteen/Photo3.png'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

const Fourteen = () => {
    return (
        <div className="max-w-7xl mx-auto mt-6 p-4">
            <h1
                className={`${dancingScript.className} text-4xl font-bold text-center`}
            >
                Fourteen
            </h1>

            <div className="mt-10">
                {/* section 1 */}
                <div className="flex items-center flex-col md:flex-row">
                    <Image
                        src={FourteenPoster}
                        alt="tvm"
                        width={1920}
                        height={1080}
                        className="w-[20rem]"
                    />

                    <div className="w-full text-center md:space-y-12 mt-12 md:mt-0 flex items-center justify-around md:flex-col space-y-0">
                        <h1 className="font-bold text-xl text-[#000000] italic">
                            <span className="text-[5rem] text-[#d5c9b0]">
                                1{' '}
                            </span>{' '}
                            Venue
                        </h1>
                        <h1 className="font-bold text-xl text-[#000000] italic">
                            <span className="text-[5rem] text-[#a29688]">
                                2{' '}
                            </span>{' '}
                            Shows
                        </h1>
                    </div>
                </div>

                {/* section 2 */}
                <div className="mt-[5rem]">
                    {/* section 2.1 */}
                    <div className="flex md:flex-row-reverse flex-col items-center space-y-3 md:items-start">
                        <Image
                            src={Photo1}
                            alt="photo"
                            width={1920}
                            height={1080}
                            className="w-4/5"
                        />

                        <h1 className="text-lg md:text-xl lg:text-2xl">
                            <span className="font-bold">
                                Tahera’s Directoral Debut,
                            </span>{' '}
                            Fourteen was a play based around The Pringles
                            residence, experiencing a tumultuous night where a
                            grand dinner party planned sees it&pos;s fair share
                            of hiccups as guests drop out at the eve of the
                            festivities.
                        </h1>
                    </div>

                    {/* section 2.2 */}
                    <div className="flex md:flex-row flex-col items-center md:items-start mt-[5rem] md:mt-[10rem] md:space-x-10 space-y-3">
                        <Image
                            src={Photo2}
                            alt="photo"
                            width={1920}
                            height={1080}
                            className="w-4/5"
                        />

                        <h1 className="text-lg md:text-xl lg:text-2xl">
                            Staged at Vyoma Art Space, JP Nagar on 13th January
                            2022. Despite covid restrictions,{' '}
                            <span className="font-bold">
                                100+ people were in attendance.
                            </span>
                        </h1>
                    </div>

                    {/* section 2.3 */}
                    <div className="flex md:flex-row-reverse flex-col items-center space-y-3 md:items-start mt-[5rem] md:mt-[10rem]">
                        <Image
                            src={Photo3}
                            alt="photo"
                            width={1920}
                            height={1080}
                            className="w-4/5"
                        />

                        <h1 className="text-lg md:text-xl lg:text-2xl">
                            Humble beginnings, right? See if you can spot some
                            regulars in the upcoming productions!
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fourteen
