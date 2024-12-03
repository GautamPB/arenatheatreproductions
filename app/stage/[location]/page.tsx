type Props = { params: Promise<{ location: string }> }

const Location = async ({ params }: Props) => {
    const stage = decodeURI(
        await params.then((result) => {
            return result.location
        })
    )
    console.log(stage)
    return (
        <div>
            <h1>{stage}</h1>
        </div>
    )
}

export default Location
