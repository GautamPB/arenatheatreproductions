import Image from 'next/image'
import Instagram from '@/assets/icons/instagram.svg'
import Youtube from '@/assets/icons/youtube.svg'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="bg-[#117DBD] py-6 space-y-4 text-white flex flex-col items-center">
            <h1 className="text-3xl font-bold">FIND US</h1>
            <p className="text-center">
                707, HRBR Layout 1st Block, HRBR Layout, Kalyan Nagar,
                Bengaluru, Karnataka 560043
            </p>

            <div className="flex items-center space-x-4">
                <Link
                    target="_blank"
                    href="https://www.instagram.com/arenatheatreproductions/"
                    className="cursor-pointer"
                >
                    <Image
                        src={Instagram}
                        alt="instagram"
                        width={40}
                        height={40}
                    />
                </Link>

                <Link
                    target="_blank"
                    href="https://www.youtube.com/channel/UC0WvpojXLW73TOUn1eMemLw"
                    className="cursor-pointer"
                >
                    <Image src={Youtube} alt="youtube" width={40} height={40} />
                </Link>
            </div>

            <p>Copyright © 2024 Arena Theatre Productions</p>
        </div>
    )
}

export default Footer
