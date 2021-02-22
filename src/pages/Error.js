import React from 'react';
import { Link }  from 'react-router-dom';
import '../styles/Error.css';

/*layout imports*/
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';

/*typography imports*/
import HTag2 from '../components/Page/HTag2';
import HTag3 from '../components/Page/HTag3';

export default function Error() {
    return (
        <main>
            <Project>
                <Section>
                    <HTag2>
                        <span className='warning'>
                            404, mate - probably an old link!
                        </span>
                        <br />
                    </HTag2>
                    <HTag3>
                        Hop over to the landing page
                        <Link to='/'>
                            &nbsp;<span className='big_link bold'>here!</span>
                        </Link>
                        <br />
                    </HTag3>
                </Section>
            </Project>
        </main>
    );
}
