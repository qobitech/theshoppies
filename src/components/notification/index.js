import React from 'react'
import * as font from '../utils/font/font'
import * as dataprops from '../view/props'

class Notification extends React.Component {
    
    constructor(props) {
        super(props)
        this.state={
            loading : false, message : ""
        }
        this.clickDiv = React.createRef();
    }

    componentDidUpdate(prevProps){
        if(prevProps.click !== this.props.click){
            if(this.props.click===true){
                this.clickDiv.current.click()
            }
        }
    }

    componentDidMount(){
        if(this.props.click===true){
            this.clickDiv.current.click()
        }
    }

    render() {

        const { Six, Three, Para } = font

        const { modalJson, titleJson } = dataprops

        const { modalBody,modalBodyContent, modalBodyText, modalCloseContainer, modalContainer,
                modalContent, modalDialog, modalHeader, modalHeaderContainer } = modalJson()
        
        const { title, closeCrumb } = titleJson()

        const { props : { message, tip, handleClick }, clickDiv } = this

        return(
            <>
            <span id="validay" data-toggle="modal" data-target="#exampleModalCenter" className="d-flex position-relative" 
                style={{zIndex:40}} ref={ clickDiv } />
            
            <div className={`${modalContainer.className}`} style={{...modalContainer.style}} id="exampleModalCenter" 
                tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" onClick={ handleClick } >

                <div className={`${modalDialog.className}`} style={{...modalDialog.style}} role="document">

                    <div className={`${modalContent.className}`} style={{...modalContent.style}}>

                        <div className={`${modalHeader.className}`} style={{...modalHeader.style}}>
                            
                            <span className={`${modalHeaderContainer.className}`} style={{...modalHeaderContainer.style}}>

                                <Six fontClass={`${title.className}`} fontStyle={{...title.style}}>
                                    THE SHOPPIES
                                </Six>

                                <span className={`${modalCloseContainer.className}`} style={{...modalCloseContainer.style}} >

                                    <i className={`far fa-window-close ${closeCrumb.className}`} style={{...closeCrumb.style}} 
                                        aria-hidden="true" data-dismiss="modal" onClick={ handleClick } /> 

                                </span>

                            </span>

                        </div>

                        <div className={`${modalBody.className}`} style={{...modalBody.style}}>
                            <span className={`${modalBodyContent.className} py-3`} style={{...modalBodyContent.style}}>
                                <Three fontClass={`${modalBodyText.className} mt-5`} fontStyle={{...modalBodyText.style}}>
                                    { message }
                                </Three> 
                                <span className="d-flex w-100 px-4 mx-auto mb-5 py-2" style={{maxWidth:"330px"}}>
                                    <Para fontClass="mt-3" fontStyle={{fontSize:"13px",fontFamily:"encode_sans_medium"}}>
                                        { tip } 
                                    </Para>
                                </span>
                            </span>  
                        </div>
                    </div>
                </div>
            </div>
            </>    
        )
    }
}

export default Notification;