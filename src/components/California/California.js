import React from 'react';
import { useParams } from 'react-router-dom';
import SanDiego from './SanDiego';

function California() {
    const { usState } = useParams();

    return (
        <>
            <h2>California</h2>
            {usState === 'sandiego' && <SanDiego />}
        </>
    );
}

export default California;