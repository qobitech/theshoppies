import React from 'react'
import * as font from '../utils/font/font'
import * as sharedata from './props'
import * as styleprops from '../view/props'

class Share extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            loading : false, 
            message : "", 
            url : window.location.href,
            isCopied : false
        }
        this.urlref = React.createRef();
        this.btnref = React.createRef();
    }

    componentDidUpdate(prevProps){
        const { props : { share }, btnref } = this
        if( prevProps.share !== share ){
            if( share ){
                btnref.current.click()
            }
        }
    }

    handleURL = () => {
        const { urlref } = this
        urlref.current.select();
        urlref.current.setSelectionRange(0, 99999);
        document.execCommand("copy");
        this.setState( {  isCopied : true } )
        setTimeout(()=>this.setState( {  isCopied : false } ),2000);
    }

    render() {

        const { urlref, btnref, handleURL, state : { url, isCopied } } = this

        const { modalJson, shareJson, titleJson } = styleprops


        const {title,closeCrumb} = titleJson( );


        const { modalContainer,modalContent,modalHeader,modalHeaderContainer,
                modalCloseContainer,modalDialog,modalBody,modalBodyContent } = modalJson( );

        const { Six, Para, Alpha } = font

        const { shareProps } = sharedata

        const share = shareProps

        const { shareButton, shareContainer, shareHeader, shareIcon, shareInput, shareTxt, shareHeaderContainer, 
                shareContainerWrapper, shareBtnContainer, shareUrlWrapper } = shareJson( );

        return(
            <>
            <span data-toggle="modal" data-target="#exampleModalCentershare" className="d-flex position-relative" 
                ref={ btnref }/>
            
            <div className={`${modalContainer.className}`} style={{...modalContainer.style}} id="exampleModalCentershare" 
                tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >

                <div className={`${modalDialog.className} h-auto `} style={{...modalDialog.style}} role="document">

                    <div className={`${modalContent.className}`} style={{...modalContent.style}}>

                        <div className={`${modalHeader.className}`} style={{...modalHeader.style}}>
                            
                            <span className={`${modalHeaderContainer.className}`} style={{...modalHeaderContainer.style}}>

                                <Six fontClass={`${title.className}`} fontStyle={{...title.style}}>
                                    THE SHOPPIES
                                </Six>

                                <span className={`${modalCloseContainer.className}`} style={{...modalCloseContainer.style}} >

                                    <i className={`far fa-window-close ${closeCrumb.className}`} style={{...closeCrumb.style}} 
                                        aria-hidden="true" data-dismiss="modal" /> 

                                </span>

                            </span>

                        </div>

                        <div className={`w-100`} style={{...modalBody.style}}>
                            <span className={`${modalBodyContent.className} flex-column h-auto`} style={{...modalBodyContent.style}}>
                                
                                <span className={`${shareHeaderContainer.className}`} style={{...shareHeaderContainer.style}}>
                                    <Para fontClass={shareHeader.className} fontStyle={{ ...shareHeader.style }}>
                                        Share with friends and family</Para>
                                </span>

                                {Array.isArray( share ) && share[0] && share.map( ( item, index ) => {
                                    return(
                                        <Alpha ahref={ item.url } key={ index } fontClass={shareContainer.className} fontStyle={{...shareContainer.style}}>
                                            <span className={`${shareContainerWrapper.className}`} style={{...shareContainerWrapper.style}}>
                                                <Para fontClass={shareTxt.className} fontStyle={{ ...shareTxt.style }} >
                                                    {item.name}
                                                </Para>
                                                <i className={`${ item.icon } ${shareIcon.className}`} style={{...shareIcon.style}}  />
                                            </span>
                                        </Alpha>
                                    )
                                } )}
                                <span className={`${shareUrlWrapper.className}`} style={{...shareUrlWrapper.style}} >
                                    <input type="text" value={ url } readOnly className={shareInput.className} style={{...shareInput.style}}/>
                                    <span className={shareBtnContainer.className}
                                        style={{ ...shareBtnContainer.style }} >
                                        <button style={{ ...shareButton.style, cursor : isCopied ? "not-allowed" : "pointer" }} 
                                            className={ shareButton.className } disabled={ isCopied }
                                            onClick={ handleURL } >
                                            {isCopied ? "Copied" : "Copy Link"}
                                        </button>
                                    </span>
                                    <textarea ref={ urlref } value={ url } readOnly style={{ width:0, height:0,opacity:0 }} />
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

export default Share;