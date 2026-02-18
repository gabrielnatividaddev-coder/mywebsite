import React from 'react';
import './homepage.css';
import Header from '../../components/header/header.component';

const HomePage = () => (
    <div className='home' >
        <Header />
        <div className='support'>
        <div className='edithome'>
        <p className='paragraph'>
                Hello there! I'm a Web Developer. 
                My name is Gabriel Natividad
                Browse my website to get to know me personally and the services I offer.
        </p>
        </div>
        </div>
            
    </div>
);

export default HomePage;
