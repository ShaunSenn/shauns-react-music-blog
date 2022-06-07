import React from 'react';

export default function Home() {
        return (
            <div className='home-container'>

                <div className='left-column'>
                    <div className='square-container'> 
                        <p>Welcome to my music blog home page, I'm so glad you could join me!</p>
                    </div>
                    <div className='square-container'>
                        <p>This is a simple resource to check out my personal music recommendations. Enjoy!</p>
                    </div>
                </div>
                
                <div className='right-column'>
                    <div className='square-container'>
                        <p>Enjoy a short clip of my song of the week below!</p>
                    </div>
                    <div className='square-container'>
                            <iframe title="id" src="https://open.spotify.com/embed/track/2jzeP1ysUBZzpNS4DW9DGK?utm_source=generator&theme=0" width="200px" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>
                </div>
                {/* refer to the html generator lessons; figure out how to inject http source property src="http source code for song" dynamically */}

            </div>
        );
}