import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import "./index.css"

const Contact = () => {
    return (
        <main id='contact' className='bg-gray-200 mt-20 scroll-mt-20'>
            <div className='py-10 bg-secondary text-white text-center text-xl md:text-3xl block lg:hidden'>
                <span className='flex flex-col'>Un projet ?</span>
                <span className='flex flex-col'>Nous vous aidons</span>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-1'>
                <div className='py-10'>
                    <div className='py-10 hidden md:absolute lg:block bg-secondary text-white font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-right right-0 top-0 lg:top-0 w-[1000px] lg:w-[800px] xl:w-[1200px] 2xl:w-[1200px] h-full background'>
                        <span className='flex flex-col mt-28 text-right right-0 mr-8 lg:mr-16 xl:mr-20'>Un projet ?</span>
                        <span className='flex flex-col text-right right-0 mr-8 lg:mr-16 xl:mr-20'>Nous vous aidons</span>
                    </div>
                    <form className="max-w-xl lg:max-w-md xl:max-w-lg 2xl:max-w-xl mr-auto mx-auto lg:ml-16 xl:ml-20 2xl:ml-20">
                        <div className="mb-2">
                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4" placeholder="Nom" required />
                        </div>
                        <div className="mb-2">
                            <input type="tel" id="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4" placeholder="Tel" required />
                        </div>
                        <div className="mb-2">
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4" placeholder="E-Mail" required />
                        </div>
                        <div className="mb-6">
                            <textarea rows={1} id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-4 pb-12 pt-3" placeholder='Message' required />
                        </div>
                        <button type="submit" className="btn-text font-bold text-white cursor-pointer bg-primary px-12 py-4 rounded-full hover:bg-purple-600 transition delay-50 duration-200">Envoyer</button>
                    </form>
                    <div className='hidden 2xl:grid 2xl:grid-cols-1'>
                        <StaticImage src={'../../images/bg-contact.png'} alt={'Image Contact'}
                            className='absolute w-[534px] top-0 right-0 mr-[560px] 2xl:mr-[380px] bg-image'
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact