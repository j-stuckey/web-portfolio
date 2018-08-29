import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
    
    return (
        <React.Fragment >

            <Link to="/aboutme">About me</Link>
            <Link to="/contact">Contact me</Link>
            
        </React.Fragment>
    );
}