import React from 'react'
import * as font from '../utils/font/font'

const Footer = () => {

    const { Para,Alpha } = font

    return(
        <div className="container p-0 pt-2 pt-md-0 pb-4">
            <span className="d-flex w-100 justify-content-center pb-4 pt-2">
                <Alpha ahref="https://edekobi.com" target="_blank" fontStyle={{fontSize:"12px"}}>
                    Code & Design by 
                    <span style={{fontFamily:"encode_sans_semi_bold"}}>
                        &nbsp;Frank Edekobi
                    </span>
                </Alpha>
            </span>
            <span className="d-flex w-100 justify-content-center">
                <Para>The Shoppies &copy; 2021</Para>
            </span>
        </div>
    )   
}

export default Footer