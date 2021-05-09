import React from 'react'
import pic404 from '../assets/images/Q2BAOd2.png'
import * as font from '../utils/font/font'
import * as pageurl from '../utils/url/pageurl'
import { Link } from 'react-router-dom'


const Page404 = () => {
    return(
        <div className="container" style={{height:"100vh"}}>
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <img src={pic404} alt="404" style={{maxWidth:"600px", width:"80%"}}/>
                <h2 className="m-0 my-2">This page is not on the map</h2>
                <Link className="border-0 px-3 py-2 rounded mt-3" to={pageurl.LANDINGPAGE}>
                    <font.Three>
                        Back to home
                    </font.Three>
                </Link>
            </div>
        </div>
    )
}

export default Page404;