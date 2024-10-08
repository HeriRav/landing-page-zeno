import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import "./index.css"

const About = () => {

  const left_title: string = "À propos de nous"
  const right_title: string = "Où nous intervenons"
  const left_description: string = "ZENO, basée à Madagascar, est une ESN qui transforme vos idées en solutions digitales performantes." + 
  " Notre équipe d'experts allie savoir-faire local et vision internationale, avec un focus sur l’humain et la collaboration."
  const right_description: string = "Que vous soyez une startup locale ou une grande entreprise internationale," + 
  " ZENO vous accompagne dans vos projets de transformation digitale." + 
  " Basés à Madagascar, nous proposons des services de développement web, mobile, et de design pour des clients dans le monde entier." + 
  " Notre promesse : vous fournir des solutions sur mesure, répondant aux exigences les plus élevées tout en offrant un excellent rapport qualité/prix."

  return (
    <main className="flex justify-center w-full about-main -mb-20 md:mb-10">
      <div className="absolute z-10 grid grid-cols-2 gap-x-10">
        <div className="flex flex-col ml-2 lg:ml-36 space-y-10">
          <span className="text-white text-xl xl:text-5xl 2xl:text-7xl font-bold text-left lg:mt-20">{left_title}</span>
          <span className="text-white text-xs lg:text-base xl:text-base 2xl:text-xl font-semibold text-left lg:w-5/6">{left_description}</span>
          <StaticImage src={"../../images/bg-about.png"}
          alt={"Arrière-plan"}
          className="w-[150px] md:w-[180px] lg:w-[230px] xl:w-[300px] 2xl:w-[349px] hidden md:block"
          />
        </div>
        <div className="flex flex-col mr-2 lg:mr-36 space-y-10">
          <span className="text-white text-xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold text-right lg:mt-40 xl:mt-48">{right_title}</span>
          <span className="text-white text-xs lg:text-base xl:text-base 2xl:text-xl font-semibold text-right lg:w-5/6 ml-auto">{right_description}</span>
        </div>
      </div>
      <a className="absolute bottom-8 z-10 text-xl font-bold cursor-pointer right-button text-black bg-secondary px-8 py-2 md:px-12 md:py-4 rounded-full hover:bg-yellow-300 transition delay-50 duration-200">
          <Link to="/">Contactez nous</Link>
      </a>
      <div className="text-white background-1 h-[300px] md:h-[300px] lg:h-[700px] xl:h-[700px] 2xl:h-[800px]">
      </div>
      <div className="text-white background-2 h-[300px] md:h-[300px] lg:h-[700px] xl:h-[700px] 2xl:h-[800px]">
      </div>
      <StaticImage src="../../images/bg-about.jpeg"
          alt="Arrière-plan"
          placeholder="blurred"
          quality={100}
          className="background-3 h-[300px] md:h-[300px] lg:h-[700px] xl:h-[700px] 2xl:h-[800px] w-full z-0"
      />
      <StaticImage src={"../../images/svg/bg-about.svg"} alt={"Image Svg"}
          className="absolute z-50 right-0 w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px] 2xl:w-[180px] mr-10 mt-48 md:mr-10 md:mt-40 lg:mr-24 lg:mt-6 xl:mr-20 xl:mt-6 2xl:mr-20 2xl:mt-8"
      />
    </main>
  )
}

export default About
