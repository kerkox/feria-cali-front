import React from 'react';
import './GamesScreen.scss'

export const GamesScreen = ({ history }) => {

    return (
        <div className="page-complete">
            <div className="center"> <h1>Juegos</h1></div>
            <hr />

            <iframe src="https://festivaldemacetas.com/juegos/" title="juegos" class="page-complete"></iframe>

        </div>
    )
}
