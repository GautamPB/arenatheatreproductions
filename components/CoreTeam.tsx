import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type Props = {
    image: StaticImport
    name: string
    designation: string
}

const CoreTeam = ({ image, name, designation }: Props) => {
    return (
        <div className="flex flex-col items-center space-y-4">
            <Image
                src={image}
                alt="coreTeam"
                width={150}
                className="rounded-full"
            />

            <div className="flex flex-col items-center">
                <h1 className="font-bold text-lg">{name}</h1>
                <h3>{designation}</h3>
            </div>
        </div>
    )
}

export default CoreTeam
