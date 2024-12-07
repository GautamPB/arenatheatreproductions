import Image from 'next/image'
import TVMPoster from '@/assets/images/posters/tvm.png'
import { Dancing_Script } from 'next/font/google'
import Photo1 from '@/assets/images/tvm/Photo1.png'
import Photo2 from '@/assets/images/tvm/Photo2.png'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

const TVM = () => {
    return (
        <div className="max-w-7xl mx-auto mt-6 p-4">
            <h1
                className={`${dancingScript.className} text-4xl font-bold text-center`}
            >
                The Vagina Monologues
            </h1>

            <div className="mt-10">
                {/* section 1 */}
                <div className="flex items-center flex-col md:flex-row">
                    <Image
                        src={TVMPoster}
                        alt="tvm"
                        width={1920}
                        height={1080}
                        className="w-[20rem]"
                    />

                    <div className="w-full text-center md:space-y-12 mt-12 md:mt-0 flex items-center justify-around md:flex-col space-y-0">
                        <h1 className="font-bold text-xl text-[#652e4d] italic">
                            <span className="text-[5rem] text-[#b73667]">
                                3{' '}
                            </span>{' '}
                            Venues
                        </h1>
                        <h1 className="font-bold text-xl text-[#652e4d] italic">
                            <span className="text-[5rem] text-[#b73667]">
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
                            On the occasion of{' '}
                            <span className="font-bold">
                                International Women’s Day
                            </span>
                            , we staged - &quot;The Vagina Monologues&quot;,{' '}
                            <span className="font-bold">
                                written by Eve Ensler
                            </span>
                            , which is an innovative play that features some of
                            the candid, funny, painful, yearning, insights of
                            women talking about their experience with their
                            Vaginas.
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
                            <span className="font-bold">
                                Our most requested production by far,
                            </span>{' '}
                            The Vagina Monolgoues resonated with Bangalore
                            audiences so much, it became our{' '}
                            <span className="font-bold">
                                longest running production at the time.
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TVM
