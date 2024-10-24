import * as React from "react"
import '../../styles/global.css'
import { FacebookOutlined } from "@mui/icons-material"
import { Instagram } from "@mui/icons-material"
import { X } from "@mui/icons-material"
import { LinkedIn } from "@mui/icons-material"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
    return (
        <main data-aos="fade-in">
            <div className="md:flex md:grid-cols-2 py-10 max-sm:space-y-8">
                <div className="w-[120px] mx-auto sm:ml-8 md:ml-16 xl:ml-20">
                    <Link to="/">
                        <StaticImage
                            src={"../../images/logo-zeno.png"}
                            alt={"Logo Zeno"}
                            placeholder='none'
                        />
                    </Link>
                </div>
                <div className="lg:flex text-center ml-auto md:text-left md:mr-[100px] xl:mr-[150px] md:space-x-5 xl:space-x-20">
                    <span className="">
                        <div className="text-lg font-bold">
                        Adresse
                        </div>
                        <div className="text-xs md:text-base font-semibold">
                        Lot Ankadivato, Antananarivo 101, <br />Madagascar
                        </div>
                    </span>
                    <span className="md:text-left">
                        <div className="text-lg font-bold">
                        Contact
                        </div>
                        <div className="text-xs md:text-base font-semibold">
                        <MailOutlineIcon />&nbsp; <a href="mailto:contact@zeno-inno.com" className="hover:text-black/60">contact@zeno-inno.com</a>
                        </div>
                        <div className="text-xs md:text-base font-semibold">
                        <AddIcCallIcon />&nbsp; <a href="tel:+261 32 90 079 91" className="hover:text-black/60">+261 32 90 079 91</a>
                        </div>
                    </span>
                </div>
            </div>
            <hr className="w-[90%] mx-auto my-auto bg-primary" />
            <div className="grid grid-cols-2 py-10">
                <div className="text-center sm:text-left md:ml-16 xl:ml-20">
                    <span>
                        © {new Date().getFullYear()}, All right reserved.
                    </span>
                </div>
                <div className="text-center sm:text-right md:mr-16 xl:mr-20 space-x-4">
                    <a href="" target="_blank" className="hover:text-black/60"><FacebookOutlined /></a>
                    <a href="" target="_blank" className="hover:text-black/60"><Instagram /></a>
                    <a href="" target="_blank" className="hover:text-black/60"><X /></a>
                    <a href="https://www.linkedin.com/company/zeno-innovation/" target="_blank" className="hover:text-black/60"><LinkedIn /></a>
                </div>
            </div>
        </main>
    )
}

export default Footer