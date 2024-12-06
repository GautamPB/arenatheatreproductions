import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type Props = {
    Photo: StaticImport
    newspaper: string
}

const MediaCoverage = ({ Photo, newspaper }: Props) => {
    return (
        <div className="relative flex flex-col items-center border p-4">
            <Image src={Photo} alt="paper" className="max-w-[15rem]" />

            <div className="absolute -bottom-6 font-bold">
                <h1 className="text-white bg-[#402E84] px-4 py-2">
                    {newspaper}
                </h1>
            </div>
        </div>
    )
}

export default MediaCoverage
