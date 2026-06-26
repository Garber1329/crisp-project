import header from './Header.module.css';
import logo from '../../images/Header/logo.png';
import searchIcon from '../../images/Header/dandruff.png';
import { memo, useRef, useState } from 'react';
import { PiHandbagBold } from 'react-icons/pi';
import modalPreview from '../../images/Header/women-modal.png';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
  { to: '/', label: 'home' },
  { to: '/catalog', label: 'Catalog' },
  { to: '/shop', label: 'Electronic shop' },
  { to: '/blog', label: 'blog' },
  { to: '/sale', label: 'Sale' },
  { to: '/contacts', label: 'Contact us' },
];

const MODAL_CATEGORIES = [
  {
    title: 'Account',
    links: [
      { to: '/register', label: 'Register' },
      { to: '/login', label: 'Login' },
      { to: '/dashboard', label: 'Dashboard' },
    ],
  },
  {
    title: 'Shopping',
    links: [
      { to: '/cart', label: 'Cart' },
      { to: '/catalog', label: 'Catalog' },
      { to: '/product/1', label: 'Product' },
    ],
  },
];

const CLOSE_DELAY = 200;

const navLinkClassName = ({ isActive }) =>
  clsx(header.headerLink, isActive && header.headerLinkActive);

const ModalCategory = memo(function ModalCategory({ title, links, onLinkClick }) {
  return (
    <div className={header.modalBlockText}>
      <h5>{title}</h5>
      <div className={header.modalLinkBox}>
        {links.map(({ to, label }) => (
          <NavLink key={to} to={to} className={navLinkClassName} onClick={onLinkClick}>
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
});

export default function Header() {
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeTimerRef = useRef(null);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openModal = () => {
    cancelClose();
    setIsModalOpen(true);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => {
      setIsModalOpen(false);
    }, CLOSE_DELAY);
  };

  const closeModalNow = () => {
    cancelClose();
    setIsModalOpen(false);
  };

  return (
    <header>
      <div className={header.headerContainer}>
        <NavLink to="/dashboard">
          <img src={logo} alt="Logo" className={header.logo} />
        </NavLink>

        <nav className={header.headerNav} onMouseLeave={scheduleClose}>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeModalNow}
              onMouseEnter={openModal}
              className={navLinkClassName}
            >
              {label}
            </NavLink>
          ))}

          <div className={header.headerBoxSearch} onMouseEnter={cancelClose}>
            <img src={searchIcon} alt="search-icon" className={header.searchIcon} />
            <input type="text" placeholder="search" className={header.headerSearch} />
          </div>

          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                className={header.modalWindow}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                {MODAL_CATEGORIES.map((category) => (
                  <ModalCategory
                    key={category.title}
                    title={category.title}
                    links={category.links}
                    onLinkClick={closeModalNow}
                  />
                ))}
                <img src={modalPreview} alt="modal-preview" />
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <div className={header.headerAccountBox}>
          <div className={header.headerAccountBoxLink}>
            <NavLink to="/login" className={navLinkClassName}>
              SIGN IN
            </NavLink>
            <NavLink to="/register" className={navLinkClassName}>
              CREATE AN ACCOUNT
            </NavLink>
          </div>

          <svg
            className={clsx(header.like, isLiked && header.likeActive)}
            onClick={() => setIsLiked((prev) => !prev)}
            viewBox="0 0 22 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7252 1.19971C17.9598 1.19981 20.6002 3.66229 20.6002 6.896C20.6002 8.84688 19.6741 10.5189 18.3219 12.1099C16.9813 13.6871 15.0857 15.3378 12.9215 17.2251L11.6901 18.3032L10.9 18.9946L10.11 18.3032L8.87854 17.2251C6.71434 15.3378 4.81878 13.6871 3.47815 12.1099C2.12597 10.5189 1.19989 8.84688 1.19983 6.896C1.19983 3.66229 3.84024 1.19981 7.07483 1.19971C8.47459 1.19971 9.82622 1.67813 10.9 2.48291C11.9738 1.67813 13.3255 1.19971 14.7252 1.19971Z"
              stroke="white"
              strokeWidth="2.4"
            />
          </svg>

          <NavLink to="/cart">
            <PiHandbagBold className={header.handbag} />
          </NavLink>

          <div className={header.headerBoxCart}>
            <p className={header.headerCartText}>Shopping Cart</p>
            <p className={header.headerCartText}>0,00 EUR</p>
          </div>
        </div>
      </div>
    </header>
  );
}
