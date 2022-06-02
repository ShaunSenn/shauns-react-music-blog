import React from 'react';

export default function Home() {
        return (
            <div className='home-container'>

                <div className='left-column'>
                    <div className='square'> 
                        <h3>Welcome to my music blog home page, I'm so glad you could join me!</h3>
                    </div>
                    <div className='square'>
                        <h3>This is a simple resource to check out my personal music recommendations. Enjoy!</h3>
                    </div>
                </div>
                
                <div className='right-column'>
                    <div className='square'>
                        <h3>Enjoy a short clip of my song of the week below!</h3>
                    </div>
                    <iframe title="Drassanes" src="https://open.spotify.com/embed/track/2jzeP1ysUBZzpNS4DW9DGK?utm_source=generator&theme=0" width="35%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
                {/* refer to the html generator lessons; figure out how to inject http source property src="http source code for song" dynamically */}

            </div>
        );
}