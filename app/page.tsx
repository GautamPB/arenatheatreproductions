import Image from 'next/image'
import Logo from '@/assets/images/ATP Logo.png'
import Cover from '@/assets/images/Cover.jpeg'
import CoreTeam from '@/components/CoreTeam'
import Spaces from '@/components/Spaces'
import Tahera from '@/assets/images/Tahera.jpg'
import Fazal from '@/assets/images/Fazal.png'
import Nishitha from '@/assets/images/Nishitha.png'
import Saad from '@/assets/images/Saad.jpeg'
import Gautam from '@/assets/images/Gautam.png'
import Minna from '@/assets/images/Minna.png'
import AG from '@/assets/images/Atta Galatta.png'
import BIC from '@/assets/images/BIC.png'
import Chowdiah from '@/assets/images/Chowdiah.png'
import Dhurii from '@/assets/images/Dhurii.png'
import Jagriti from '@/assets/images/Jagriti.jpg'
import Prestige from '@/assets/images/Prestige.png'
import RS from '@/assets/images/Rangashankara.png'
import Rangbhoomi from '@/assets/images/Rangbhoomi.png'
import Vyoma from '@/assets/images/VYOMA.png'
import Wanderers from '@/assets/images/Wanderers.png'

export default function Home() {
    return (
        <div>
            {/* first section */}
            <div className="relative h-[70vh]">
                <Image
                    src={Cover}
                    alt="coverPhoto"
                    className="w-full object-cover blur-md h-full absolute top-0 left-0"
                />
                <div className="w-full h-full space-y-8 absolute top-0 text-[#E2E4E7] bg-black/30 left-0 flex flex-col items-center justify-center">
                    <div>
                        <h1 className="text-2xl text-center font-bold">
                            <span>ARENA</span> &nbsp;
                            <span>THEATRE</span> &nbsp;
                            <span>PRODUCTIONS</span>
                        </h1>
                    </div>

                    <div className="bg-white p-4 rounded-full">
                        <Image src={Logo} alt="atp_logo" width={150} />
                    </div>

                    <h3 className="font-semibold text-md">
                        WHERE STORIES UNFOLD
                    </h3>
                </div>
            </div>

            {/* second section */}
            <div className="py-10 flex text-center space-y-6 flex-col items-center">
                <h1 className="text-[#4F5655] text-4xl font-bold">
                    It was only in the theatre that I lived
                </h1>

                <p>-Oscar Wilde</p>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* History */}
                <div className="space-y-3 px-4 w-full">
                    <h1 className="text-xl font-bold mt-4">HISTORY</h1>
                    <div className="flex flex-col items-start space-y-6 mt-4">
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
                </div>

                {/* about us */}
                <div className="mt-[4rem] px-4 space-y-3">
                    <h1 className="text-xl font-bold mt-4">ABOUT US</h1>
                    <p>
                        The impact of Theatre is both powerful and immediate. We
                        envision to produce Plays for audiences of all ages to
                        imbibe deep understanding, empathy, laughter, wonder and
                        excitement. <br />
                        <br />
                        We believe that arts, and Theatre in particular, can{' '}
                        <span className="font-bold">
                            bridge the division between cultures.
                        </span>
                        Here the characters are performing in flesh to create an
                        unparalleled impact that no other media of story telling
                        could ever render. We bring theatre to people in the
                        form of{' '}
                        <span className="font-bold">
                            Play Readings, Theatre Workshops, and Theatre
                            Productions.
                        </span>{' '}
                        <br />
                        <br />
                        <span className="font-bold">Our vision</span> is to
                        establish a vibrant and a diverse community where every
                        individual is inspired to reach their full potential
                        without any barriers, to honour commitment made to
                        ourselves and to the art, to engage in constructive
                        insight and creative improvement, and to embrace
                        discomfort in all its complexity.
                    </p>
                </div>

                {/* founder */}
                <div className="mt-[4rem] px-4 space-y-3 w-full">
                    <h1 className="text-xl font-bold mt-4">OUR FOUNDER</h1>

                    <div className="w-full">
                        <div className="flex md:flex-row flex-col-reverse items-start justify-between">
                            <div>
                                <span className="font-semibold">
                                    Professional Summary:
                                </span>
                                <br />

                                <ul className="list-decimal px-8">
                                    <li>Director</li>
                                    <li>Producer</li>
                                    <li>Actor</li>
                                    <li>Voice Artist and Coach</li>
                                    <li>Model from Bengaluru</li>
                                </ul>
                                <br />
                                <br />
                            </div>

                            <div className="flex flex-col items-center mb-6 md:mb-0 mx-auto md:mx-0">
                                <CoreTeam
                                    image={Tahera}
                                    name="Tahera"
                                    designation="Founder and Director"
                                />
                            </div>
                        </div>

                        <span className="font-semibold">Work History:</span>
                        <ul className="list-disc w-full px-8">
                            <li>
                                <span className="font-semibold">Founder</span>{' '}
                                of Arena Theatre Productions.
                            </li>
                            <li>
                                Directed and Produced various plays such as
                                Fourteen, Taramandal, The Vagina Monologues, To
                                Kill A Mockingbird and The Seagull.
                            </li>
                            <li>
                                Associated with Theatre for almost a decade.
                            </li>
                            <li>Voice Coach at Live Wires Media Institute.</li>
                            <li>
                                Theatre Coach at KAFQA Academy and Chrysallis
                                High School.
                            </li>
                            <li>
                                Conducted many workshops on Voice, Acting and
                                Personality Development for Individuals and
                                Corporates.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* core team */}
                <div className="mt-[4rem] px-4 space-y-3 w-full">
                    <h1 className="text-xl font-bold mt-4">CORE TEAM</h1>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <CoreTeam
                            image={Tahera}
                            name="Tahera"
                            designation="Founder and Director"
                        />

                        <CoreTeam
                            image={Fazal}
                            name="Fazal Khan"
                            designation="Production Manager and set"
                        />

                        <CoreTeam
                            image={Nishitha}
                            name="Nishitha Sudershan"
                            designation="Production"
                        />

                        <CoreTeam
                            image={Saad}
                            name="Syed Saad"
                            designation="Writer and Production"
                        />

                        <CoreTeam
                            image={Gautam}
                            name="Gautam P B"
                            designation="Production Head"
                        />

                        <CoreTeam
                            image={Minna}
                            name="Minna"
                            designation="Discipline in-charge"
                        />
                    </div>
                </div>

                {/* where we've performed */}
                <div className="mt-[4rem] px-4 space-y-3 w-full">
                    <h1 className="text-xl font-bold mt-4">
                        WHERE WE&apos;VE PERFORMED
                    </h1>

                    <div className="flex flex-wrap gap-12 items-center justify-center">
                        <Spaces image={RS} location="Rangashankara" />
                        <Spaces image={Jagriti} location="Jagriti Theatre" />
                        <Spaces
                            image={Chowdiah}
                            location="Chowdiah Memorial Hall"
                        />
                        <Spaces
                            image={Prestige}
                            location="Prestige Srihari Khoday Centre for Performing Arts"
                        />
                        <Spaces
                            image={BIC}
                            location="Bangalore International Centre"
                        />
                        <Spaces image={AG} location="Atta Galatta" />
                        <Spaces image={Dhurii} location="Dhurii" />

                        <Spaces image={Rangbhoomi} location="Rangbhoomi, HYD" />
                        <Spaces image={Vyoma} location="VYOMA Artspace" />
                        <Spaces
                            image={Wanderers}
                            location="Wanderers, Kalyanagar"
                        />
                    </div>
                </div>
            </div>

            {/* the mission */}
            <div className="mt-[6rem] py-20 flex items-center flex-col px-8 space-y-6 bg-black w-full">
                <h1 className="font-bold max-w-xl text-white text-3xl text-center">
                    &quot;The mission of the theatre , after all, is to raise
                    the consciousness of people to their human
                    possibilities&quot;
                </h1>

                <h3 className="text-gray-500">Arthur Miller</h3>
            </div>
        </div>
    )
}
