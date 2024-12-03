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
                    lineTwo={
                        'Staged at Vyoma Art Space, JP Nagar on 13th January 2022. Despite covid restrictions, 100+ people were in attendance.'
                    }
                    lineThree={''}
                    swap={false}
                />

                <Venture
                    poster={taramandal}
                    title="Taramandal"
                    lineOne={
                        'ATP’s first large scale production took place in 2022, when we brought Neel Chaudhuri’s “Taramandal” to bangalore audiences. '
                    }
                    lineTwo={
                        'The play is a collection of short stories by Satyajit Ray, on the lives of actors and artists across ages. '
                    }
                    lineThree={
                        'Shows were succesffully put up in BIC & Jagriti theatres in Bengaluru, and we also travelled with it to Rangbhoomi in Hyderabad. '
                    }
                    swap={true}
                />

                <Venture
                    poster={tvm}
                    title="The Vagina Monologues"
                    lineOne={
                        "On the occasion of international Women’s Day, we staged - 'The Vagina Monologues', written by Eve Ensler, which is an innovative  play that features some of the candid, funny, painful, yearning, insights of women talking about their experience with their Vaginas."
                    }
                    lineTwo={
                        'Our most requested production by far, The Vagina Monolgoues resonated with Bangalore audiences so much, it became our longest running production at the time. '
                    }
                    lineThree=""
                    swap={false}
                />

                <Venture
                    poster={tkamb}
                    title="To Kill A Mockingbird"
                    lineOne={
                        'Our Largest and longest running production yet- “To Kill A Mockingbird” which we have successfully staged at the  Chowdiah Memorial Hall, Prestige Centre for Performing arts, Jagriti Theatre and the prestigious Rangashankara.  '
                    }
                    lineTwo={
                        'A footfall of over 1000 was recorded for each of the productions. '
                    }
                    lineThree=""
                    swap={true}
                />

                <Venture
                    poster={seagull}
                    title="The Seagull"
                    lineOne={
                        'In our quest to ingnite passion in international theatre works, we undertook what many consider one of the hardest plays to do -legendary Russian playright, Anton Chekhov’s “The Seagull”'
                    }
                    lineTwo={
                        'Adapted to a contemporary setting by our inhouse writer, The Seagull debuted at BIC and is our most frequently performed production.'
                    }
                    lineThree=""
                    swap={false}
                />
            </div>
        </div>
    )
}

export default Ventures
