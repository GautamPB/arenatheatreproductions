import fourteen from '@/assets/images/posters/fourteen.png'
import taramandal from '@/assets/images/posters/taramandal.png'
import tvm from '@/assets/images/posters/tvm.png'
import tkamb from '@/assets/images/posters/tkamb.png'
import seagull from '@/assets/images/posters/seagull.png'
import Venture from '@/components/Venture'

const Ventures = () => {
    return (
        <div className="max-w-7xl mx-auto mt-6 p-4">
            <h1 className="text-2xl font-bold">Our Ventures</h1>

            <div className="mt-8 space-y-16">
                <Venture
                    poster={fourteen}
                    title="Fourteen"
                    lineOne={
                        "Tahera’s Directoral Debut, Fourteen was a play based around The Pringles residence, experiencing a tumultuous night where a grand dinner party planned sees it's fair share of hiccups as guests drop out at the eve of the festivities."
                    }
                    swap={false}
                    pagePath="/plays/fourteen"
                />

                <Venture
                    poster={taramandal}
                    title="Taramandal"
                    lineOne={
                        'ATP’s first large scale production took place in 2022, when we brought Neel Chaudhuri’s “Taramandal” to bangalore audiences. '
                    }
                    swap={true}
                    pagePath="/plays/taramandal"
                />

                <Venture
                    poster={tvm}
                    title="The Vagina Monologues"
                    lineOne={
                        "On the occasion of international Women’s Day, we staged - 'The Vagina Monologues', written by Eve Ensler, which is an innovative play where women talk about their experience with their Vaginas."
                    }
                    swap={false}
                    pagePath="/plays/the-vagina-monologues"
                />

                <Venture
                    poster={tkamb}
                    title="To Kill A Mockingbird"
                    lineOne={
                        'Our Largest and longest running production yet- “To Kill A Mockingbird” was a massive success and loved by every audience member.'
                    }
                    swap={true}
                    pagePath="/plays/to-kill-a-mockingbird"
                />

                <Venture
                    poster={seagull}
                    title="The Seagull"
                    lineOne={
                        "Our first step to ignite passion in international theatre, we successfully staged what many consider one of the hardest plays ever, Anton Chekhov's The Seagull which was very well received by our audiences."
                    }
                    swap={false}
                    pagePath="/plays/the-seagull"
                />
            </div>
        </div>
    )
}

export default Ventures
