import {Camera, GitHub, Instagram, Linkedin, Twitter} from "react-feather"
import Navheads from "./nav_heads"

function Navbar(){
    return(
        <div className="navbar_layout">
            <Navheads href="/">Home</Navheads>
            <Navheads href="/about">About</Navheads>
            <Navheads href="/work">Work</Navheads>
            <a href="https://github.com/yashbir"><GitHub color="white" size={50} /></a>
            <a className="social_right" href="https://www.linkedin.com/in/yashbir-singh-16aba0b5/"><Linkedin color="white" size={50} /></a><br />
            <a href="https://twitter.com/yashbirr"><Twitter color="white" size={50} /></a>
            <a className="social_right" href="https://www.instagram.com/odinlp2"><Instagram color="white" size={50} /></a>
            <style jsx>{`

            .navbar_layout{
                padding-left: 5%;
                padding-top: 9%;
                background: #101010;
                position: absolute;
                width: 22%;
                height: 83%;
            }

            .social_right{
                margin-left: 20px;
            }

            `}   
            </style>
        </div>
    )
}

export default Navbar
