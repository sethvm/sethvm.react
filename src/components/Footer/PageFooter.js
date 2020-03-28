import React from 'react';
import {
    Link
} from 'react-router-dom';

import FooterText from './FooterText';

import './Footer.css';

import '../animate.min.css';
import '../fonts/Futura PT_Light.css';
import '../fonts/Futura PT_Book.css';
import '../fonts/Futura_Demi.css';

export default function PageFooter() {
    return (
        <div id='footer' className='animated fadeIn'>
            <FooterLink to='/albert' text='PROJECT ALBERT' /> |&nbsp;
            <FooterLink to='/fassb' text='FASSB' /> |&nbsp;
            <FooterLink to='/vector' text='VECTOR COLLECTION' />
            <br />
            <br />
            <FooterText />
        </div>
    );
}

function FooterLink(props) {
    return (
        <Link to={props.to} className='link footer_txt'><strong>{props.text}</strong></Link>
    );
}