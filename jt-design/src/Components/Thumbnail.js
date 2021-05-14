import React from 'react';
import {Link} from 'react-router-dom';
import jclark from '../../public/img/jclark.jpg';
import jid from '../../public/img/jid.jpg';
import juju from '../../public/img/juju.jpg';
import reach from '../../public/img/reach.jpg';
import she from '../../public/img/she.jpg';
import './App.css';

function Thumbnail(props) {
    return (
        <div className="artwork">
            <Link to="">
                <div className="artwork-image">
                    <img src={jclark} alt='Jordan Clarkson Artwork' />
                </div>
                <div className="artwork-title">Jordan Clarkson</div>
                <div className="artwork-category">Created on iPad</div>
            </Link>
            <Link to="">
                <div className="artwork-image">
                    <img src={jid} alt='JID Artwork' />
                </div>
                <div className="artwork-title">JID</div>
                <div className="artwork-category">Created on iPad</div>
            </Link>
            <Link to="">
                <div className="artwork-image">
                    <img src={juju} alt='JuJu The Avenger Artwork' />
                </div>
                <div className="artwork-title">The Avenger</div>
                <div className="artwork-category">Created on iPad</div>
            </Link>
            <Link to="">
                <div className="artwork-image">
                    <img src={reach} alt='Hand of God Artwork' />
                </div>
                <div className="artwork-title">Untitled</div>
                <div className="artwork-category">Created on iPad</div>
            </Link>
            <Link to="">
                <div className="artwork-image">
                    <img src={she} alt='Girl Artwork' />
                </div>
                <div className="artwork-title">Bae</div>
                <div className="artwork-category">Created on iPad</div>
            </Link>
        </div>
        
    )
}

export default Thumbnail;