import { Link } from "gatsby"
import * as React from "react"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./index.css"
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <main className="container max-w-full flex flex-auto items-center justify-center mt-20 mb-52 md:mb-56 lg:mb-60 xl:mb-72">
      <div className="z-10 text-body text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-black font-bold text-center">
        <p className="max-w-[1200px] mb-8">Donnez vie à vos idées grâce à notre <a className="text-primary font-bold">savoir-faire</a> en <a className="text-primary font-bold">solutions digitales</a></p>
        <p className="max-w-[1200px] text-sm md:text-lg font-normal mb-5 md:mb-0">ZENO est une ESN qui transforme vos idées en solutions digitales performantes.</p>
        <a className="text-base cursor-pointer text-black bg-secondary px-8 py-4 rounded-full hover:bg-yellow-300 transition delay-50 duration-200">
          <Link to="/">Contactez nous&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ArrowForwardIcon fontSize="inherit" /></Link>
        </a>
      </div>
      <div className="col col-auto">
        <div className="absolute z-0 inset-y-0 left-0 -top-12">
          <StaticImage src={"../../images/svg/bg-intro_left.svg"} alt={"Svg 1"}
          placeholder="none"
          className="w-[50%] md:w-[70%] lg:w-[80%] xl:w-[100%] 2xl:w-[100%]" />
        </div>
        <div className="absolute z-0 inset-y-0 right-0 -top-12 md:-top-24">
          <StaticImage src={"../../images/svg/bg-intro_right.svg"} alt={"Svg 2"}
          placeholder="none"
          className="w-[350px] max-w-none md:w-[520px] lg:w-[580px] xl:w-auto 2xl:w-auto right-0" />
        </div>
      </div>
    </main>
  )
}

export default About
