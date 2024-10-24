import React, { useEffect } from 'react'
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
        <main id='testimony' className='relative scroll-mt-28'>
            <div className="section-title flex lg:mt-20 justify-center relative mt-20 sm:mt-20 md:mt-20" data-aos="fade-down">
                <h2><span className="text-center text-primary font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Témoignages</span></h2>
            </div>
            <div>
                <StaticImage src={'../../images/svg/bg-testimony.svg'} alt={'Svg Témoignage'} 
                    className='absolute right-0 top-0 -z-10 mt-8 md:-mt-20 lg:-mt-24 xl:-mt-28 2xl:-mt-32 w-[340px] md:w-[280px] lg:w-[320px] xl:w-[400px] 2xl:w-[440px]'
                />
            </div>
            <div className='lg:grid xl:grid-cols-2 grid-rows-2 mt-20 gap-x-[30px] gap-y-[30px] lg:max-h-[1200px] z-10'>
                <div className="flex flex-col xl:mr-0 lg:mt-0 mt-8 h-auto p-8 items-center bg-white border border-purple-500 rounded-3xl shadow md:flex-row w-[95%] md:w-[620px] lg:w-full lg:max-w-[850px] xl:max-w-xl max-w-[1200px] mx-auto">
                    <div className="flex-shrink-0 mb-auto" data-aos="zoom-in">
                        <StaticImage src={'../../images/bg-testimony_1.png'} alt={'Image témoignage 1'} className="w-10 h-10 lg:w-20 lg:h-20 rounded-full" />
                    </div>
                    <div className="flex flex-col p-4 leading-normal md:w-4/5 md:text-left" data-aos="zoom-in">
                        <p className="lg:mb-2 text-xl font-bold tracking-tight text-purple-500">
                            {title_testimony_first}
                        </p>
                        <p className="mb-10 font-normal text-gray-900">
                            {description_testimony_first}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col xl:ml-0 lg:mt-0 mt-8 h-auto p-8 items-center bg-white border border-purple-500 rounded-3xl shadow md:flex-row w-[95%] md:w-[620px] lg:w-full lg:max-w-[850px] xl:max-w-xl max-w-[1200px] mx-auto">
                    <div className="flex-shrink-0 mb-auto" data-aos="zoom-in">
                        <StaticImage src={'../../images/bg-testimony_2.png'} alt={'Image témoignage 2'} className="w-10 h-10 lg:w-20 lg:h-20 rounded-full" />
                    </div>
                    <div className="flex flex-col p-4 leading-normal md:w-4/5 md:text-left" data-aos="zoom-in">
                        <p className="mb-2 text-xl font-bold tracking-tight text-purple-500">
                            {title_testimony_second}
                        </p>
                        <p className="mb-10 font-normal text-gray-900">
                            {description_testimony_second}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col xl:mr-0 mt-8 lg:mt-0 h-auto p-8 items-center bg-white border border-purple-500 rounded-3xl shadow md:flex-row w-[95%] md:w-[620px] lg:w-full lg:max-w-[850px] xl:max-w-xl max-w-[1200px] mx-auto">
                    <div className="flex-shrink-0 mb-auto" data-aos="zoom-in">
                        <StaticImage src={'../../images/bg-testimony_3.png'} alt={'Image témoignage 3'} className="w-10 h-10 lg:w-20 lg:h-20 rounded-full" />
                    </div>
                    <div className="flex flex-col p-4 leading-normal md:w-4/5 md:text-left" data-aos="zoom-in">
                        <p className="mb-2 text-xl font-bold tracking-tight text-purple-500">
                            {title_testimony_lorem}
                        </p>
                        <p className="mb-4 font-normal text-gray-900">
                            {description_testimony_lorem}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col xl:ml-0 mt-8 lg:mt-0 h-auto p-8 items-center bg-white border border-purple-500 rounded-3xl shadow md:flex-row w-[95%] md:w-[620px] lg:w-full lg:max-w-[850px] xl:max-w-xl max-w-[1200px] mx-auto">
                    <div className="flex-shrink-0 mb-auto" data-aos="zoom-in">
                        <StaticImage src={'../../images/bg-testimony_3.png'} alt={'Image témoignage 4'} className="w-10 h-10 lg:w-20 lg:h-20 rounded-full" />
                    </div>
                    <div className="flex flex-col p-4 leading-normal md:w-4/5 md:text-left" data-aos="zoom-in">
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