import React from 'react'
import OtherInfo from './otherInfo'
import Lazyload from 'react-lazyload'
import spinner from '../assets/images/spinner.svg'
import homecss from './landingpage.module.css'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

class ResultItem extends React.Component {
    constructor( props ){
        super( props )
        this.state={
            tray : false,
            disabledBtn : false,
            close : "0px"
        }
    }

    getNomination = ( ) => {
        return Array.isArray( cookies.get( 'nomination' ) ) ? cookies.get( 'nomination' ) : "NO NOMINATIONS"
    }

    compareObj = (  ) => {
        var BreakException = {}; const { props : { item }, getNomination } = this
        this.setState( { disabledBtn : false } )
        if( Array.isArray( getNomination() ) ){
            var nominations = getNomination();
            try{ nominations.forEach( notificationitem => {
                    if ( JSON.stringify( notificationitem ) === JSON.stringify( item ) ){
                        this.setState( { disabledBtn : true } )
                        throw BreakException;
                    }else{                  
                        this.setState( { disabledBtn : false } )
                    }
                } )
            }catch( e ) { 
                if( e !== BreakException ) throw e; 
            }
        }
    }

    componentDidMount( ){
        this.compareObj()
    }

    componentDidUpdate( prevProps ){
        const { props : { trigger }, compareObj } = this
        if( prevProps.trigger !== trigger ){
            compareObj( );
        }
    }

    handleTray = () => {
        this.setState( { tray : !this.state.tray, close : homecss.trayclose } )
    }

    handleEvent = ( index ) => {
        const { props : { handleNomination }, compareObj } = this
        handleNomination( index );
        compareObj( );
    }

    render(){

        const { props : { item, data, index, btnTxt, button, buttonDisabled, variant }, 
                state : { tray, disabledBtn, close }, handleTray, handleEvent } = this

        let btnstyle = disabledBtn ? buttonDisabled : button;

        return(

            <span className={`d-block w-100`}  style={{ borderBottom : ( ( data.length - 1 ) === index  || tray ) ? "0" : "1px solid #f7f7f7" }} >
                
                <span className="d-flex flex-wrap align-items-center w-100 justify-content-between" >
                    
                    <span className="mr-3 my-2 d-flex align-items-center justify-content-center" 
                        style={{minWidth:"50px", minHeight:"50px", borderRadius:"50%", border: "1px solid #f5f5f5", overflow:"hidden"}}>
                        <Lazyload placeholder={<img src={ spinner } alt="spinner icon" style={{width:"20px"}}/>} >
                            <img src={ item.Poster } alt="" />
                        </Lazyload>
                    </span>

                    <span className="d-flex flex-wrap align-items-center justify-content-between" style={{flex:1}}>
                        
                        <span className={`d-flex flex-wrap py-4 align-items-center`} style={{flex:1}}>
                            <li style={{fontSize:"14px", listStyleType:"none", maxWidth:"150px", overflowWrap: "break-word", fontFamily:"encode_sans_medium"}} 
                                className="mr-3 my-2">
                                { item.Title }&nbsp;({ item.Year })
                            </li>
                            {variant === "result" ?  
                            <button style={{ ...btnstyle.style }} className={ btnstyle.className } 
                                onClick={ () => handleEvent( index ) } disabled={ disabledBtn } >
                                { btnTxt }
                            </button>
                            :
                            <button style={{ ...button.style }} className={ button.className } 
                                onClick={ () => handleEvent( index ) } >
                                { btnTxt }
                            </button>}                            
                        </span> 

                        <span style={{minWidth:"30px", minHeight:"30px", borderRadius:"50%", fontSize:"16px", cursor: "pointer", 
                            color:"var(--main-color7)", border:".4px solid var(--main-color7"}} 
                            className="d-flex align-items-center justify-content-center" onClick={ handleTray }>
                                { tray ? "-" : "+" }
                        </span>
                        
                    </span>

                </span>
                
                <span className={`d-block w-100 my-2 ${ tray ?  homecss.tray : close }`} style={ { height : "0px", overflow : "hidden" } } > 
                    <OtherInfo item={ item } />
                </span>

            </span>

        )
    }
}

export default ResultItem
