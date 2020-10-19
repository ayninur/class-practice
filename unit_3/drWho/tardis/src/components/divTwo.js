import React from 'react';
import divThree from './divThree';

const divTwo = (props) => {
    return (
        <>

            <divThree tardis={props.tardis} />
            <divThree tardis={props.tardis} />
        </>
    )
}

export default divTwo;
