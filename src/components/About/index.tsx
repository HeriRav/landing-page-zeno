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
    <main className="flex justify-center w-full about-main">
      <div className="absolute z-10 grid grid-cols-2">
        <div className="flex flex-col ml-2 md:ml-36 space-y-10">
          <span className="text-white md:text-5xl font-bold text-left md:mt-20">{left_title}</span>
          <span className="text-white text-xs md:text-base font-semibold text-left md:w-5/6">{left_description}</span>
          <StaticImage src={"../../images/bg-about.png"}
          alt={"Arrière-plan"}
          className="left-image"
          />
        </div>
        <div className="flex flex-col mr-2 md:mr-36 space-y-10">
          <span className="text-white md:text-5xl font-bold text-right md:mt-48">{right_title}</span>
          <span className="text-white text-xs md:text-base font-semibold text-right md:w-5/6 ml-auto">{right_description}</span>
        </div>
      </div>
      <a className="absolute bottom-8 z-10 text-base cursor-pointer right-button text-black bg-secondary px-8 py-2 md:px-12 md:py-4 rounded-full hover:bg-yellow-300 transition delay-50 duration-200">
          <Link to="/">Contactez nous</Link>
      </a>
      <div className="text-white background-1 right-text">
      </div>
      <div className="text-white background-2">
      </div>
      <StaticImage src="../../images/bg-about.jpeg"
          alt="Arrière-plan"
          placeholder="blurred"
          quality={100}
          className="background-3"
      />
    </main>
  )
}

export default About
