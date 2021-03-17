import { useLocation } from 'react-router-dom';
import './BlueBlock.css';

export default function BlueBlock() {

    const userOnHomePage = (useLocation().pathname === '/');

    return (
        <>
        {userOnHomePage
            ? <span className='block-blue animate__animated animate__fadeInLeft' />
            : <span className='block-blue thin animate__animated animate__fadeInRight' />
        }
        </>
    );
}
