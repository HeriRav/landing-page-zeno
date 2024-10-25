import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = 80;
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
};

const Service = () => {

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        event.preventDefault();
        scrollToSection(id);
    };

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
        <main id="service" className="scroll-mt-28">
            <div className="section-title flex md:mt-20 justify-center relative" data-aos="fade-up">
                <h2><span className="text-center text-primary font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Nos services</span></h2>
            </div>
            <div className="flex flex-col xl:flex-row mt-20 justify-center items-center justify-items-center relative max-w-[1200px] mx-auto">
                <div className="flex-initial m-2 max-md:ml-8 max-md:mr-8" data-aos="flip-left">
                    <div className="md:w-[620px] lg:w-[850px] xl:w-[385px] xl:h-[504px] shadow-2xl bg-white border border-gray-200 rounded-3xl dark:bg-white dark:border-white">
                        <a>
                            <StaticImage src={"../../images/bg-services_1.png"} alt={"Image Services 1"}
                                className="w-full h-[250px] lg:h-[504px] xl:h-[290px] object-cover rounded-t-3xl"
                            />
                        </a>
                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight dark:text-black">
                                    {title_services_first}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-800">
                                {description_services_first}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-initial m-2 max-md:ml-8 max-md:mr-8" data-aos="flip-down">
                    <div className="md:w-[620px] lg:w-[850px] xl:w-[385px] xl:h-[504px] shadow-2xl bg-white border border-gray-200 rounded-3xl dark:bg-white dark:border-white">
                        <a>
                            <StaticImage src={"../../images/bg-services_2.png"} alt={"Image Services 2"}
                                className="w-full h-[250px] lg:h-[504px] xl:h-[290px] object-cover rounded-t-3xl"
                            />
                        </a>
                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight dark:text-black">
                                    {title_services_second}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-800">
                                {description_services_second}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-initial m-2 max-md:ml-8 max-md:mr-8" data-aos="flip-right">
                    <div className="md:w-[620px] lg:w-[850px] xl:w-[385px] xl:h-[504px] shadow-2xl bg-white border border-gray-200 rounded-3xl dark:bg-white dark:border-white">
                        <a>
                            <StaticImage src={"../../images/bg-services_3.png"} alt={"Image Services 3"}
                                className="w-full h-[250px] lg:h-[504px] xl:h-[290px] object-cover rounded-t-3xl"
                            />
                        </a>
                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight dark:text-black">
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
            <a className="flex justify-center mt-10 w-56 mx-auto text-xl cursor-pointer right-button text-black bg-secondary px-8 py-2 md:px-8 md:py-4 rounded-full hover:bg-yellow-300 transition delay-75 duration-200" data-aos="fade-up" data-aos-offset="-150">
                <Link to="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contactez nous</Link>
            </a>
        </main>
    )
}

export default Service