import React from 'react'
import * as font from '../utils/font/font'

const Footer = () => {

    const { Para } = font

    return(
        <div className="container p-0 pt-2 pt-md-0 pb-4">
            <span className="d-flex w-100 justify-content-center">
                <Para>The Shoppies &copy; 2021</Para>
            </span>
        </div>
    )   
}

export default Footer