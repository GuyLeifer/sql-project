import React from 'react';
import Carousel from 'styled-components-carousel';
import { Link } from 'react-router-dom';

function Adding() {
    return (
        <div className="adding"> Choose What To Add From Here:
            <Carousel         
                center
                infinite
                showArrows
                showIndicator
                slidesToShow={3}>
                <Link to='add/song'>
                    <p>Add Song</p>
                    <img src='https://previews.123rf.com/images/bestvectorstock/bestvectorstock1808/bestvectorstock180807517/107315939-song-note-icon-vector-isolated-on-white-background-for-your-web-and-mobile-app-design-song-note-logo.jpg'/>
                </Link>
                <Link to='add/artist'>
                    <p>Add Artist</p>
                    <img src="https://thumbs.dreamstime.com/b/artist-text-logo-paint-brush-black-colour-flat-minimal-vector-logo-style-artist-text-logo-paint-brush-black-164108116.jpg" />
                </Link>
                <Link to='add/album'>
                    <p>Add Album</p>
                    <img src="https://www.klinikatlv.co.il/wp-content/uploads/2020/02/Album-logo-330x220.jpg" />
                </Link>
                <Link to='add/playlist'>
                    <p>Add Playlist</p>
                    <img src="https://media-exp1.licdn.com/dms/image/C561BAQHJeV749NCmSg/company-background_10000/0?e=2159024400&v=beta&t=qHn2Sg4epLPZyGktCAHSr4LppSpexm0CAWQud5N6nhI" />
                </Link>
            </Carousel>
        </div>
    )
}

export default Adding
