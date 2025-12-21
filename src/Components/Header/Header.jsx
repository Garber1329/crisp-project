import header from './Header.module.css'
import logo from '../../images/Header/logo.png'
import dandruff from '../../images/Header/dandruff.png'
import { useState } from 'react'
import modal from '../../images/Header/women-modal.png'


const arr = [
  'Product Page With Sidebar',
  'Product Page Without Sidebar',
  'Horizontal Thumbnails',
  'Vertical Thumbnails',
  'Addtocart Sticky',
  'Vertical Tabs'
]

function ModalComponent({ text }) {
  return (
    <div className={header['modal-block-text']}>
      <h5>Menu Category List</h5>
      {text.map((elem, index) => (
        <a href="" key={index}>{elem}</a>
      ))}
    </div>
  )
}

export default function Header() {
  const [color, setColor] = useState("#000");
  const [flex, setFlex] = useState("none");

  return (
    <>
      <header>
        <div className={header['header__container']}>
          <img src={logo} alt="" className={header.logo} />

          <nav className={header['header__nav']}>
            <button onMouseUp={() => setFlex('flex')} className={header['header__link']}>home</button>
            <button onMouseUp={() => setFlex('flex')} className={header['header__link']}>Shop</button>
            <button onMouseUp={() => setFlex('flex')} className={header['header__link']}>blog</button>
            <button onMouseUp={() => setFlex('flex')} className={header['header__link']}>Sale</button>
            <button
              onMouseUp={() => setFlex('flex')}
              className={header['header__link']}
              style={{ width: "110px" }}
            >
              contact us
            </button>

            <div className={header['header__box-search']}>
              <input
                type="text"
                placeholder="search"
                className={header['header__search']}
              />
              <img src={dandruff} alt="" />
            </div>
          </nav>

          <div className={header['header__acount-box']}>
            <div className={header['header__acount-box-link']}>
              <a href="" className={header['header__link']}>SIGN IN</a>
              <a href="" className={header['header__link']}>CREATE AN ACCOUNT</a>
            </div>

            <svg
              className={header.like}
              onClick={() => setColor("#ca0505")}
              style={{ fill: color, cursor: "pointer" }}
              viewBox="0 0 22 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7252 1.19971C17.9598 1.19981 20.6002 3.66229 20.6002 6.896C20.6002 8.84688 19.6741 10.5189 18.3219 12.1099C16.9813 13.6871 15.0857 15.3378 12.9215 17.2251L11.6901 18.3032L10.9 18.9946L10.11 18.3032L8.87854 17.2251C6.71434 15.3378 4.81878 13.6871 3.47815 12.1099C2.12597 10.5189 1.19989 8.84688 1.19983 6.896C1.19983 3.66229 3.84024 1.19981 7.07483 1.19971C8.47459 1.19971 9.82622 1.67813 10.9 2.48291C11.9738 1.67813 13.3255 1.19971 14.7252 1.19971Z"
                stroke="white"
                strokeWidth="2.4"
              />
            </svg>

            <div className={header['header__box-cart']}>
              <p className={header['header__cart-text']}>Shopping Cart</p>
              <p className={header['header__cart-text']}>{"0,00"} EUR</p>
            </div>
          </div>
        </div>
        {/* backdrop covers the page to block clicks (e.g. hero/swiper) while modal is open */}
        <div
          className={header['modal-backdrop']}
          onClick={() => setFlex('none')}
          style={{ display: flex === 'flex' ? 'block' : 'none' }}
        />

        <div
          onClick={(e) => e.stopPropagation()}
          style={{ display: flex }}
          className={header['modal-window']}
        >
          <ModalComponent text={arr} />
          <ModalComponent text={arr} />
          <ModalComponent text={arr} />
          <img src={modal} alt="" />
        </div>
      </header>
    </>
  )
}
