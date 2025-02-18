'use client'

import Logo from '@/assets/images/ATP Logo.png'
import Image from 'next/image'
import NavbarComponent from './NavbarComponent'
import Home from '@/assets/icons/home.svg'
import Ventures from '@/assets/icons/ventures.svg'
import Reviews from '@/assets/icons/reviews.svg'
import Contact from '@/assets/icons/contact.svg'
import Menu from '@/assets/icons/menu.svg'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const router = useRouter()
    const dynamicPath = usePathname()

    useEffect(() => {
        setSidebarOpen(false)
    }, [dynamicPath])

    return (
        <div
            className={`bg-white ${
                !sidebarOpen && 'shadow-lg'
            } p-4 w-full sticky top-0 z-50 flex items-center justify-between`}
        >
            <Image
                className="cursor-pointer"
                onClick={() => router.push('/')}
                src={Logo}
                alt="logo"
                width={60}
            />

            {/* home - pages 1 to 5 + theatre quote + upcoming show */}
            {/* ventures - dropdown menu with all the shows */}
            {/* reviews */}

            {/* navbar options */}
            <div className="md:flex hidden items-center space-x-6">
                <NavbarComponent Icon={Home} title="Home" path="/" />
                <NavbarComponent
                    Icon={Ventures}
                    title="Ventures"
                    path="/ventures"
                />
                <NavbarComponent
                    Icon={Reviews}
                    title="Workshops"
                    path="/workshops"
                />

                <NavbarComponent
                    Icon={Contact}
                    title="Contact Us"
                    path="/contact"
                />
            </div>

            <Image
                src={Menu}
                alt="menu"
                width={40}
                className="bg-[#117DBD] md:hidden p-2 cursor-pointer rounded-md"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            />

            {/* sidebar */}
            {sidebarOpen && (
                <div className="md:hidden bg-white border-t space-y-3 p-4 shadow-lg absolute left-0 top-[5.5rem] w-full">
                    <NavbarComponent Icon={Home} title="Home" path="/" />
                    <NavbarComponent
                        Icon={Ventures}
                        title="Ventures"
                        path="/ventures"
                    />
                    <NavbarComponent
                        Icon={Reviews}
                        title="Workshops"
                        path="/workshops"
                    />
                    <NavbarComponent
                        Icon={Contact}
                        title="Contact Us"
                        path="/contact"
                    />
                </div>
            )}
        </div>
    )
}

export default Navbar
