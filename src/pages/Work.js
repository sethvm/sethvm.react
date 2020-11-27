import React from 'react';
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom';
import '../styles/Project.css';

import AlbertCard from '../components/albert/albert-card.svg';
import FASSBCard from '../components/fassb/fassb-card.svg';
import SoulfxCard from '../components/soulfx/soulfx-card.svg';
import VisualsCard from '../components/visuals/visuals-card.svg';

export default function Work() {

    return(
        <main className='project animated fadeIn'>
            <div className='project_body'>
                <h4><strong>PROJECTS</strong></h4>
                <p>
                    Work experience, passion projects and some occasional scribbles
                </p>
            </div>
            <Card
            link='/soulfx'
            img={SoulfxCard}
            alt='Soulfx patient support application'
            title='PATIENT SUPPORT APP'
            desc='Bringing remote services to patients in need'>
                <Badge pill variant='light'>Software / UX Design</Badge>&nbsp;
                <Badge pill variant='light'>Information Architecture</Badge>
            </Card>
            <Card
            link='/albert'
            img={AlbertCard}
            alt='Project ALbert'
            title='PROJECT ALBERT'
            desc='Mitigating the stress of relocating'>
                <Badge pill variant='light'>Branding</Badge>&nbsp;
                <Badge pill variant='light'>UI / UX Design</Badge>
            </Card>
            <Card
            link='/fassb'
            img={FASSBCard}
            alt='FASSB UI/UX'
            title='FASSB UI/UX'
            desc='My first design internship in a nutshell'>
                <Badge pill variant='light'>UI / UX Design</Badge>&nbsp;
                <Badge pill variant='light'>Data Visualization</Badge>
            </Card>
            <Card
            link='/visuals'
            img={VisualsCard}
            alt='Visuals'
            title='VISUALS'
            desc='A collection of miscellaneous designs'>
                <Badge pill variant='light'>Graphic Design</Badge>&nbsp;
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
                <img className='img-fluid_card' src={props.img} alt={props.alt} />
                <div className='img-fluid_card card_text'>
                    <p>
                        <br />
                    </p>
                        <h5><strong>{props.title}</strong></h5>
                    <p>
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
