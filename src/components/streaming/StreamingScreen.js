import React from 'react'

export const StreamingScreen = () => {
    return (
        <div className="container mt-2">
            <h1>Streaming</h1>
            <hr />
            <div className="col-md-8">
            <iframe 
                title="streaming"
                width="1193" 
                height="671" 
                src="https://www.youtube.com/embed/pW60WsmyeEY" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            </div>
            <div className="col-md-4">
                Contenido del chat
            </div>

        </div>
    )
}
