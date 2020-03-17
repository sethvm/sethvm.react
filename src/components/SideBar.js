import React, { Component } from 'react';

import './animate.min.css';
import './SideBar.css';

import resumeLogo from './svg/resume-logo.svg';
import linkedinLogo from './svg/linkedin-logo.svg';
import behanceLogo from './svg/behance-logo.svg';
import githubLogo from './svg/github-logo.svg';
import contactLogo from './svg/contact-logo.svg';

import resumeFile from './pdf/sethvm_resume.pdf';

class SideBar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='side_items animated fadeInLeft'>
                    <a rel='noopener noreferrer' href={resumeFile} target={'_blank'}><img src={resumeLogo} alt={'Resume'} className='side_logo' /></a>
                    <p><br /></p>
                    <a rel='noopener noreferrer' href={'https://www.linkedin.com/in/sethvm'} target={'_blank'}><img src={linkedinLogo} alt={'linkedin.com/in/sethvm'} className='side_logo' /></a>
                    <p><br /></p>
                    <a rel='noopener noreferrer' href={'https://www.behance.net/sethvm/'} target={'_blank'}><img src={behanceLogo} alt={'behance.net/sethvm'} className='side_logo' /></a>
                    <p><br /></p>
                    <a rel='noopener noreferrer' href={'https://github.com/sethvm'} target={'_blank'}><img src={githubLogo} alt={'github.com/sethvm'} className='side_logo' /></a>
                    <p><br /></p>
                    <a rel='noopener noreferrer' href={'mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'} target={'_blank'}><img src={contactLogo} alt={'Contact Me'} className='side_logo' /></a>
                </div>
            </div>
        );
    }
}

export default SideBar;