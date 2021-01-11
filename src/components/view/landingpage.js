import React from 'react'
import Header from '../layout/header.js'
import Footer from '../layout/footer.js'
import * as font from '../utils/font/font'
import Result from './resultpage'
import Nomination from './nominationpage'
import Cookies from 'universal-cookie'
import csshome from './landingpage.module.css'
import * as dataprops from './dataprops'
import Notification from '../notification'
import Share from '../share'
import * as nominationprops from './notificationprops'

const cookies = new Cookies();

class LandingPage extends React.Component {
    constructor( props ){
        super( props )
        this.state={
            title : "",
            isFocus : false,
            isSameObj : false,
            nominations : [],
            isMax : false,
            click : false, 
            share : false,
            message : "",
            tip : "",
            trigger : false
        }
    }

    handleTrigger = () => {
        this.setState( { trigger : !this.state.trigger } )
    }

    handleClick = ( ) => { this.setState( { click : false, message : "", tip : "" } ) }

    componentDidMount( ){
        this.setState( { nominations : this.getNomination( ) } )
    }

    handleShare = ( status ) => this.setState( { share : status } )

    componentDidUpdate( prevProps, prevState ){
        const { max } = nominationprops
        if( prevState.nominations !== this.state.nominations ){
            if( this.state.nominations.length === max ){
                this.setState( { isMax : true } )
            }else{
                this.setState( { isMax : false } )
            }
        }
    }

    handleSubmit = ( ) => { return e => { e.preventDefault( ); } }

    handleOnChange = ( e ) => { this.setState( { [e.target.id] : e.target.value } ) }

    handleFocus = ( bool ) => { this.setState( { isFocus : bool } ) }

    getNomination = ( ) => {
        return Array.isArray( cookies.get( 'nomination' ) ) ? cookies.get( 'nomination' ) : "NO NOMINATIONS"
    }

    compareObj = ( arr, obj ) => {
        var isSame = false; var BreakException = {};
        try{ arr.forEach( item => {
                if ( JSON.stringify( item ) === JSON.stringify( obj ) ){
                    isSame =  true; throw BreakException;
                }
            } )
        }catch( e ) { if( e !== BreakException ) throw e; }
        return isSame;
    }

    addNomination = ( index ) => {
        const { notification, max } = nominationprops;
        if( !this.state.isMax ){
            this.setState( { isSameObj : false, message : "", click : false } )
            const { data } = dataprops; var nomination = [];
            if( Array.isArray( this.getNomination( ) ) ){          
                if( !this.compareObj( this.getNomination( ), data[ index ] ) ){
                    nomination = this.getNomination( ); nomination.push( data[ index ] );
                    cookies.set( 'nomination', JSON.stringify( nomination ) );
                    this.setNotifications( )
                    setTimeout( ( ) => {
                        if( this.state.nominations.length === max ){
                            this.setState( { message : notification.maxNomination.msg, tip : notification.maxNomination.tip, click : true } )
                        }
                    },200 )
                }else{
                    this.setState( { isSameObj : true, message : notification.existingNomination.msg, tip : notification.existingNomination.tip, click : true } )
                }
            }else{
                nomination.push( data[ index ] );
                cookies.set( 'nomination', JSON.stringify( nomination ) );
                this.setNotifications()
            }
        }else{
            this.setState( { message : notification.exceedNomination.msg, 
                             tip : notification.exceedNomination.tip, click : true } )
        }
        this.handleTrigger()
    }

    removeNomination = ( index ) => {
        if( this.state.nominations[ 0 ] ){
            var nomination  = this.getNomination( );
            const arrayindex = nomination.indexOf( nomination[ index ] );
            if( arrayindex > -1 ) nomination.splice( index, 1 );
            cookies.set( 'nomination', JSON.stringify( nomination ) );
            this.setNotifications( );
            this.handleTrigger();
        }
    }

    setNotifications = ( ) => {
        setTimeout( ( ) => { this.setState( { nominations : this.getNomination( ) } ) }, 100 )
    }

    render(){

        const { One, Four } = font

        const { handleSubmit, handleOnChange, handleFocus, addNomination, removeNomination,
                state : { title, isFocus, nominations, trigger }  } = this

        const { data } = dataprops

        const searchWord = title;

        const resultProps = { data, searchWord, addNomination, trigger } 

        const nominationProps = { nominations, removeNomination, trigger }

        const { state : { click, message, tip, share }, handleClick, handleShare } = this

        return(
            <>
            <Header/>
                <Notification  click={ click } message={ message } tip={ tip } handleClick={ handleClick } />
                <Share share={ share } />
                <div className={` container my-0 my-lg-5 p-0`}>
                    <div className={`w-100 pt-2 pb-5 px-3 px-lg-5 ${csshome.bg}`} >
                        <span className="pt-3 d-flex w-100 mt-4 text-left text-md-center justify-content-start justify-content-md-center">
                            <One fontStyle={{color:"var(--main-color7)", overflowWrap: "break-word"}} fontClass={csshome.header}>
                                The Shoppies
                            </One>
                        </span>
                        <span className="pt-4 pb-5 d-flex w-100 text-left text-md-center justify-content-start justify-content-md-center">
                            <Four fontStyle={{fontFamily : "encode_sans_medium", lineHeight:"25px" }} fontClass={csshome.description}>
                                Search & Nominate up to 
                                <span style={{fontSize:"17px", color : "var(--main-color7)"}}>
                                    &nbsp;FIVE (5)&nbsp;
                                </span> of your favorite movies in the Shopify Movie Awards
                            </Four>
                        </span>
                        <span className="d-flex w-100 text-center justify-content-center">
                            <font.Para  fontClass="text-warning" fontStyle={{ cursor:"pointer"}}
                                clickk={ handleShare }  >
                                Share&nbsp;&nbsp;  
                                <span><i className="fas fa-share-alt text-warning" /></span>
                            </font.Para>
                        </span>
                        <form className="w-100 bg-white rounded mt-5" onSubmit={ handleSubmit() } 
                            style={{boxShadow:"var(--box-shadow)"}}>
                            <span className="w-100 d-flex flex-column justify-content-start rounded py-4 px-4">
                                <label htmlFor="title" className="mb-2">Movie Title</label>
                                <span className="w-100 d-flex flex-column position-relative justify-content-start">
                                    <input type="text" name="title" id="title" value={ title } onChange={ handleOnChange } 
                                        className="rounded pl-3" style={{border:`1px solid ${title.length > 0 ? "var(--main-color7)" : "#e6e6e6"}`, height:"50px", outline:0}} 
                                        onFocus={ () => handleFocus( true ) } onBlur={()=> handleFocus( title.length > 0 )} />
                                    <span className={`position-absolute h-100 ${!isFocus ? "d-flex" : "d-none"} align-items-center pl-3`} style={{width:"max-content",top:0,left:0}}>
                                        <i className="fas fa-search" style={{color:"var(--main-color7)"}}/>
                                    </span>
                                    <span className={`position-absolute h-100 ${ title.length > 0 ? "d-flex" : "d-none"} align-items-center pl-3`} style={{width:"max-content",top:0,right:0}}>
                                        <button className="px-3 bg-transparent" 
                                            style={{border:0, borderLeft:"1px solid var(--main-color7)", color:"var(--main-color7)", height:"50px", outline:0}} >
                                            Search
                                        </button>
                                    </span>
                                </span>
                            </span>
                        </form>
                        <span className={`d-flex flex-wrap align-items-start justify-content-between`}>
                            <Result resultProps={ resultProps } />

                            <Nomination nominationProps={ nominationProps } />
                        </span>

                    </div>
                </div>

            <Footer/>
            </>
        )
    }
}

export default LandingPage;