import { Link } from 'react-router-dom';
import './navbar.css'
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    // const specificDivRef = useRef(null);
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //       if (specificDivRef.current && !specificDivRef.current.contains(event.target)) {
    //         // Clicked outside the specific div, handle it here
    //         console.log('Clicked outside the specific div');
    //       }
    //     };

    //     window.addEventListener('click', handleClickOutside);

    //     return () => {
    //       window.removeEventListener('click', handleClickOutside);
    //     };
    //   }, []);

    //above is to disable the outside click  

    const [menuVisible, setMenuVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth <= 800) {
            setMenuVisible(false);
        } else {
            setMenuVisible(true);
        }
    }, [windowWidth]);

    const handleBarClick = () => {
        document.getElementsByClassName("xIcon")[0].classList.add("display1")
        document.getElementsByClassName("barIcon")[0].classList.add("display2")
        document.getElementsByClassName("DropdownList")[0].classList.add("display1")
        document.getElementsByClassName("SubHome")[0].classList.add("display3")
    }
    const handleXclick = () => {
        document.getElementsByClassName("xIcon")[0].classList.remove("display1")
        document.getElementsByClassName("barIcon")[0].classList.remove("display2")
        document.getElementsByClassName("DropdownList")[0].classList.remove("display1")
        document.getElementsByClassName("SubHome")[0].classList.remove("display3")
    }

    return (
        <>
            <div className="Navbar">
                <Link to="/"><span className="PersonName">VINAY KUMAR</span></Link>
                {menuVisible ? (<span className="DetailsBar">
                    <Link to="about"><p className="Questions NavbarAbout">ABOUT</p></Link>
                    <Link to="projects"><p className="Questions NavbarProjects">PROJECTS</p></Link>
                    <Link to="achieve"><p className="Questions NavbarAchieve">ACHIEVE</p></Link>
                </span>) :
                    (<span className='DropdownMenu'>
                        <span className='Icons'>
                            <span className="barIcon material-symbols-outlined" onClick={handleBarClick}>menu</span>
                            <span className="xIcon material-symbols-outlined" onClick={handleXclick}>close</span>
                        </span>
                        <span className='DropdownList'>
                            <li><Link to="about" style={{ color: "white" }}>ABOUT</Link></li>
                            <li><Link to="projects" style={{ color: "white" }}>PROJECTS</Link></li>
                            <li><Link to="achieve" style={{ color: "white" }}>ACHIEVE</Link></li>
                        </span>
                    </span>)}
            </div>
        </>
    )
}

export default Navbar;