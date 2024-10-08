import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Service = () => {

    const title_services_first: string = "Application Web"
    const title_services_second: string = "Application Mobile"
    const title_services_third: string ="Design UI/UX"
    const description_services_first: string = "Développement d'applications web modernes et sécurisées," + 
    " parfaitement adaptées à vos besoins business, en utilisant les dernières technologies du marché"
    const description_services_second: string = "Conception et développement d'applications mobiles optimisées pour Android et iOS," + 
    " garantissant une expérience utilisateur exceptionnelle et une performance optimale."
    const description_services_third: string = "Création d'interfaces utilisateur intuitives et ergonomiques," + 
    " qui placent l'expérience utilisateur au centre de chaque interaction digitale."

    return (
        <main>
            <div className="flex lg:mt-20 justify-center relative">
                <hr className="absolute h-[0.1rem] bg-primary ml-[270px] top-14 w-8 -rotate-45" />
                <hr className="absolute h-[0.1rem] bg-primary mr-[270px] top-14 w-8 rotate-45" />
                <hr className="absolute h-[0.1rem] bg-primary ml-[270px] w-8 rotate-45" />
                <hr className="absolute h-[0.1rem] bg-primary mr-[270px] w-8 -rotate-45" />
                <p className="text-center text-primary font-bold text-5xl">Nos services</p>
            </div>
            <div className="flex flex-col xl:flex-row mt-20 justify-center items-center justify-items-center relative max-w-[1200px] mx-auto">
                <div className="flex-initial m-2">
                    <div className="w-[385px] h-[504px] shadow-2xl bg-white border border-gray-200 rounded-3xl dark:bg-white dark:border-white">
                        <a>
                            <StaticImage src={"../../images/bg-services_1.png"} alt={"Image Services 1"} />
                        </a>
                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-black">
                                    {title_services_first}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-800">
                                {description_services_first}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-initial m-2">
                    <div className="w-[385px] h-[504px] shadow-2xl bg-white border border-gray-200 rounded-3xl dark:bg-white dark:border-white">
                        <a>
                            <StaticImage src={"../../images/bg-services_2.png"} alt={"Image Services 2"} />
                        </a>
                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-black">
                                    {title_services_second}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-800">
                                {description_services_second}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-initial m-2">
                    <div className="w-[385px] h-[504px] shadow-2xl bg-white border border-gray-200 rounded-3xl dark:bg-white dark:border-white">
                        <a>
                            <StaticImage src={"../../images/bg-services_3.png"} alt={"Image Services 3"} />
                        </a>
                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-black">
                                    {title_services_third}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-800">
                                {description_services_third}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="flex justify-center mt-10 w-56 mx-auto text-xl cursor-pointer right-button text-black bg-secondary px-8 py-2 md:px-8 md:py-4 rounded-full hover:bg-yellow-300 transition delay-50 duration-200">
                <Link to="/">Contactez nous</Link>
            </a>
        </main>
    )
}

export default Service