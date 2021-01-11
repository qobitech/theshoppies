
export const moreinfoProps = {
    title : {
        className:"",
        style: {
            fontSize: "12px",
            fontFamily : "encode_sans_medium"
        }
    },
    value : {
        className:"",
        style:{
            fontSize: "12px",
            whiteSpace : "nowrap"
        }
    },
    button : {
        className : "px-3 ml-0 ml-md-3 rounded border-0",
        style : {
            background : "var(--main-color7)",
            color : "#fff",
            height : "30px",
            fontFamily : "encode_sans_medium",
            fontSize:"12px",
            outline:0
        }
    },
    buttonDisabled : {
        className : "px-3 ml-0 ml-md-3 rounded border-0",
        style : {
            background : "#c2c2c2",
            color : "#fff",
            height : "30px",
            fontFamily : "encode_sans_medium",
            fontSize:"12px",
            outline:0
        }
    },
    buttonRemove : {
        className : "px-3 ml-0 ml-md-3  rounded bg-transparent",
        style : {
            border : "1px solid var(--main-color7)",
            color : "var(--main-color7)",
            height : "30px",
            fontSize:"12px",
            outline:0
        }
    }

}

export const modalJson = (color,bg) => ({
    modalContainer : {
        className : "modal fade",
        style : {
            background : bg,
            zIndex : 400
        }
    },
    modalContent : {
        className : "modal-content rounded pb-3 px-3",
        style : {
            background : bg ,
            border : `1px solid ${color}`
        }
    },
    modalHeader : {
        className : "modal-header d-flex justify-content-center",
        style : {
            borderBottom : `1px solid ${color}`
        }
    },
    modalHeaderContainer : {
        className : "position-relative w-100 text-center",
        style : {
            
        }
    },
    modalCloseContainer : {
        className : "position-absolute d-flex align-items-center justify-content-center",
        style : {
            top:0,right:0,height:"100%",cursor:"pointer"
        }
    },
    modalDialog : {
        className : "modal-dialog modal-dialog-centered",
        style : {
            
        }
    },
    modalBody : {
        className : "modal-dialog modal-dialog-centered w-100",
        style : {
            
        }
    },
    modalBodyContent : {
        className : "d-flex flex-column w-100 justify-content-center text-center align-items-center",
        style : {
            height : "50px"
        }
    },
    modalBodyText : {
        className : "",
        style : {
            color : color,
            fontFamily : "var(--semi)",
            lineHeight : "27px",
            fontSize : "1em"
        }
    }
})

export const titleJson = (color,othercolor) => ({
    title : {
        className : "m-0",
        style : {
            color : color,
            textTransform : "uppercase",
            fontFamily : "var(--semi)",
            transition : "all 0.3s ease",
            cursor : "pointer"
        }
    },
    closeCrumb : {
        className: "m-0",
        style : {
            fontSize : "14px",
            color : color,
            cursor : "pointer",
            transition : "all 0.3s ease",
        }  
    }
})

export const shareJson = ( color, border, bg ) => ({
    shareTxt : {
        className : "",
        style : {
            color : color
        }
    },
    shareIcon : {
        className : "",
        style : {
            color : color
        }
    },
    shareContainer : {
        className : "py-3 w-100",
        style : {
            borderBottom : `1px solid ${border}`
        }
    },
    shareContainerWrapper : {
        className : "d-flex w-100 align-items-center justify-content-between",
        style: {

        }
    },
    shareInput : {
        className : "border-0 rounded w-100 bg-transparent",
        style : {
            height:"40px",
            outline : 0,
            color : color
        }
    },
    shareButton : {
        className : "h-100 px-3 bg-transparent",
        style : {
            border: `1px solid var(--main-color7)`,
            color : "var(--main-color7)",
        }
    },
    shareBtnContainer : {
        className : "position-absolute w-auto h-100 d-flex align-items-center justify-content-end",
        style : {
            top:0, 
            right:0
        }
    },
    shareUrlWrapper: {
        className : "d-flex w-100 position-relative align-items-center justify-content-start mt-3",
        style : {

        }
    },
    shareHeader : {
        className : "",
        style : {
            color : color,
            fontSize : "1.4em"
        }
    },
    shareHeaderContainer : {
        className : "d-flex w-100 align-items-center justify-content-center py-3",
        style : {

        }
    }
})