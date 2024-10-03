import * as React from "react"
import { Link } from "gatsby"
import '../../styles/global.css'
import './index.css'
import { StaticImage } from "gatsby-plugin-image"
import { useEffect, useState } from "react"

interface HeaderProps {
    siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);
  
    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div
            className="text-2xl text-purple-600 space-x-8"
        >
            <a href="/">
                <StaticImage style={{
                    width: '15%',
                    height: '15%',
                }} src={"../../images/logo-zeno.png"} alt={"Logo Zeno"}/>
            </a>
            {/* {siteTitle} */}
                <a className="text-sm text-black">
                    <Link to="/">À propos</Link>
                </a>
                <a className="text-sm text-black">
                    <Link to="/">Nos services</Link>
                </a>
                <a className="text-sm text-black">
                    <Link to="/">Témoignages</Link>
                </a>
        </div>
        <nav>
            <div className="flex flex-col sm:flex-row">
            <a className="mt-3 text-white rounded-full bg-purple-600 border-8 border-purple-600 hover:border-transparent
            hover:bg-transparent hover:text-purple-600 text-lg sm:mx-3 sm:mt-0 transition delay-50 duration-200 ease-out hover:ease-in"><Link to="/">Contactez nous</Link></a>
            </div>
        </nav>
        </header>
    )
}
  
export default Header