import { Dancing_Script } from 'next/font/google'
import tkamb from '@/assets/images/posters/tkamb.png'
import Image from 'next/image'
import Photo1 from '@/assets/images/tkamb/photo1.png'
import Photo2 from '@/assets/images/tkamb/photo2.png'
import Photo3 from '@/assets/images/tkamb/photo3.png'
import Express from '@/assets/images/tkamb/media/express.jpg'
import Herrald from '@/assets/images/tkamb/media/herrald.jpg'
import Hindu from '@/assets/images/tkamb/media/hindu.png'
import Leaflet from '@/assets/images/tkamb/media/leaflet.jpg'
import Premji from '@/assets/images/tkamb/media/premji.jpg'
import Southfirst from '@/assets/images/tkamb/media/southfirst.jpg'
import TOI from '@/assets/images/tkamb/media/toi.png'
import MediaCoverage from '@/components/MediaCoverage'

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
                            className="w-4/5"
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
                    <div className="flex md:flex-row flex-col-reverse items-center md:items-start mt-[5rem] md:mt-[10rem] md:space-x-10">
                        <Image
                            src={Photo3}
                            alt="photo"
                            width={1920}
                            height={1080}
                            className="w-4/5 mt-3"
                        />

                        <h1 className="text-lg md:text-xl lg:text-2xl">
                            A footfall of{' '}
                            <span className="font-bold">over 1000</span> was
                            recorded for each of the productions.
                        </h1>
                    </div>
                </div>

                {/* media coverage */}
                <div className="mt-[5rem]">
                    <h1
                        className={`${dancingScript.className} text-4xl text-center`}
                    >
                        Media Coverage
                    </h1>

                    <div className="flex flex-wrap gap-8 my-4 items-center justify-center">
                        <MediaCoverage Photo={Hindu} newspaper="The Hindu" />
                        <MediaCoverage
                            Photo={TOI}
                            newspaper="The Times Of India"
                        />
                        <MediaCoverage
                            Photo={Premji}
                            newspaper="Azim Premji University"
                        />
                        <MediaCoverage
                            Photo={Herrald}
                            newspaper="Deccan Herrald"
                        />
                        <MediaCoverage
                            Photo={Express}
                            newspaper="Bangalore Express"
                        />
                        <MediaCoverage
                            Photo={Southfirst}
                            newspaper="South First"
                        />
                        <MediaCoverage
                            Photo={Leaflet}
                            newspaper="The Leaflet"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TKAMB
