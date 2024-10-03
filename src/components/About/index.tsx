import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import "./index.css"

const About = () => {
  return (
    <main className="flex justify-center w-full about-main">
      <div className="text-white background-1">
        <p className="text-5xl font-bold main-right-text">Où nous intervenons</p>
        <p className="text-base font-semibold second-right-text">Que vous soyez une startup locale ou une grande entreprise 
          internationale, ZENO vous accompagne dans vos projets de 
          transformation digitale. Basés à Madagascar, nous proposons des 
          services de développement web, mobile, et de design pour des 
          clients dans le monde entier. Notre promesse : vous fournir des 
          solutions sur mesure, répondant aux exigences les plus élevées tout 
          en offrant un excellent rapport qualité/prix.</p>
      </div>
      <div className="text-white background-2">
        <p className="mt-16 ml-32">
          <h1 className="text-5xl font-bold main-left-text">À propos de nous</h1>
          <p className="text-base font-semibold text-balance mb-[-5px] second-left-text">ZENO, basée à Madagascar, est une ESN qui transforme vos idées en </p>
          <p className="text-base font-semibold text-balance mb-[-5px] third-left-text">solutions digitales performantes. Notre équipe d'experts allie savoir-</p>
          <p className="text-base font-semibold text-balance mb-[-5px] fourth-left-text">faire local et vision internationale, avec un focus sur l’humain et la </p>
          <p className="text-base font-semibold text-balance fourth-left-text">collaboration.</p>
          <StaticImage src={"../../images/bg-about.png"}
          alt={"Arrière-plan"}
          className="left-image"
          />
        </p>
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
