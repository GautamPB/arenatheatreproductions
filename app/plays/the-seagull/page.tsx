import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'
import SeagullPoster from '@/assets/images/posters/seagull.png'
import Photo1 from '@/assets/images/seagull/photo1.png'
import Photo2 from '@/assets/images/seagull/photo2.png'
import Herrald from '@/assets/images/seagull/media/herrald.png'
import Hindu from '@/assets/images/seagull/media/hindu.png'
import TheatreRoom from '@/assets/images/seagull/media/theatreRoom.png'
import MediaCoverage from '@/components/MediaCoverage'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

const Seagull = () => {
    return (
        <div className="max-w-7xl mx-auto mt-6 p-4">
            <h1
                className={`${dancingScript.className} text-4xl font-bold text-center`}
            >
                The Seagull
            </h1>

            <div className="mt-10">
                {/* section 1 */}
                <div className="flex items-center flex-col md:flex-row">
                    <Image
                        src={SeagullPoster}
                        alt="seagull"
                        width={1920}
                        height={1080}
                        className="w-[20rem]"
                    />

                    <div className="w-full text-center md:space-y-12 mt-12 md:mt-0 flex items-center justify-around md:flex-col space-y-0">
                        <h1 className="font-bold text-xl text-[#030303] italic">
                            <span className="text-[5rem] text-[#881819]">
                                3{' '}
                            </span>{' '}
                            Venues
                        </h1>
                        <h1 className="font-bold text-xl text-[#030303] italic">
                            <span className="text-[5rem] text-[#881719]">
                                8{' '}
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
                            In our quest to ingnite passion in international
                            theatre works, we undertook what many consider one
                            of the hardest plays to do -legendary{' '}
                            <span className="font-bold">
                                Russian playright, Anton Chekhov’s “The Seagull”
                            </span>
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
                            Adapted to a contemporary setting by our inhouse
                            writer, The Seagull debuted at BIC and is our{' '}
                            <span className="font-bold">
                                most frequently performed production.
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
                            Photo={TheatreRoom}
                            newspaper="The Theatre Room Magazine"
                        />
                        <MediaCoverage
                            Photo={Herrald}
                            newspaper="Deccan Herrald"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seagull
