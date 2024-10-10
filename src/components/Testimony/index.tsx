import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Testimony = () => {

    const title_testimony_first: string = "Bazar du manga";
    const title_testimony_second: string = "Level Up Services";
    const title_testimony_lorem: string = "Lorem Ipsum";
    const description_testimony_first: string = "Grâce à Zeno SARL, notre site web a pris une nouvelle dimension." + 
    " Leur équipe a su comprendre nos besoins et les traduire en une application fluide et intuitive. Un partenaire de confiance !";
    const description_testimony_second: string = "Zeno SARL a développé notre application mobile en un temps record," + 
    " tout en garantissant une qualité irréprochable." + 
    " Leur équipe à Madagascar est très réactive et compétente. Je recommande vivement";
    const description_testimony_lorem: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," + 
    " when an unknown printer took a galley of type and scrambled it to make a type specimen book"

    return (
        <main id='testimony' className='scroll-mt-28'>
            <div className="flex lg:mt-20 justify-center relative mt-20 sm:mt-20 md:mt-20">
                <hr className="absolute h-[0.1rem] bg-primary ml-[120px] md:ml-[190px] lg:ml-[230px] xl:ml-[320px] 2xl:ml-[380px] mt-7 md:mt-10 lg:mt-10 xl:mt-14 w-6 md:w-8 -rotate-45" />
                <hr className="absolute h-[0.1rem] bg-primary mr-[120px] md:mr-[190px] lg:mr-[230px] xl:mr-[320px] 2xl:mr-[380px] mt-7 md:mt-10 lg:mt-10 xl:mt-14 w-6 md:w-8 rotate-45" />
                <hr className="absolute h-[0.1rem] bg-primary ml-[120px] md:ml-[190px] lg:ml-[230px] xl:ml-[320px] 2xl:ml-[380px] w-6 md:w-8 rotate-45" />
                <hr className="absolute h-[0.1rem] bg-primary mr-[120px] md:mr-[190px] lg:mr-[230px] xl:mr-[320px] 2xl:mr-[380px] w-6 md:w-8 -rotate-45" />
                <p className="text-center text-primary font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Témoignages</p>
            </div>
            <div>
                <StaticImage src={'../../images/svg/bg-testimony.svg'} alt={'Svg Témoignage'} 
                    className='absolute right-0 top-0 -z-10 mt-8 md:-mt-24 lg:-mt-32 xl:-mt-36 2xl:-mt-40 w-[340px] md:w-[280px] lg:w-[320px] xl:w-[400px] 2xl:w-[440px]'
                />
            </div>
            <div className='lg:grid lg:grid-cols-2 grid-rows-2 mt-20 gap-x-[30px] gap-y-[30px] lg:max-h-[1200px] z-10'>
                <div className="flex flex-col lg:mr-0 lg:mt-0 mt-8 h-[300px] sm:h-[233px] p-8 items-center bg-white border border-purple-500 rounded-3xl shadow md:flex-row md:w-[620px] lg:w-full lg:max-w-xl max-w-[1200px] mx-auto">
                    <div className="flex-shrink-0 mb-auto">
                        <StaticImage src={'../../images/bg-testimony_1.png'} alt={'Image témoignage 1'} className="w-10 h-10 lg:w-20 lg:h-20 rounded-full" />
                    </div>
                    <div className="flex flex-col p-4 leading-normal md:w-4/5 md:text-left">
                        <p className="lg:mb-2 text-xl font-bold tracking-tight text-purple-500">
                            {title_testimony_first}
                        </p>
                        <p className="mb-10 font-normal text-gray-900">
                            {description_testimony_first}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:ml-0 lg:mt-0 mt-8 h-[300px] sm:h-[233px] p-8 items-center bg-white border border-purple-500 rounded-3xl shadow md:flex-row md:w-[620px] lg:w-full lg:max-w-xl max-w-[1200px] mx-auto">
                    <div className="flex-shrink-0 mb-auto">
                        <StaticImage src={'../../images/bg-testimony_2.png'} alt={'Image témoignage 2'} className="w-10 h-10 lg:w-20 lg:h-20 rounded-full" />
                    </div>
                    <div className="flex flex-col p-4 leading-normal md:w-4/5 md:text-left">
                        <p className="mb-2 text-xl font-bold tracking-tight text-purple-500">
                            {title_testimony_second}
                        </p>
                        <p className="mb-10 font-normal text-gray-900">
                            {description_testimony_second}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:mr-0 mt-8 lg:mt-0 h-[300px] sm:h-[233px] p-8 items-center bg-white border border-purple-500 rounded-3xl shadow md:flex-row md:w-[620px] lg:w-full lg:max-w-xl max-w-[1200px] mx-auto">
                    <div className="flex-shrink-0 mb-auto">
                        <StaticImage src={'../../images/bg-testimony_3.png'} alt={'Image témoignage 3'} className="w-10 h-10 lg:w-20 lg:h-20 rounded-full" />
                    </div>
                    <div className="flex flex-col p-4 leading-normal md:w-4/5 md:text-left">
                        <p className="mb-2 text-xl font-bold tracking-tight text-purple-500">
                            {title_testimony_lorem}
                        </p>
                        <p className="mb-4 font-normal text-gray-900">
                            {description_testimony_lorem}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:ml-0 mt-8 lg:mt-0 h-[300px] sm:h-[233px] p-8 items-center bg-white border border-purple-500 rounded-3xl shadow md:flex-row md:w-[620px] lg:w-full lg:max-w-xl max-w-[1200px] mx-auto">
                    <div className="flex-shrink-0 mb-auto">
                        <StaticImage src={'../../images/bg-testimony_3.png'} alt={'Image témoignage 4'} className="w-10 h-10 lg:w-20 lg:h-20 rounded-full" />
                    </div>
                    <div className="flex flex-col p-4 leading-normal md:w-4/5 md:text-left">
                        <p className="mb-2 text-xl font-bold tracking-tight text-purple-500">
                            {title_testimony_lorem}
                        </p>
                        <p className="mb-4 font-normal text-gray-900">
                            {description_testimony_lorem}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Testimony