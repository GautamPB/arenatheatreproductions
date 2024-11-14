import Image from 'next/image'

type Props = {
    Icon: string
    title: string
}

const NavbarComponent = ({ Icon, title }: Props) => {
    return (
        <div className="flex items-center space-x-2 cursor-pointer hover:underline">
            <Image src={Icon} alt="icon" width={20} />
            <h1>{title}</h1>
        </div>
    )
}

export default NavbarComponent
