import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import imgAbout from "../../images/svg/bg-about.svg"
import "./index.css"

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  const offset = 80;
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const About = () => {

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    scrollToSection(id);
  };

  const left_title: string = "À propos de nous"
  const right_title: string = "Où nous intervenons"
  const left_description: string = "ZENO, basée à Madagascar, est une ESN qui transforme vos idées en solutions digitales performantes." + 
  " Notre équipe d'experts allie savoir-faire local et vision internationale, avec un focus sur l’humain et la collaboration."
  const right_description: string = "Que vous soyez une startup locale ou une grande entreprise internationale," + 
  " ZENO vous accompagne dans vos projets de transformation digitale." + 
  " Basés à Madagascar, nous proposons des services de développement web, mobile, et de design pour des clients dans le monde entier." + 
  " Notre promesse : vous fournir des solutions sur mesure, répondant aux exigences les plus élevées tout en offrant un excellent rapport qualité/prix."

  return (
    <main id="about" className="relative flex justify-center w-full about-main -mb-20 md:mb-10 scroll-mt-20">
      <div className="absolute z-10 grid grid-rows-2 md:hidden gap-x-10 h-[500px]">
        <div className="flex flex-col ml-8 mr-8 space-y-2" data-aos="fade-right">
          <span className="text-white text-lg font-bold text-left mt-7">{left_title}</span>
          <span className="text-white text-xs font-semibold text-left">{left_description}</span>
          <StaticImage src={"../../images/bg-about.png"}
          alt={"Arrière-plan"}
          className="w-[120px] md:w-[120px] lg:w-[230px] xl:w-[300px] 2xl:w-[349px]"
          />
        </div>
        <div className="flex flex-col mr-8 ml-8 space-y-2" data-aos="fade-left">
          <span className="text-white text-lg font-bold text-right mt-2">{right_title}</span>
          <span className="text-white text-xs font-semibold text-right ml-auto">{right_description}</span>
        </div>
      </div>
      <div className="hidden absolute z-10 md:grid grid-cols-2 gap-x-10">
        <div className="flex flex-col ml-2 md:ml-16 lg:ml-20 xl:ml-20 2xl:ml-20 space-y-10" data-aos="fade-right">
          <span className="text-white text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-left md:mt-8 lg:mt-20">{left_title}</span>
          <span className="text-white text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-semibold text-left lg:w-5/6">{left_description}</span>
          <StaticImage src={"../../images/bg-about.png"}
          alt={"Arrière-plan"}
          className="w-[120px] md:w-[120px] lg:w-[230px] xl:w-[300px] 2xl:w-[349px] hidden md:block"
          />
        </div>
        <div className="flex flex-col mr-2 md:mr-16 lg:mr-20 xl:mr-20 2xl:mr-20 space-y-10" data-aos="fade-left">
          <span className="text-white text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-right md:mt-20 lg:mt-40 xl:mt-48">{right_title}</span>
          <span className="text-white text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-semibold text-right lg:w-5/6 ml-auto">{right_description}</span>
        </div>
      </div>
      <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="absolute bottom-4 md:bottom-8 z-10 text-xl font-bold cursor-pointer text-black bg-secondary px-8 py-2 lg:px-12 lg:py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 ease-linear" data-aos="fade-up" data-aos-offset="-150">
          <Link to="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contactez nous</Link>
      </a>
      <div className="text-white background-1 h-[500px] md:h-[400px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]" data-aos="fade-left">
      </div>
      <div className="text-white background-2 h-[500px] md:h-[400px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      </div>
      <StaticImage src="../../images/bg-about.jpeg"
          alt="Arrière-plan"
          placeholder="blurred"
          quality={100}
          className="background-3 invisible md:visible h-[500px] md:h-[400px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] w-full z-0"
      />
      <img src={imgAbout} alt="Image à propos"
          className="absolute hidden md:block z-50 right-0 w-[50px] md:w-[80px] lg:w-[140px] xl:w-[160px] 2xl:w-[180px] mr-2 mt-6 md:mr-2 md:mt-2 lg:mr-24 lg:mt-6 xl:mr-20 xl:mt-6 2xl:mr-20 2xl:mt-8"
      />
    </main>
  )
}

export default About
