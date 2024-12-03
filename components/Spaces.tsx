'use client'

import Image from 'next/image'
import StageIcon from '@/assets/images/Stage.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { useRouter } from 'next/navigation'

type Props = {
    image: StaticImport
    location: string
}

const Spaces = ({ image, location }: Props) => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.push(`/stage/${location}`)}
            className="flex flex-col cursor-pointer items-center relative"
        >
            <Image src={image} height={175} alt="location" />

            <div className="absolute -bottom-6 bg-[#117DBD] w-4/5 p-2 text-sm rounded-full flex items-center justify-center space-x-2">
                <Image src={StageIcon} width={30} alt="stageIcon" />
                <h1 className="text-center">{location}</h1>
            </div>
        </div>
    )
}

export default Spaces
