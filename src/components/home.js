import React from 'react';

export default function Home() {
        return (
            <div className='home-container'>

                <h3>Welcome to my Music Blog Home Page</h3>
                
                <div className='left-column'>
                    <h3>This is a simple resource to check out my personal music recommendations. Enjoy!</h3>
                </div>
                
                <div className='right-column'>
                    <h3>Enjoy a short clip of my song of the week below!</h3>
                    <iframe title="drassanes" src="https://open.spotify.com/embed/track/2jzeP1ysUBZzpNS4DW9DGK?utm_source=generator&theme=0" width="45%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </div>
        );
}