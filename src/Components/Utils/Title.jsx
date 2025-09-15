import React from 'react'
import { Helmet } from 'react-helmet-async'


function Title({ titleName }) {
    return (
        <Helmet>
            <title>VP - {titleName}</title>
        </Helmet>
    )
}

export default Title
