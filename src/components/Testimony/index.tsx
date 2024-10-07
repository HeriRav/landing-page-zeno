import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Testimony = () => {

    const title_testimony_first: string = "Bazar du manga"
    const description_testimony_first: string = "Grâce à Zeno SARL, notre site web a pris une nouvelle dimension." + 
    " Leur équipe a su comprendre nos besoins et les traduire en une application fluide et intuitive. Un partenaire de confiance !"

    return (
        <main>
            <div className="flex lg:mt-20 justify-center relative">
                <hr className="absolute h-[0.1rem] bg-primary ml-[300px] top-14 w-8 -rotate-45" />
                <hr className="absolute h-[0.1rem] bg-primary mr-[300px] top-14 w-8 rotate-45" />
                <hr className="absolute h-[0.1rem] bg-primary ml-[300px] w-8 rotate-45" />
                <hr className="absolute h-[0.1rem] bg-primary mr-[300px] w-8 -rotate-45" />
                <p className="text-center text-primary font-bold text-5xl">Témoignages</p>
            </div>
            <a href="" className="flex flex-col mt-20 h-[233px] p-8 items-center bg-white border border-purple-500 rounded-3xl shadow md:flex-row md:max-w-xl max-w-[1200px] mx-auto">
                <div className="flex-shrink-0">
                    <StaticImage src={'../../images/bg-testimony_1.png'} alt={'Image témoignage 1'} className="w-20 h-20 rounded-full" />
                </div>
                <div className="flex flex-col p-4 leading-normal md:w-4/5 md:text-left">
                    <p className="mb-2 text-xl font-bold tracking-tight text-purple-500">
                        {title_testimony_first}
                    </p>
                    <p className="mb-3 font-normal text-gray-900">
                        {description_testimony_first}
                    </p>
                </div>
            </a>
        </main>
    )
}

export default Testimony