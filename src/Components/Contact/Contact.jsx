import React from "react"
import "./Contact.css"
import { FaWhatsapp } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { FiAtSign } from "react-icons/fi";



function Contact() {
    return (
        <div className='contato'>
            <div className='contato-card'>
                <img src="" alt="" />
                <p className='contato-title'> Contato </p>
            </div>

            <div className='whatsapp'>
                <FaWhatsapp className="FaWhatsapp"/>
                (12) 99193-6532
            </div>

            <div className='local'>
                <HiMapPin className="HiMapPin"/>
                Av. John Fitzgerald Kenedy, 50 - Jardim das Nações, Taubaté - SP, 12030-200
            </div>

            <div className="email">
                <FiAtSign className="FiAtSign"/>
                <a> mynds@mynds.com.br </a>

            </div>
        </div>
    )
}

export default Contact
