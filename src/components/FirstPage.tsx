import './FirstPage.css';
import { Link } from 'react-router-dom';
import iconLinkedin from './assets/images/linkedin.svg';
import iconGithub from './assets/images/github.svg';
import { MouseEvent, useRef } from 'react';

const Navbar = () => {
    const contactTitleRef = useRef<HTMLParagraphElement>(null);
    const contactsRef = useRef<HTMLDivElement>(null);
    let contactsActive = false;

    const contactsHandler = (e: MouseEvent<HTMLParagraphElement>) => {
        const target = e.target as HTMLElement;
        if (target.className.includes('menuP contactLink') && !contactsActive) {
            contactsActive = true;
            contactTitleRef.current?.classList.add('contactHover');
            return contactsRef.current?.classList.add('animateLinks');
        }
        if (target.className.toLowerCase().includes('contact') && contactsActive) {
            return;
        }
        contactsActive = false;
        contactTitleRef.current?.classList.remove('contactHover');
        return contactsRef.current?.classList.remove('animateLinks');
    }

    return (
        <section className='firstPage'>
            <section className='navbar'>
                <p className='backgroundCredit'>Background by <a className='creditLink' href='https://unsplash.com/@fakurian' target="_blank" rel="noopener noreferrer">@fakurian</a></p>
                <div className='menu' onMouseMove={contactsHandler}>
                    <Link className='menuP aboutLink' to="/about">ABOUT</Link>
                    <Link className='menuP workLink' to="/work">WORK</Link>
                    <p className='menuP contactLink' ref={contactTitleRef}>CONTACT</p>
                    <div className='contactLinksContainer'>
                        <div className='contactLinks' ref={contactsRef}>
                            <div className='contactLinkDiv'>
                                <a className='contactP' href='https://www.linkedin.com/in/nuno-craveiro/' target="_blank" rel="noopener noreferrer">Linkedin</a>
                                <a className='contactImg' href='https://www.linkedin.com/in/nuno-craveiro/' target="_blank" rel="noopener noreferrer"><img className='contactImg' src={iconLinkedin} alt="icon-linkedin"/></a>
                            </div>
                            <div className='contactLinkDiv'>
                                <a className='contactP' href='https://github.com/nunocraveiro' target="_blank" rel="noopener noreferrer">Github</a>
                                <a className='contactImg' href='https://github.com/nunocraveiro' target="_blank" rel="noopener noreferrer"><img className='contactImg' src={iconGithub} alt="icon-github"/></a>
                            </div>
                            <div className='contactLinkDiv'>
                                <a className='contactP' href='mailto:nunocrmartins@gmail.com' target="_blank" rel="noopener noreferrer">Email</a>
                                <a className='material-symbols-outlined contactImg' href='mailto:nunocrmartins@gmail.com' target="_blank" rel="noopener noreferrer">mail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='centralText'>
                <div className='hello'>
                    {'Hello!'.split("").map((char, i) => <span className='helloSpan' key={i} style={{'--animation-order': i} as React.CSSProperties}>{char}</span>)}
                </div>
                <p className='p2'>My name is <span className='nuno'>Nuno</span></p>
                <p className='p3'>and I'm a web developer</p>
            </div>
            <div className="sliderContainer">
                <div className="slider">
                    <div>
                        <h1>
                            <span>Frontend development</span><span>/</span><span>Backend development</span><span>/</span><span>UX/UI design</span><span>/</span><span>Music composition</span><span>/</span><span>Adaptability</span><span>/</span><span>Teamwork</span><span>/</span><span>Creativity</span><span>/</span><span>Critical thinking</span><span>/</span>&nbsp;
                        </h1>
                        <h1>
                            <span>Frontend development</span><span>/</span><span>Backend development</span><span>/</span><span>UX/UI design</span><span>/</span><span>Music composition</span><span>/</span><span>Adaptability</span><span>/</span><span>Teamwork</span><span>/</span><span>Creativity</span><span>/</span><span>Critical thinking</span><span>/</span>&nbsp;
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar;