import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Thumbnail(props) {
    return (
        <div className="artwork">
            <Link to={props.link}>
                <div className="artwork-image">
                    <img src={props.image} alt="Artwork by JT" />
                </div>
                <div className="artwork-title">{props.title}</div>
                <div className="artwork-category">{props.category}</div>
            </Link>
        </div>
    )
}

export default Thumbnail;