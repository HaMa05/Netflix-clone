import React, {useState, useEffect} from 'react';
import './Nav.css';


function Nav() {
    const [show, handShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                //true
                handShow(true);
            } else handShow(false);
        });

        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://www.flaticon.com/svg/static/icons/svg/3529/3529959.svg"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
