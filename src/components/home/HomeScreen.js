import React from 'react'

export const HomeScreen = () => {
    return (
        <div className="container mt-2">        
            <h1>Home</h1>
            <hr />
            <h4>Emisora</h4>
            <audio src="https://ssl.aloncast.com:1564/" controls="true"></audio>
            {/* <HeroList publisher="Marvel Comics" /> */}
        </div>
    )
}
