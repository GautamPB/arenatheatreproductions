import { Dancing_Script } from 'next/font/google'
import TaramandalPoster from '@/assets/images/posters/taramandal.png'
import Image from 'next/image'
import Photo1 from '@/assets/images/taramandal/Photo1.png'
import Photo2 from '@/assets/images/taramandal/Photo2.png'
import MediaCoverage from '@/components/MediaCoverage'
import Express from '@/assets/images/taramandal/media/express.png'
import Hindu from '@/assets/images/taramandal/media/hindu.png'
import Metrolife from '@/assets/images/taramandal/media/metrolife.png'
import TOI from '@/assets/images/taramandal/media/toi.png'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

const Taramandal = () => {
    return (
        <div className="max-w-7xl mx-auto mt-6 p-4">
            <h1
                className={`${dancingScript.className} text-4xl font-bold text-center`}
            >
                Taramandal
            </h1>

            <div className="mt-10">
                {/* section 1 */}
                <div className="flex items-center flex-col md:flex-row">
                    <Image
                        src={TaramandalPoster}
                        alt="seagull"
                        width={1920}
                        height={1080}
                        className="w-[20rem]"
                    />

                    <div className="w-full text-center md:space-y-12 mt-12 md:mt-0 flex items-center justify-around md:flex-col space-y-0">
                        <h1 className="font-bold text-xl text-[#191c1b] italic">
                            <span className="text-[5rem] text-[#1f293c]">
                                3{' '}
                            </span>{' '}
                            Venues
                        </h1>
                        <h1 className="font-bold text-xl text-[#191c1b] italic">
                            <span className="text-[5rem] text-[#531b8a]">
                                6{' '}
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
                            ATP’s first large scale production took place in
                            2022, when we brought{' '}
                            <span className="font-bold">
                                Neel Chaudhuri’s “Taramandal”
                            </span>
                            to bangalore audiences.
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
                            The play is a collection of{' '}
                            <span className="font-bold">
                                short stories by Satyajit Ray
                            </span>
                            , on the lives of actors and artists across ages.
                            Shows were succesffully put up in{' '}
                            <span className="font-bold">
                                BIC & Jagriti theatres in Bengaluru, and we also
                                travelled with it to Rangbhoomi in Hyderabad.
                            </span>
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
                            Photo={Express}
                            newspaper="Indian Express"
                        />

                        <MediaCoverage
                            Photo={Metrolife}
                            newspaper="Metrolife"
                        />

                        <MediaCoverage
                            Photo={TOI}
                            newspaper="The Times of India"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Taramandal
