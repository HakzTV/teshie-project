import { useEffect, useState } from 'react';
import Logo from '../assets/images/logo.png';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [authUser, setAuthUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                const uid = user.uid;
                console.log(uid);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out');
        }).catch((error) => {
            console.log(error);
        });
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    {/* Off-canvas menu */}
                    <div className={`offcanvas-menu ${menuOpen ? 'open' : ''}`}>
                        <div className="hamburger-menu" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                        </div>
                        <div className="links">
                            <ul>
                                <li><a href="/aboutUs">About Us</a></li>
                                {/* <li><a href="/about-team">Team</a></li> */}
                                <li><a href="/products">Shop</a></li>
                                {/* <li><a href="/services">Services</a></li> */}
                                <li><a href="/">FAQs</a></li>
                            <li><a href="/contact">Contact</a></li>

                            </ul>
                            <div className="action-buttons">
                                <a href="/gallery" className="btn-alt">
                                    <div className="pulse-ring"></div>
                                    <div className="outline"></div>
                                    Gallery
                                </a>
                                <a href="/bookNow" className="btn">Book now</a>
                                {authUser ? (
                                    <div className="profile-dropdown">
                                        <FontAwesomeIcon icon={faUser} className="profile-icon" />
                                        <div className="dropdown-content">
                                            <a href="/">My Account</a>
                                            <button onClick={userSignOut}>Sign out</button>
                                        </div>
                                    </div>
                                ) : (
                                    <a href="/login" className="btn">Login</a>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Regular navbar content */}
                   
                    <div className="links">
                        <ul>
                            <li><a href="/aboutUs">About Us</a></li>
                            {/* <li><a href="/about-team">Team</a></li> */}
                            <li><a href="/products">Shop</a></li>
                            {/* <li><a href="/services">Services</a></li> */}
                            <li><a href="/">FAQs</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="logo">
                        <a href="/" className="logo">
                            <img src={Logo} alt="Logo" />
                        </a>
                    </div>
                    <div className="action-buttons">
                        <a href="/shop" className="btn-alt">
                            <div className="pulse-ring"></div>
                            <div className="outline"></div>
                            Buy Now
                        </a>
                        {/* <a href="/bookNow" className="btn">Book now</a>
                        {authUser ? (
                            <div className="profile-dropdown">
                                <FontAwesomeIcon icon={faUser} className="profile-icon" />
                                <div className="dropdown-content">
                                    <a href="/">My Account</a>
                                    <button onClick={userSignOut}>Sign out</button>
                                </div>
                            </div>
                        ) : (
                            <a href="/login" className="btn">Login</a>
                        )} */}
                    </div>
                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

