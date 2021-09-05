import React from 'react'
import { useRouteMatch } from 'react-router';

function SanFrancisco() {
    const { path } = useRouteMatch();

    console.log(`This is the ${path} component`);

    return (
        <>
            <h3>San Fransisco</h3>
            <p>Awesome city with european vibes.</p>
        </>
    )
}

export default SanFrancisco;