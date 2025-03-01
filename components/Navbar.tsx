'use client'

import Logo from '@/assets/images/ATP Logo.png'
import Image from 'next/image'
import NavbarComponent from './NavbarComponent'
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
// import CallIcon from '@mui/icons-material/Call'
import Menu from '@/assets/icons/menu.svg'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const dynamicPath = usePathname()
    const router = useRouter()

    const [showNavbar, setShowNavbar] = useState(false)
    const [isWhite, setIsWhite] = useState(true)
    const [isHome, setIsHome] = useState(true)

    useEffect(() => {
        setSidebarOpen(false)

        if (dynamicPath === '/') {
            setIsHome(true)
            window?.addEventListener('scroll', () => {
                const scroll = window?.scrollY

                if (scroll > 150) {
                    setShowNavbar(true)
                    setIsWhite(false)
                } else {
                    setShowNavbar(false)
                    setIsWhite(true)
                }
            })
        } else {
            setShowNavbar(true)
            setIsWhite(false)
            setIsHome(false)
        }
    }, [dynamicPath])

    return (
        <div
            id="navbar"
            className={`${
                showNavbar || !isHome ? 'bg-white shadow-lg' : 'bg-transparent'
            } ${!sidebarOpen && showNavbar && 'shadow-lg'} ${
                sidebarOpen && 'bg-white shadow-lg'
            } p-4 w-full ${
                isHome ? 'fixed' : 'sticky'
            } top-0 z-50 transition duration-200 flex items-center justify-between`}
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
                <NavbarComponent
                    Icon={HomeIcon}
                    title="Home"
                    path="/"
                    isWhite={isWhite}
                />
                <NavbarComponent
                    Icon={WorkIcon}
                    title="Ventures"
                    path="/ventures"
                    isWhite={isWhite}
                />
                <NavbarComponent
                    Icon={AutoStoriesIcon}
                    title="Workshops"
                    path="/workshops"
                    isWhite={isWhite}
                />

                {/* <NavbarComponent
                    Icon={CallIcon}
                    title="Contact Us"
                    path="/contact"
                    isWhite={isWhite}
                /> */}
            </div>

            <Image
                src={Menu}
                alt="menu"
                width={40}
                className="bg-[#117DBD] md:hidden p-2 cursor-pointer rounded-md"
                onClick={() => {
                    setSidebarOpen(!sidebarOpen)
                    setIsWhite(false)
                }}
            />

            {/* sidebar */}
            {sidebarOpen && (
                <div className="md:hidden bg-white border-t space-y-3 p-4 shadow-lg absolute left-0 top-[5.5rem] w-full">
                    <NavbarComponent
                        isWhite={isWhite}
                        Icon={HomeIcon}
                        title="Home"
                        path="/"
                    />
                    <NavbarComponent
                        Icon={WorkIcon}
                        title="Ventures"
                        path="/ventures"
                        isWhite={isWhite}
                    />
                    <NavbarComponent
                        Icon={AutoStoriesIcon}
                        title="Workshops"
                        path="/workshops"
                        isWhite={isWhite}
                    />
                    {/* <NavbarComponent
                        Icon={CallIcon}
                        title="Contact Us"
                        path="/contact"
                        isWhite={isWhite}
                    /> */}
                </div>
            )}
        </div>
    )
}

export default Navbar
