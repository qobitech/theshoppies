import React, { useState, useRef, FC, useEffect, useLayoutEffect } from 'react'
import * as font from '../utils/font/font'
import css from '../assets/css/props.module.css'

interface IProps {
    click : any;
    handleClick : any;
    message:any; 
    tip:any;
}

const Notification:FC<IProps> = (props) => {

    const { click, handleClick, message, tip } = props
    const [ prevClick, setPrevClick ] = useState<string>('')
    const clickDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(()=>{
        if(prevClick !== click){
            if(click===true){
                null !== clickDiv.current && clickDiv.current.click()
            }
            setPrevClick(click);
        }
    },[click, prevClick])

    useEffect(()=>{
        if(click===true){
            null !== clickDiv.current && clickDiv.current.click()
        }
    },[click])

    const { Six, Three, Para } = font

    return(
        <>
        <div id="validay" data-toggle="modal" data-target="#exampleModalCenter" className="d-flex position-relative" 
            style={{zIndex:40}} ref={ clickDiv } />
        
        <div className={`modal fade ${css.modalContainer}`} id="exampleModalCenter" 
            tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" onClick={ handleClick } >

            <div className={`modal-dialog modal-dialog-centered`} role="document">

                <div className={`modal-content rounded pb-3 px-3 ${css.modalContent}`} >

                    <div className={`modal-header d-flex justify-content-center`} >
                        
                        <div className={`position-relative w-100 text-center`} >

                            <Six fontclass={`${css.titleJson}`} >
                                THE SHOPPIES
                            </Six>

                            <div className={`position-absolute d-flex align-items-center justify-content-center ${css.modalCloseContainer}`}>

                                <i className={`far fa-window-close m-0${css.closeCrumb}`} aria-hidden="true" data-dismiss="modal" onClick={ handleClick } /> 

                            </div>

                        </div>

                    </div>

                    <div className={`modal-dialog-centered w-100`} >
                        <div className={`d-flex flex-column w-100 justify-content-center text-center align-items-center py-3 ${css.modalBodyContent}`} >
                            <Three fontclass={`${css.modalBodyText} mt-3`} >
                                { message }
                            </Three> 
                            <div className="d-flex w-100 justify-content-center px-4 mx-auto mb-3 py-2" style={{maxWidth:"330px"}}>
                                <Para fontclass="mt-3" fontStyle={{fontSize:"13px",fontFamily:"encode_sans_medium"}}>
                                    { tip } 
                                </Para>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        </>    
    )
}

export default Notification;