import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

const TBM = () => {
    return (
        <div className="max-w-5xl mx-auto mt-6 p-4">
            <h1
                className={`${dancingScript.className} text-4xl font-bold text-center`}
            >
                Tumhaare Baare Mein
            </h1>
        </div>
    )
}

export default TBM
