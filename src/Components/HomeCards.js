import React from 'react'

function HomeCards (props) {
    let curName = props.Cards[1].name;
    return(
        <>
        {
            curName
        }
        </>
    )
}

export default HomeCards;