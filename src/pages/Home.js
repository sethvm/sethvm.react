import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Card from '../components/Card/Card';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

import AlbertCard from '../components/albert/albert-card.svg';
import FASSBCard from '../components/fassb/fassb-card.svg';
import SoulfxCard from '../components/soulfx/soulfx-card.svg';
/*import VisualsCard from '../components/visuals/visuals-card.svg';*/

export default function Home() {
    return (
        <main>
            <div id='intro' className='intro animate__animated animate__fadeIn'>
                <div className='intro_text'>
                    <h1>
                        <strong>G'day! I'm Seth.</strong>
                        <br />
                    </h1>
                    <p> 
                        <br />
                        I'm a <strong>designer</strong> pursuing a BASc.
                        in <strong>Systems Design Engineering</strong> with a
                        passion for creating products that
                        help <strong>move the world forward</strong>.
                    </p>
                </div>
                <div className='intro_experience'>
                    <p>
                        <strong>Associate Product Designer</strong> @ Loblaw Digital
                        <br />
                        <br />Previously in...
                        <br /><strong>Software Design</strong> @ Soulfx Technologies
                        <br /><strong>UX & Web Design</strong> @ ONgov's FASSB
                        <br />
                        <br />
                    </p>
                    <h6>
                        <strong>Scroll down to check out my work!</strong>
                    </h6>
                </div>
            </div>
            <div id='projects'>
                <Card
                link='/soulfx'
                img={SoulfxCard}
                alt='soulfx patient support app'>
                    <div className='card_text'>
                        <h2><strong>Patient Support App</strong></h2>
                        <p>
                            <br />
                            An online platform that facilitates the remote delivery
                            of a client's financial aid service for patients in need
                            <br />
                            <br />
                            <Badge pill variant='dark'>UX Design</Badge>&nbsp;
                            <Badge pill variant='dark'>Information Architecture</Badge>
                            <br />
                            <br />
                            <Link to='/soulfx'>
                                <strong>VIEW PROJECT</strong>
                            </Link>
                        </p>
                    </div>
                </Card>
                <Card
                link='/albert'
                img={AlbertCard}
                alt='project albert'>
                    <div className='card_text'>
                        <h2><strong>Project Albert</strong></h2>
                        <p>
                            <br />
                            Designing a mobile application that assists students and new immigrants
                            with evaluating residence and commute options
                            <br />
                            <br />
                            <Badge pill variant='dark'>Branding</Badge>&nbsp;
                            <Badge pill variant='dark'>UX Design</Badge>
                            <br />
                            <br />
                            <Link to='/albert'>
                                <strong>VIEW PROJECT</strong>
                            </Link>
                        </p>
                    </div>
                </Card>
                <Card
                link='/fassb'
                img={FASSBCard}
                alt='fassb'>
                    <div className='card_text'>
                        <h2><strong>FASSB Design</strong></h2>
                        <p>
                            <br />
                            Interface reworks for Employment Ontario platforms used to help
                            jobseekers secure employment
                            <br />
                            <br />
                            <Badge pill variant='dark'>Web Design</Badge>&nbsp;
                            <Badge pill variant='dark'>UX Design</Badge>
                            <br />
                            <br />
                            <Link to='/fassb'>
                                <strong>VIEW RECAP</strong>
                            </Link>
                        </p>
                    </div>
                </Card>
            </div>
        </main>
    );
}
