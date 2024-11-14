import Image from 'next/image'
import Logo from '@/assets/images/ATP Logo.png'
import Tahera from '@/assets/images/Tahera.jpg'

export default function Home() {
    return (
        <div>
            {/* first section */}
            <div className="flex flex-col items-center justify-center bg-black h-[70vh]">
                <div className="my-8">
                    <h1 className="text-2xl text-center font-bold">
                        <span className="text-[#E2E4E7]">ARENA</span> &nbsp;
                        <span className="text-[#6550C2]">THEATRE</span> &nbsp;
                        <span className="text-[#5B98FF]">PRODUCTIONS</span>
                    </h1>
                </div>

                <div className="bg-white p-4 rounded-full">
                    <Image src={Logo} alt="atp_logo" width={150} />
                </div>
            </div>

            {/* second section */}
            <div className="py-10 flex text-center space-y-6 flex-col items-center">
                <h1 className="text-[#4F5655] text-4xl font-bold">
                    It was only in the theatre that I lived
                </h1>

                <p>-Oscar Wilde</p>
            </div>

            {/* History */}
            <div className="space-y-3 px-4">
                <h1 className="text-xl font-bold mt-4">HISTORY</h1>
                <div className="flex md:flex-row items-center space-y-4 md:items-start flex-col-reverse">
                    <div className="space-y-6">
                        <p className="text-justify">
                            <span className="font-bold">
                                Arena Theatre Productions
                            </span>{' '}
                            was established on{' '}
                            <span className="font-bold">21 April, 2021.</span>
                            &nbsp;
                            <span className="font-bold">Tahera</span>, founded
                            the company on fervent passion. An extraordinary
                            theatre troupe, born from humble roots, evolves into
                            a powerhouse of innovation. Their journey weaves
                            tales of resilience, collaborative spirit, and
                            groundbreaking performances. Pushing boundaries,
                            embracing diversity, they transform stages into
                            realms where creativity, passion, and storytelling
                            converge, leaving audiences spellbound.
                        </p>

                        <p className="italic">
                            This is{' '}
                            <span className="font-bold underline">
                                where stories unfold...
                            </span>
                        </p>
                    </div>

                    <Image
                        src={Tahera}
                        alt="tahera"
                        width={250}
                        className="rounded-full"
                    />
                </div>
            </div>

            {/* about us */}
            <div className="mt-[4rem] px-4 space-y-3">
                <h1 className="text-xl font-bold mt-4">ABOUT US</h1>
                <p>
                    The impact of Theatre is both powerful and immediate. We
                    envision to produce Plays for audiences of all ages to
                    imbibe deep understanding, empathy, laughter, wonder and
                    excitement. We believe that arts, and Theatre in particular,
                    can bridge the division between cultures. Here the
                    characters are performing in flesh to create an unparalleled
                    impact that no other media of story telling could ever
                    render. We bring theatre to people in the form of Play
                    Readings, Theatre Workshops, and Theatre Productions. Our
                    vision is to establish a vibrant and a diverse community
                    where every individual is inspired to reach their full
                    potential without any barriers, to honour commitment made to
                    ourselves and to the art, to engage in constructive insight
                    and creative improvement, and to embrace discomfort in all
                    its complexity.
                </p>
            </div>
        </div>
    )
}
