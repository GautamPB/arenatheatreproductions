'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props = {
    Icon: string
    title: string
    path: string
}

const NavbarComponent = ({ Icon, title, path }: Props) => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.push(path)}
            className="flex p-2  hover:bg-[#117DBD] rounded-lg transition duration-200 items-center space-x-2 cursor-pointer"
        >
            <Image src={Icon} alt="icon" width={20} />
            <h1>{title}</h1>
        </div>
    )
}

export default NavbarComponent
