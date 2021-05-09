import React,{FC, useRef} from 'react'
import Header from '../layout/header.js'
import Footer from '../layout/footer.js'
import * as font from '../utils/font/font'
import Result from './resultpage'
import Nomination from './nominationpage'
import csshome from '../assets/css/landingpage.module.css'
import Notification from '../notification'
import Share from '../share'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useData } from '../utils'

Aos.init();

const LandingPage:FC = () => {

    const formBtn = useRef<HTMLButtonElement>(null);

    const { handleOnChange, handleSubmit, data, loading, error, numberofPages, first, last, handlePage, title,
            handleFocus, handleShare, handleClick, isFocus, share, click, message, tip, nominations, isMobile, 
            addNomination, removeNomination
        } = useData({formBtn}) 

    const { One, Four, Para, Alpha } = font
        
    const searchWord = title;
        
    const resultProps = { data, loading, error, searchWord, addNomination, isMobile, handlePage, numberofPages, first, last } 

    const nominationProps = { nominations, isMobile, removeNomination }

    return(
        <>
        <Header/>
            <Notification  click={ click } message={ message } tip={ tip } handleClick={ handleClick } />
            <Share share={ share } />
            <div className={` container my-0 my-lg-5 p-0`}>
                <div className={`w-100 pt-2 pb-5 px-3 px-lg-5 ${csshome.bg}`} >
                    <div className="pt-3 d-flex w-100 mt-4 text-left text-md-center justify-content-start justify-content-md-center"
                        data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" >
                        <One fontStyle={{color:"var(--main-color7)", overflowWrap: "break-word"}} fontclass={csshome.header}>
                            The Shoppies
                        </One>
                    </div>
                    <div className="pt-4 pb-5 d-flex w-100 text-left text-md-center justify-content-start justify-content-md-center"
                        data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                        <Four fontStyle={{fontFamily : "encode_sans_medium", lineHeight:"25px" }} fontclass={csshome.description}>
                            Search & Nominate up to 
                            <div style={{fontSize:"17px", color : "var(--main-color7)"}}>
                                &nbsp;FIVE (5)&nbsp;
                            </div> of your favorite movies in the Shopify Movie Awards
                        </Four>
                    </div>
                    <div className="d-flex w-100 text-center justify-content-center" data-aos="fade-in" 
                        data-aos-duration="2800" data-aos-once="true" >
                        <Alpha click={()=>handleShare(true)}>
                            <Para fontStyle={{ cursor:"pointer", color:"#ffc107", fontSize:"1.2em" }}>
                                Share&nbsp;&nbsp;  
                                <span><i className="fas fa-share-alt text-warning" /></span>
                            </Para>
                        </Alpha>
                    </div>
                    <form className="w-100 bg-white rounded mt-5" onSubmit={(e)=>handleSubmit(e)} 
                        style={{boxShadow:"var(--box-shadow)"}}>
                        <div className="w-100 d-flex flex-column justify-content-start rounded py-4 px-4">
                            <label htmlFor="title" className="mb-2">Movie Title</label>
                            <div className="w-100 d-flex flex-column position-relative justify-content-start">
                                <input type="text" name="title" id="title" value={ title } onChange={(e)=>handleOnChange(e)} 
                                    className="rounded pl-3" style={{border:`1px solid ${title.length > 0 ? "var(--main-color7)" : "#e6e6e6"}`, height:"50px", outline:0}} 
                                    onFocus={ () => handleFocus( true ) } onBlur={()=> handleFocus( title.length > 0 )} />
                                <div className={`position-absolute h-100 ${!isFocus ? "d-flex" : "d-none"} align-items-center pl-3`} style={{width:"max-content",top:0,left:0}}>
                                    <i className="fas fa-search" style={{color:"var(--main-color7)"}}/>
                                </div>
                                <div className={`position-absolute h-100 ${ title.length > 0 ? "d-flex" : "d-none"} align-items-center pl-3`} style={{width:"max-content",top:0,right:0}}>
                                    <button className="px-3 bg-transparent" ref={ formBtn }
                                        style={{border:0, borderLeft:"1px solid var(--main-color7)", color:"var(--main-color7)", height:"50px", outline:0}} >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    {isMobile ?
                    <>
                    <div className="d-block mt-5">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                            <a className={`nav-link active bg-transparent ${csshome.tab}`} data-toggle="tab" href="#resultid">
                                Result
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className={`nav-link bg-transparent ${csshome.tab}`} data-toggle="tab" href="#nominationid">
                                Nominations ( {  Array.isArray(nominations) ? nominations.length : "0" } ) 
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-block tab-content w-100 m-0 p-0">
                        <Result resultProps={ resultProps } />
                        <Nomination nominationProps={ nominationProps } />
                    </div>
                    </>
                    :
                    <div className={`d-flex flex-wrap align-items-start justify-content-between`}>
                        <Result resultProps={ resultProps } />
                        <Nomination nominationProps={ nominationProps } />
                    </div>
                    }
                </div>
            </div>

        <Footer/>
        </>
    )
}

export default LandingPage;