import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai"
import { BiUser, BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceFill } from "react-icons/ri"

import "./navbar.css"

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#home")

    return (
        <nav>
            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><BiUser /></a>
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBook /></a>
            <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><RiServiceFill /></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Navbar