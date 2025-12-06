import './Header.css'
import logo from '../../images/Header/logo.png'
import dandruff from '../../images/Header/dandruff.png'
import { useState } from 'react'
import modal from '../../images/Header/women-modal.png'

const arr = ['Product Page With Sidebar', 'Product Page Without Sidebar', 'Horizontal Thumbnails', 'Vertical Thumbnails', 'Addtocart Sticky', 'Vertical Tabs']  

function ModalComponent({ text }) {
    return (
        <div className='modal-block-text'>
            <h5>Menu Category List</h5>
            {text.map((elem, index) => (
                <a href="" key={index}>{elem}</a>
            ))}
        </div>
    )
}



export default function Header() {
    const [color, setColor] = useState("#000");
    const [flex, setFlex] = useState("none")


    return (
        <>
            <header>
                <div className="header__container">
                    <img src={logo} alt="" className="logo" />
                    <nav className="header__nav">
                        <button onClick={() => setFlex('flex') } href="" className="header__link">home</button>
                        <button onClick={() => setFlex('flex')} href="" className="header__link">Shop</button>
                        <button onClick={() => setFlex('flex')} href="" className="header__link">blog</button>
                        <button onClick={() => setFlex('flex')} href="" className="header__link">Sale</button>
                        <button onClick={() => setFlex('flex')} href="" className="header__link" style={{ width: "110px" }}>contact us</button>
                        <div className='header__box-search'>
                            <input type="text" placeholder='search' className="header__search" />
                            <img src={dandruff} alt="" />
                        </div>
                    </nav>
                    <div className="header__acount-box">
                        <div className="header__acount-box-link">
                            <a href="" className="header__link">SIGN IN</a>
                            <a href="" className="header__link">CREATE AN ACCOUNT</a>
                        </div>
                        <svg className='like' onClick={() => setColor("#ca0505")}
                            style={{ fill: color, cursor: "pointer" }} viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7252 1.19971C17.9598 1.19981 20.6002 3.66229 20.6002 6.896C20.6002 8.84688 19.6741 10.5189 18.3219 12.1099C16.9813 13.6871 15.0857 15.3378 12.9215 17.2251L11.6901 18.3032L10.9 18.9946L10.11 18.3032L8.87854 17.2251C6.71434 15.3378 4.81878 13.6871 3.47815 12.1099C2.12597 10.5189 1.19989 8.84688 1.19983 6.896C1.19983 3.66229 3.84024 1.19981 7.07483 1.19971C8.47459 1.19971 9.82622 1.67813 10.9 2.48291C11.9738 1.67813 13.3255 1.19971 14.7252 1.19971Z" stroke="white" stroke-width="2.4" />
                        </svg>
                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8682 5.40015L16.7266 19.9998H1.27344L2.13184 5.40015H15.8682Z" stroke="white" stroke-width="2.4" />
                            <path d="M5 4.19995V2.19995C5 1.64767 5.44772 1.19995 6 1.19995H12C12.5523 1.19995 13 1.64767 13 2.19995V4.19995" stroke="white" stroke-width="2.4" /></svg>
                        <div className="header__box-cart">
                            <p className="header__cart-text">Shopping Cart</p>
                            <p className="header__cart-text">{"0,00"} EUR</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: flex }} className="modal-window">
                    <ModalComponent text={arr} />
                    <ModalComponent text={arr} />
                    <ModalComponent text={arr} />
                    <img src={modal} alt="" />
                </div>
            </header>
        </>
    )
}