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
            <div className="grid grid-cols-2 py-10">
                <Link to="/">
                <StaticImage
                    className="w-4/5 sm:w-1/3 md:w-1/3 xl:w-1/4 2xl:w-1/6 h-auto ml-8 md:ml-16 xl:ml-20"
                    src={"../../images/logo-zeno.png"}
                    alt={"Logo Zeno"}
                    placeholder='none'
                />
                </Link>
                <div className="lg:flex ml-auto text-left md:mr-[100px] xl:mr-[150px] md:space-x-5 xl:space-x-20">
                    <span className="">
                        <div className="text-lg font-bold">
                        Adresse
                        </div>
                        <div className="text-xs md:text-base font-semibold">
                        Lot Ankadivato, Antananarivo 101, <br />Madagascar
                        </div>
                    </span>
                    <span className="text-left">
                        <div className="text-lg font-bold">
                        Contact
                        </div>
                        <div className="text-xs md:text-base font-semibold">
                        <MailOutlineIcon />&nbsp; contact@zeno-inno.com
                        </div>
                        <div className="text-xs md:text-base font-semibold">
                        <AddIcCallIcon />&nbsp; +261 32 90 079 91
                        </div>
                    </span>
                </div>
            </div>
            <hr className="w-[90%] mx-auto my-auto" />
            <div className="grid grid-cols-2 py-10">
                <div className="text-left md:ml-16 xl:ml-20">
                    <span>
                        © {new Date().getFullYear()}, All right reserved.
                    </span>
                </div>
                <div className="text-right md:mr-16 xl:mr-20 space-x-4">
                    <a href="" target="_blank"><FacebookOutlined /></a>
                    <a href="" target="_blank"><Instagram /></a>
                    <a href="" target="_blank"><X /></a>
                    <a href="https://www.linkedin.com/company/zeno-innovation/" target="_blank"><LinkedIn /></a>
                </div>
            </div>
        </main>
    )
}

export default Footer