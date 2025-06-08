'use client'

import { useRouter } from 'next/navigation'

type Props = {
    Icon: React.ElementType
    title: string
    path: string
    isWhite: boolean
}

const NavbarComponent = ({ Icon, title, path, isWhite }: Props) => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.push(path)}
            className={`flex p-2  hover:bg-[#117DBD] rounded-lg transition duration-200 items-center space-x-2 cursor-pointer ${
                isWhite && window.location.pathname === '/'
                    ? 'text-white'
                    : 'text-black'
            } ${window.location.pathname !== '/' && 'text-black'}`}
        >
            <Icon />
            <h1>{title}</h1>
        </div>
    )
}

export default NavbarComponent
