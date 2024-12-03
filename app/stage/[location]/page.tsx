type Props = {
    params: {
        location: string
    }
}

const Location = ({ params: { location } }: Props) => {
    const stage = decodeURI(location)
    return (
        <div>
            <h1>{stage}</h1>
        </div>
    )
}

export default Location
