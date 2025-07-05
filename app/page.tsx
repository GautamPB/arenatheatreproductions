import Image from 'next/image'
import Banner from '@/assets/images/Banner.png'
import CoreTeam from '@/components/CoreTeam'
import Spaces from '@/components/Spaces'
import Tahera from '@/assets/images/Tahera.jpg'
import Fazal from '@/assets/images/Fazal.jpeg'
import Nishitha from '@/assets/images/Nishitha.png'
import Saad from '@/assets/images/Saad.jpeg'
import Gautam from '@/assets/images/Gautam.png'
import Krishna from '@/assets/images/Krishna.jpeg'
import Liana from '@/assets/images/Liana.jpeg'
import Elisha from '@/assets/images/Elisha.png'
import Nithin from '@/assets/images/Nithin.jpeg'
import Sheiraphi from '@/assets/images/Sheiraphi.jpeg'
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
import tkr from '@/assets/images/posters/tkr.png'
// import upcoming from '@/assets/images/posters/upcoming.png'
// import quoteBg from '@/assets/backgrounds/quoteBg.jpg'

export default function Home() {
    return (
        <div className="top-0">
            {/* first section */}
            <div className="max-h-screen">
                {/* <Image
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
                </div> */}
                <Image
                    src={Banner}
                    width={1920}
                    height={1080}
                    alt="banner"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* second section */}
            <div className="h-[50vh] relative items-center">
                {/* <Image
                    src={quoteBg}
                    alt="quoteBackground"
                    className="w-full h-full absolute top-0"
                /> */}
                <div className="absolute px-8 bg-[#6C6C6C] text-white h-full w-full top-0 flex-col flex text-center space-y-6 justify-center">
                    <h1 className="text-[#FFFFFF] text-[3rem] italic font-bold">
                        &quot;It was only in the Theatre that I lived&quot;
                    </h1>

                    <p className="text-2xl">- Oscar Wilde</p>
                </div>
            </div>

            <div className="mx-auto">
                {/* upcoming event */}
                <div className="py-[4rem] bg-[#FFFFFF]">
                    <div className="space-y-3 px-4 w-full max-w-5xl mx-auto">
                        <h1 className="text-4xl mb-20 text-center font-bold text-[#5B98FF] mt-4">
                            UPCOMING EVENT
                        </h1>

                        <div className="flex flex-col md:flex-row items-center md:space-y-0 md:space-x-[10rem] space-y-10 mt-4 space">
                            <div className="flex flex-col items-center space-y-4 bg-[#1C1C1C] p-4">
                                <Image
                                    src={tkr}
                                    alt="tkrPoster"
                                    width={100}
                                    height={200}
                                    className="max-w-[30rem] min-w-[20rem]"
                                />

                                <h1 className="text-[#D6E6FF] font-bold italic text-2xl">
                                    THE KITE RUNNER
                                </h1>
                            </div>

                            <div>
                                <h1 className="italic font-bold text-4xl text-[#533D92] text-left">
                                    &quot;For you, a thousand times over&quot;
                                </h1>

                                <br />
                                <br />

                                <div>
                                    <p className="text-[#533D92] text-xl font-bold">
                                        VENUE -{' '}
                                        <span className="text-[#1C1C1C]">
                                            TATA Theatre, NCPA, Mumbai
                                        </span>
                                    </p>
                                    <p className="text-[#533D92] text-xl font-bold">
                                        DATE -{' '}
                                        <span className="text-[#1C1C1C]">
                                            June 22nd, 2025
                                        </span>
                                    </p>
                                    <p className="text-[#533D92] text-xl font-bold">
                                        TIME -{' '}
                                        <span className="text-[#1C1C1C]">
                                            3:00PM & 7:00PM
                                        </span>
                                    </p>
                                    {/* <p>
                                    Ticket link:{' '}
                                    <a
                                        target="_blank"
                                        href="https://in.bookmyshow.com/explore/home/bengaluru"
                                        className="hover:underline"
                                    >
                                        www.bookmyshow.com
                                    </a>
                                </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* History */}
                <div className="space-y-3 my-[8rem] px-8 w-full max-w-5xl mx-auto">
                    <h1 className="text-4xl mb-10 text-[#5B98FF] text-center font-bold mt-4">
                        HISTORY
                    </h1>
                    <div className="flex flex-col items-start space-y-6 mt-4">
                        <p className="text-center text-2xl">
                            <span className="font-bold">
                                Arena Theatre Productions
                            </span>{' '}
                            was established on{' '}
                            <span className="font-bold">
                                21 April, 2021. Tahera
                            </span>
                            , founded the company on fervent passion. An
                            extraordinary theatre troupe, born from humble
                            roots, evolves into a powerhouse of innovation.
                            Their journey weaves tales of resilience,
                            collaborative spirit, and groundbreaking
                            performances. Pushing boundaries, embracing
                            diversity, they transform stages into realms where{' '}
                            <span className="font-bold">
                                creativity, passion, and storytelling converge,
                                leaving audiences spellbound.
                            </span>
                        </p>

                        <div className="flex items-center justify-center w-full mt-10">
                            <p className="italic text-4xl text-center">
                                This is{' '}
                                <span className="font-bold text-[#5B98FF] underline">
                                    where stories unfold...
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* about us */}
                <div className="my-[4rem] px-4 py-[8rem] w-full left-0 mx-0 bg-[#FFFFFF] space-y-3">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl text-[#5B98FF] font-bold mt-4 text-center mb-10">
                            ABOUT US
                        </h1>
                        <p className="text-2xl text-center">
                            <span className="font-bold">
                                The impact of Theatre
                            </span>{' '}
                            is both powerful and immediate. We envision to
                            produce Plays for audiences of all ages to imbibe
                            deep understanding, empathy, laughter, wonder and
                            excitement. <br />
                            <br />
                            We believe that arts, and Theatre in particular,{' '}
                            <span className="font-bold">
                                can bridge the division between cultures.
                            </span>{' '}
                            Here the characters are performing in flesh to
                            create an unparalleled impact that no other media of
                            story telling could ever render. We bring theatre to
                            people in the form of{' '}
                            <span className="font-bold">
                                Play Readings, Theatre Workshops, and Theatre
                                Productions.
                            </span>
                            <br />
                            <br />
                            <span className="font-bold">Our vision</span> is to
                            establish a vibrant and a diverse community where
                            every individual is inspired to reach their full
                            potential without any barriers, to honour commitment
                            made to ourselves and to the art, to engage in
                            constructive insight and creative improvement, and
                            to embrace discomfort in all its complexity.
                        </p>
                    </div>
                </div>

                {/* founder */}
                <div className="mt-[4rem] px-4 py-12 space-y-3 w-full max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold mt-4 mb-10 text-[#5B98FF] text-center">
                        OUR FOUNDER
                    </h1>

                    <div className="w-full flex md:flex-row flex-col-reverse items-center">
                        <div>
                            <div className="flex md:flex-row flex-col-reverse items-start justify-between">
                                <div>
                                    <span className="font-semibold text-2xl">
                                        Professional Summary:
                                    </span>
                                    <br />

                                    <ul className="list-decimal text-xl px-8">
                                        <li>Director</li>
                                        <li>Producer</li>
                                        <li>Actor</li>
                                        <li>Voice Artist and Coach</li>
                                        <li>Model from Bengaluru</li>
                                    </ul>
                                    <br />
                                    <br />
                                </div>
                            </div>

                            <span className="font-semibold text-2xl">
                                Work History:
                            </span>
                            <ul className="list-disc w-full text-xl px-8">
                                <li>
                                    <span className="font-semibold">
                                        Founder
                                    </span>{' '}
                                    of Arena Theatre Productions.
                                </li>
                                <li>
                                    Directed and Produced various plays such as
                                    Fourteen, Taramandal, The Vagina Monologues,
                                    To Kill A Mockingbird and The Seagull.
                                </li>
                                <li>
                                    Associated with Theatre for almost a decade.
                                </li>
                                <li>
                                    Voice Coach at Live Wires Media Institute.
                                </li>
                                <li>
                                    Theatre Coach at KAFQA Academy and
                                    Chrysallis High School.
                                </li>
                                <li>
                                    Conducted many workshops on Voice, Acting
                                    and Personality Development for Individuals
                                    and Corporates.
                                </li>
                                <li>
                                    Theatre Coach at New Horizon Public School,
                                    Basil Woods International and Utsaah Spirit
                                    of Learning
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center mb-6 space-y-4 w-full md:mb-0 mx-auto md:mx-0">
                            <Image
                                src={Tahera}
                                alt="founder"
                                width={150}
                                className="w-60 h-60 rounded-full object-cover"
                            />
                            <div className="flex flex-col items-center">
                                <h1 className="font-bold text-2xl">Tahera</h1>
                                <h3 className="text-xl">
                                    Founder and Director
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[6rem] py-20 flex items-center justify-center flex-col px-8 space-y-6 bg-[#137EBB] w-full">
                    <h1 className="font-bold max-w-full italic text-white text-[2rem] text-center">
                        &quot;Great theatre is about challenging how we think
                        and encouraging us to fantasize about a world we aspire
                        to.&quot;
                    </h1>

                    <h3 className="text-white text-2xl">-Willem Dafoe</h3>
                </div>

                {/* core team */}
                <div className="px-4 w-full bg-[#FFFFFF] py-12">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl text-[#5B98FF] font-bold mt-4 text-center">
                            CORE TEAM
                        </h1>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
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
                                designation="Production"
                            />

                            <CoreTeam
                                image={Krishna}
                                name="Krishna Sharma"
                                designation="Social Media"
                            />

                            <CoreTeam
                                image={Liana}
                                name="Liana Tissan"
                                designation="Production"
                            />

                            <CoreTeam
                                image={Elisha}
                                name="Elisha Alex"
                                designation="Production"
                            />

                            <CoreTeam
                                image={Nithin}
                                name="K Nithin"
                                designation="Production"
                            />

                            <CoreTeam
                                image={Sheiraphi}
                                name="Sheiraphi Silda Thangkhiew"
                                designation="Production"
                            />
                        </div>
                    </div>
                </div>

                {/* the mission */}
                <div className="py-20 flex items-center flex-col px-8 space-y-6 bg-black w-full">
                    <h1 className="font-bold max-w-xl italic text-white text-3xl text-center">
                        &quot;The mission of the theatre , after all, is to
                        raise the consciousness of people to their human
                        possibilities&quot;
                    </h1>

                    <h3 className="text-gray-500">-Arthur Miller</h3>
                </div>

                {/* where we've performed */}
                <div className="px-4 py-[8rem] space-y-3 w-full">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl text-[#5B98FF] font-bold mb-8 text-center">
                            WHERE WE&apos;VE PERFORMED
                        </h1>

                        <div className="flex flex-wrap gap-12 items-center justify-center mt-4">
                            <Spaces image={RS} location="Rangashankara" />
                            <Spaces
                                image={Jagriti}
                                location="Jagriti Theatre"
                            />
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

                            <Spaces
                                image={Rangbhoomi}
                                location="Rangbhoomi HYD"
                            />
                            <Spaces image={Vyoma} location="VYOMA Artspace" />
                            <Spaces
                                image={Wanderers}
                                location="Wanderers Kalyanagar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
