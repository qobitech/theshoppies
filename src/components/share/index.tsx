import {FC, useState, useLayoutEffect, useRef} from 'react'
import * as font from '../utils/font/font'
import * as sharedata from './props'
import css from '../assets/css/props.module.css'

interface IProps {
    share : boolean;
}

const Share: FC<IProps> = (props) => {

    const { shareProps } = sharedata
    const { share } = props
    const url = window.location.href;
    const [ isCopied, setIsCopied ] = useState(false)
    const [ prevShare, setPrevShare ] = useState<any>()
    const urlref = useRef<HTMLTextAreaElement>(null);
    const btnref = useRef<HTMLDivElement>(null);

    useLayoutEffect(()=>{
        if( prevShare !== share ){
            if( share ){
                btnref.current !== null && btnref!?.current!?.click()
            }
            setPrevShare(share);
        }
    },[prevShare, share])

    const handleURL = () => {
        btnref.current !== null && urlref!?.current!?.select();
        btnref.current !== null && urlref!?.current!?.setSelectionRange(0, 99999);
        document.execCommand("copy");
        setIsCopied(true )
        setTimeout(()=>setIsCopied( false ),3000);
    }
        const { Six, Para, Alpha } = font

        return(
            <>
            <div data-toggle="modal" data-target="#exampleModalCentershare" className="d-flex position-relative" 
                ref={ btnref }/>
            
            <div className={`${css.modalContainer} modal fade`} id="exampleModalCentershare" 
                tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >

                <div className={`${css.modalDialog} modal-dialog modal-dialog-centered h-auto `} role="document">

                    <div className={`${css.modalContent} modal-content rounded pb-3 px-3`} >

                        <div className={`${css.modalHeader} modal-header d-flex justify-content-center`} >
                            
                            <div className={`${css.modalHeaderContainer} position-relative w-100 text-center`}>

                                <Six fontclass={`${css.title}`} >
                                    THE SHOPPIES
                                </Six>

                                <div className={`${css.modalCloseContainer} position-absolute d-flex align-items-center justify-content-center`} >
                                    <i className={`far fa-window-close ${css.closeCrumb}`} aria-hidden="true" data-dismiss="modal"/> 
                                </div>

                            </div>

                        </div>

                        <div className={`w-100`} >
                            <div className={`${css.modalBodyContent} h-auto d-flex flex-column w-100 justify-content-center text-center align-items-center`} >
                                
                                <div className={`${css.shareHeaderContainer} d-flex w-100 align-items-center justify-content-center py-3`}>
                                    <Para fontclass={css.shareHeader} >
                                        Share with friends and family</Para>
                                </div>

                                {Array.isArray( shareProps ) && shareProps[0] && shareProps.map( ( item, index ) => {
                                    return(
                                        <Alpha ahref={ item.url } key={ index } fontclass={`py-3 w-100 css.shareContainer`}>
                                            <div className={`${css.shareContainerWrapper} d-flex w-100 align-items-center justify-content-between`}>
                                                <Para fontclass={`${css.shareTxt} text-black`}>
                                                    {item.name}
                                                </Para>
                                                <i className={`${item.icon} ${css.shareIcon} text-black`} />
                                            </div>
                                        </Alpha>
                                    )
                                } )}
                                <div className={`${css.shareUrlWrapper} d-flex w-100 position-relative align-items-center justify-content-start mt-3`} >
                                    <input type="text" value={ url } readOnly className={css.shareInput} />
                                    <div className={`${css.shareBtnContainer} position-absolute w-auto h-100 d-flex align-items-center justify-content-end`}>
                                        <button  
                                            className={ `h-100 px-3 bg-transparent ${css.shareButton}` } disabled={ isCopied }
                                            onClick={ handleURL } >
                                            {isCopied ? "Copied" : "Copy Link"}
                                        </button>
                                    </div>
                                    <textarea ref={ urlref } value={ url } readOnly style={{ width:0, height:0,opacity:0 }} />
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            </>    
        )
}

export default Share;