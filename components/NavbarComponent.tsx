import Image from 'next/image'

type Props = {
    Icon: string
    title: string
}

const NavbarComponent = ({ Icon, title }: Props) => {
    return (
        <div className="flex p-2  hover:bg-[#117DBD] rounded-lg transition duration-200 items-center space-x-2 cursor-pointer">
            <Image src={Icon} alt="icon" width={20} />
            <h1>{title}</h1>
        </div>
    )
}

export default NavbarComponent
