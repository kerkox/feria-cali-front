import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const StreamingScreen = () => {
    return (
        <div className="container mt-2">
            <h1>Streaming</h1>
            <hr />

            <HeroList publisher="DC Comics" />

        </div>
    )
}
