import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'
import Photo1 from '@/assets/images/workshops/Photo1.png'
import Photo2 from '@/assets/images/workshops/Photo2.png'
import Photo3 from '@/assets/images/workshops/Photo3.png'
import MediaCoverage from '@/components/MediaCoverage'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

const Workshops = () => {
    return (
        <div className="max-w-7xl mx-auto mt-6 p-4">
            <h1
                className={`${dancingScript.className} text-4xl font-bold text-center`}
            >
                Workshops
            </h1>

            <div className="mt-10">
                {/* section 1 */}
                <div className="mt-[5rem]">
                    {/* section 1.1 */}
                    <div className="flex md:flex-row-reverse flex-col items-center md:space-y-0 space-y-10 md:items-start">
                        <MediaCoverage
                            Photo={Photo1}
                            newspaper="Play Readings"
                        />

                        <h1 className="text-lg md:text-xl lg:text-2xl">
                            We hosted Online Rehearsed Play Readings during the
                            trying times of Covid-19, which had more than 400
                            people in attendance. With the success of the first
                            show, we were encouraged to do many online shows
                            further on.
                        </h1>
                    </div>

                    {/* section 1.2 */}
                    <div className="flex md:flex-row flex-col items-center md:items-start mt-[8rem] space-y-10 md:space-y-0 mb-20 md:space-x-10">
                        <MediaCoverage Photo={Photo2} newspaper="Workshops" />

                        <h1 className="text-lg md:text-xl lg:text-2xl">
                            We conduct regular workshops encouraging artists to
                            explore their creativity and imbibe confidence,
                            thereby providing a holistic learning experience.
                        </h1>
                    </div>
                </div>
            </div>

            <h1
                className={`${dancingScript.className} text-4xl font-bold text-center`}
            >
                NGO Visits
            </h1>

            <p className="text-md md:text-lg lg:text-xl mt-4">
                After every show, we have a tradition of visiting an NGO or
                Non-profit. We feel that everyone should be able to achieve full
                control over the spectrum of talent they possess. Through our
                regular workshops, we like to bring out talent we know these
                kids have.{' '}
            </p>

            <div className="mt-10 flex flex-col items-center">
                <Image
                    src={Photo3}
                    alt="workshops"
                    className="md:w-4/5 w-full"
                />

                <p className="text-md md:text-lg lg:text-xl">
                    Our visit to the Sparsh Trust, with the help of Karle Infra.
                </p>
            </div>
        </div>
    )
}

export default Workshops
