import { React } from 'react';
import { useRouteMatch } from 'react-router-dom';

function SanDiego() {
    const { path } = useRouteMatch();

    console.log(`This is the ${path} component`);

    return (
        <>
            <h3>San Diego</h3>
            <p>A pretty cool place to visit!</p>
        </>
    )
};

export default SanDiego;