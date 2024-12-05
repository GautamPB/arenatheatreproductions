'use client'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props = {
    poster: StaticImport
    title: string
    lineOne: string
    swap: boolean
    pagePath: string
}

const Venture = ({ poster, title, lineOne, swap, pagePath }: Props) => {
    const router = useRouter()

    return (
        <div
            className={`flex space-x-4 flex-col justify-between md:flex-row items-center md:items-start ${
                swap && 'md:flex-row-reverse'
            }`}
        >
            <Image
                src={poster}
                alt="poster"
                className="w-[15rem] mb-8 md:mb-0 object-contain"
                width={1920}
                height={1080}
            />

            <div className={`${swap && 'mr-8'}`}>
                <h1 className="font-semibold italic text-xl">{title}</h1>
                <br />
                <p>{lineOne}</p>
                <br />
                <div className="space-y-4">
                    <p>For more information, click below</p>
                    <button
                        onClick={() => router.push(pagePath)}
                        className="cursor-pointer border text-black border-[#117DBD] hover:bg-[#117DBD] py-2 px-8 font-bold rounded-full transition duration-200 hover:text-white mx-auto"
                    >
                        Click here
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Venture
