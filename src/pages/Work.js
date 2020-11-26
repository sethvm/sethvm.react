import React from 'react';
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom';
import '../styles/Project.css';

import Brand from '../components/work/work_banner.svg';

import AlbertCard from '../components/albert/albert-card.svg';
import FASSBCard from '../components/fassb/fassb-card.svg';
import SoulfxCard from '../components/soulfx/soulfx-card.svg';
import VisualsCard from '../components/visuals/visuals-card.svg';

export default function Work() {

    return(
        <main className='project animated fadeIn'>
            <img className='project_banner' src={Brand} alt='banner' />
            <p>
                <br />
            </p>
            <Card
            link='/soulfx'
            img={SoulfxCard}
            title='PATIENT SUPPORT APP'
            desc='Bringing remote services to patients in need'>
                <Badge pill variant='light'>Software / UX Design</Badge>&nbsp;
                <Badge pill variant='light'>Information Architecture</Badge>
            </Card>
            <Card
            link='/albert'
            img={AlbertCard}
            title='PROJECT ALBERT'
            desc='Mitigating the stress of relocating'>
                <Badge pill variant='light'>Branding</Badge>&nbsp;
                <Badge pill variant='light'>UI / UX Design</Badge>
            </Card>
            <Card
            link='/fassb'
            img={FASSBCard}
            title='FASSB UI/UX'
            desc='My first design internship in a nutshell'>
                <Badge pill variant='light'>UI / UX Design</Badge>&nbsp;
                <Badge pill variant='light'>Data Visualization</Badge>
            </Card>
            <Card
            link='/visuals'
            img={VisualsCard}
            title='VISUAL DESIGNS'
            desc='Illustrations not made for any particular project'>
                <Badge pill variant='light'>Visual Design</Badge>&nbsp;
            </Card>
        </main>
    );
}

function Card(props) {
    return(
        <>
        <p>
            <br />
        </p>
        <Link to={props.link} className='card_link'>
            <div className='img-fluid project_card'>
                <img className='img-fluid_card' src={props.img} alt='Soulfx patient support application' />
                <div className='img-fluid_card'>
                    <p>
                        <br />
                        <h5><strong>{props.title}</strong></h5>
                        {props.desc}
                        <br />
                        <br />
                        {props.children}
                    </p>
                </div>
            </div>
        </Link>
        <p>
            <br />
        </p>
        </>
    );
}