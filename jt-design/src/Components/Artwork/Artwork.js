import React from 'react';
import Thumbnail from '../Thumbnail.js';
import jclark from '../../public/img/jclark.jpg';
import jid from '../../public/img/jid.jpg';
import juju from '../../public/img/juju.jpg';
import reach from '../../public/img/reach.jpg';
import she from '../../public/img/she.jpg';

function Artwork(props) {
    return (
        <div>
            <h1>Artwork</h1>
            <Thumbnail
                link="/jclark"
                image={jclark}
                title="Jordan Clarkson"
                category="Digital"
            />
            <Thumbnail
                link="/jid"
                image={jid}
                title="JID"
                category="Digital"
            />
            <Thumbnail
                link="/juju"
                image={juju}
                title="Juju the Avenger"
                category="Digital"
            />
            <Thumbnail
                link="/reach"
                image={reach}
                title="Untitled"
                category="Digital"
            />
            <Thumbnail
                link="/she"
                image={she}
                title="Bae?"
                category="Digital"
            />
        </div>
    )
}

export default Artwork;