import {
    useState,
    useEffect,
    createRef,
    useCallback
} from 'react';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import './NavBar.css';

// files
import ResumeFile from '../../pdf/sethvm_resume.pdf';

export default function NavBar() {

    const [ expanded, setExpanded ] = useState(false);

    const node = createRef();

    const toggleNav = () => {
        setTimeout(() => { setExpanded(!expanded) }, 160);
    }

    const closeNav = useCallback(() => {
        setTimeout(() => { setExpanded(false) }, 160);
    }, []);

    // dropdown outside-click-close interaction
    const handleClick = useCallback((e) => {
        if (node.current.contains(e.target) || expanded === false) return;
        closeNav();
    }, [expanded, node, closeNav]);

    // navbar event listener
    useEffect(() => { 
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [handleClick]);

    return (
        <nav id='navbar'
        className='animate__animated animate__fadeIn'
        aria-label='navbar'>
            <Link
            className='nav-brand'
            aria-label='Seth Morenos'
            to='/'>
                <span style={{ color: '#004080' }}>SETH</span>&nbsp;
                <span style={{ color: '#1A1A1A' }}>MORENOS</span>
            </Link>
            <div
            className='toggle-button'
            onClick={toggleNav}
            ref={node}>
                <Hamburger
                color='#004080'
                size={24}
                toggled={expanded}
                toggle={setExpanded}
                label='Show Menu'/>
            </div>
            <div
            className={`nav-overlay ${ expanded ? 'active' : null }`}
            aria-label='navbar menu'
            onClick={() => handleClick}>
                <ul>
                    <li>
                        <Link aria-label='Work' to='/'>Work</Link>
                    </li>
                    <li><Link aria-label='About' to='/about'>About</Link></li>
                    <li>
                        <a rel='noopener noreferrer'
                        aria-label='Résumé'
                        href={ResumeFile}
                        target='_blank'>Résumé</a>
                    </li>
                </ul>
            </div>
            <Link
            aria-label='About'
            to='/about'>
                <div className='nav-desktop'>ABOUT</div>
            </Link>
        </nav>
    );
}
