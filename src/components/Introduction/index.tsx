import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./index.css"
// import { StaticImage } from "gatsby-plugin-image";
import imgLeft from "../../images/svg/bg-intro_left.svg";
import imgRight from "../../images/svg/bg-intro_right.svg"

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

  return (
    <main className="relative animate-fadeIn container max-w-full flex flex-auto items-center justify-center mt-16 mb-52 lg:mb-52 xl:mb-72">
      <div className="z-10 text-body text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-black font-bold text-center">
        <p className="lg:max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1200px] mb-8 mr-8 ml-8 md:mr-16 md:ml-16 lg:mr-20 lg:ml-20 xl:mr-20 xl:ml-20">Donnez vie à vos idées grâce à notre <a className="text-primary font-bold">savoir-faire</a> en <a className="text-primary font-bold">solutions digitales</a></p>
        <p className="lg:max-w-[500px] xl:max-w-[1200px] text-sm lg:text-lg font-normal mb-8 mr-8 ml-8 md:mb-10 md:mx-auto lg:mx-auto xl:mr-20 xl:ml-20">ZENO est une ESN qui transforme vos idées en solutions digitales performantes.</p>
        <a className="text-base cursor-pointer mr-8 ml-8 md:mr-16 md:ml-16 lg:mr-20 lg:ml-20 xl:mr-20 xl:ml-20 text-black bg-secondary px-6 py-2 md:px-8 md:py-4 rounded-full hover:bg-yellow-300 transition delay-75 duration-200">
          <Link to="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contactez nous&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ArrowForwardIcon fontSize="inherit" /></Link>
        </a>
      </div>
      <div className="col col-auto">
        <div className="absolute z-0 inset-y-0 left-0 -top-12">
          {/* <StaticImage src={"../../images/svg/bg-intro_left.svg"} alt={"Svg 1"}
          placeholder="none"
          className="hidden lg:block lg:w-[80%] xl:block xl:w-[90%] 2xl:block 2xl:w-[100%]" /> */}
          <img src={imgLeft} alt="Svg gauche"
          className="hidden lg:block lg:w-[80%] xl:block xl:w-[90%] 2xl:block 2xl:w-[100%]" />
        </div>
        <div className="absolute z-0 inset-y-0 right-0 -top-12 md:-top-24">
          {/* <StaticImage src={"../../images/svg/bg-intro_right.svg"} alt={"Svg 2"}
          placeholder="none"
          className="hidden lg:block lg:w-[580px] xl:block xl:w-[600px] 2xl:block 2xl:w-auto right-0" /> */}
          <img src={imgRight} alt="Svg droit"
          className="hidden lg:block lg:w-[580px] xl:block xl:w-[600px] 2xl:block 2xl:w-auto right-0" />
        </div>
      </div>
    </main>
  )
}

export default About