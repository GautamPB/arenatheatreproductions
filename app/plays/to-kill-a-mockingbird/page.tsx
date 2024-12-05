import { Dancing_Script } from 'next/font/google'
import tkamb from '@/assets/images/posters/tkamb.png'
import Image from 'next/image'

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
                <div className="flex items-center flex-col md:flex-row">
                    <Image
                        src={tkamb}
                        alt="tkamb"
                        width={1920}
                        height={1080}
                        className="w-[20rem]"
                    />

                    <div className="w-full text-center space-y-12 mt-12 md:mt-0">
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
            </div>
        </div>
    )
}

export default TKAMB
