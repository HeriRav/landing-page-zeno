import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import "./index.css"

const Contact = () => {
    return (
        <main className='bg-gray-200 mt-20'>
            <div className='flex flex-col md:grid md:grid-cols-1'>
                <div className='p-10'>
                    <div className='absolute bg-secondary text-white font-bold text-5xl lg:text-4xl xl:text-6xl 2xl:text-6xl text-right right-0 top-0 w-[1000px] lg:w-[800px] xl:w-[1200px] 2xl:w-[1200px] h-full background'>
                        <span className='flex flex-col mt-36 text-right right-0 mr-32 2xl:mr-36'>Un projet ?</span>
                        <span className='flex flex-col text-right right-0 mr-32 2xl:mr-36'>Nous vous aidons</span>
                    </div>
                    <form className="max-w-xl lg:max-w-md xl:max-w-lg 2xl:max-w-xl mr-auto mx-auto lg:ml-0 xl:ml-0 2xl:ml-36">
                        <div className="mb-2">
                            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4" placeholder="Nom" required />
                        </div>
                        <div className="mb-2">
                            <input type="tel" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4" placeholder="Tel" required />
                        </div>
                        <div className="mb-2">
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4" placeholder="E-Mail" required />
                        </div>
                        <div className="mb-6">
                            <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-4 pb-12 pt-3" placeholder='Message' required />
                        </div>
                        <button type="submit" className="text-sm text-white cursor-pointer bg-primary px-12 py-4 rounded-full hover:bg-purple-600 transition delay-50 duration-200">Envoyer</button>
                    </form>
                    <div className='hidden 2xl:grid 2xl:grid-cols-1'>
                        <StaticImage src={'../../images/bg-contact.png'} alt={'Image Contact'}
                            className='absolute w-[534px] top-0 right-0 mr-[560px]'
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact