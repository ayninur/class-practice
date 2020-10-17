import React from "react";

const Display = (props) => {
    const taco = props;

    const loaded = () => {
        return (
            <>
                <h1 className="title">Random Taco!</h1>

                <h3 className="shellName">Shell: {taco.shell.name}</h3>
                <p className="shellRecipe">{taco.shell.recipe}</p>

                <h3 className="mixinName">{taco.mixin.name}</h3>
                <p className="mixinRecipe">{taco.mixin.recipe}</p>

                <h3 className="condimentName">{taco.condiment.name}</h3>
                <p className="condimentRecipe">{taco.condiment.recipe}</p>
            </>
        )
    }
    return (
        taco.mixin ? loaded() : <h1>Loading...</h1>
    )

}

export default Display;