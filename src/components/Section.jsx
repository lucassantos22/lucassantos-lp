import React from 'react';

export const Section = ({ id, isDark, children }) => {
    const classes = isDark ? "has-background-black-ter has-text-white-bis" : "has-background-white-ter has-text-black"

    return (
        <div class={classes} id={id}>
            <div class="container ">
                <div class="content">
                    { children }
                </div>
            </div>
        </div>
    )
}
