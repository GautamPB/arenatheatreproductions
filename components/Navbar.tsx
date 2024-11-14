import Logo from '@/assets/images/ATP Logo.png'
import Image from 'next/image'
import NavbarComponent from './NavbarComponent'
import Home from '@/assets/icons/home.svg'
import Ventures from '@/assets/icons/ventures.svg'
import Reviews from '@/assets/icons/reviews.svg'

const Navbar = () => {
    return (
        <div className="bg-white shadow-lg px-4 py-4 w-full sticky top-0 z-50 flex items-center justify-between">
            <Image src={Logo} alt="logo" width={60} />
            {/* home - pages 1 to 5 + theatre quote + upcoming show */}
            {/* ventures - dropdown menu with all the shows */}
            {/* reviews */}

            {/* navbar options */}
            <div className="flex items-center space-x-6">
                <NavbarComponent Icon={Home} title="Home" />
                <NavbarComponent Icon={Ventures} title="Ventures" />
                <NavbarComponent Icon={Reviews} title="Reviews" />
            </div>
        </div>
    )
}

export default Navbar
