import React from 'react';
import divTwo from "./divTwo";

const divOne = (props) => {
    return (
        // explain tardis props.tardis
        <divTwo tardis={props.tardis} />
    )
}

export default divOne;