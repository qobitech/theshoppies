import Cookies from 'universal-cookie'
import { useEffect, useState } from 'react'
import { IMovies } from '../interface'
import * as dataprops from '../view/dataprops'
import * as nominationprops from '../view/notificationprops'

export const compareObj = ( arr : Array<{[key:string]:any}>, obj : {[key:string]:any} ) => {
    var isSame = false;
    for(let index in arr) {
        if ( JSON.stringify( arr[index] ) === JSON.stringify( obj ) ){
            isSame = true;
            break;
        }
    }
    return isSame
}

const cookies = new Cookies();

type INotifications = Array<{[key:string]:any}>

export const getNominations = ( ) : IMovies => {
    return Array.isArray( cookies.get( 'nomination' ) ) ? cookies.get( 'nomination' ) : "0"
}

export const removeNomination = ( index : number ) => {
    if( getNominations().length !== 0 ){
        var nominations  = getNominations();
        const arrayindex = nominations.indexOf( nominations[ index ] );
        if( arrayindex > -1 ) nominations.splice( index, 1 );
        cookies.set( 'nomination', JSON.stringify( nominations ) );
    }
}

export const useNominations = ( currentNomination : INotifications ) => {
    const [ nominations, setNominations ] = useState<INotifications>()
    useEffect(()=>{
        if(currentNomination !== nominations){
            if(getNominations().length !== 0){
                setNominations(currentNomination)
                cookies.set( 'nomination', JSON.stringify( currentNomination ) );
            }
        }
    },[currentNomination, nominations])
    
    return [ nominations ]
}

interface INavigate {
    formBtn : React.RefObject<HTMLButtonElement>;
}

export const useData = ( props : INavigate ) => {

    const [ data, setData ] = useState<IMovies>([]);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string>('');
    const [ numberofPages, setNumberofPages ] = useState<number>(0);
    const [ title, setTitle ] = useState<string>('');
    const [ page, setPage ] = useState<number>(1);
    const [ first, setFirst ] = useState<boolean>(false);
    const [ last, setLast ] = useState<boolean>(false);
    const [ isFocus, setIsFocus ] = useState<boolean>(false);
    const [ share, setShare ] = useState<boolean>(false);
    const [ click, setClick ] = useState<boolean>(false);
    const [ message, setMessage ] = useState<string>('');
    const [ tip, setTip ] = useState<string|JSX.Element>('');
    const [ isMobile, setIsMobile ] = useState<boolean>(false);
    const [ nominations, setNominations ] = useState<IMovies>([])

    const  { formBtn } = props

    const handlePage = ( sign : string ) => {
        switch ( sign ){
            case 'add' : setPage(page+1); 
                        setTimeout( () => { formBtn.current !== null && formBtn.current.click() },200) 
                        break;
            case 'minus' : setPage(page-1); 
                        setTimeout( () => { formBtn.current !== null && formBtn.current.click() },200) 
                        break;
            default : break;
        }
    }

    const handleMobile = () => setIsMobile(window.innerWidth < 992)

    const handleData = ( data : any ) => {
        setData(data)
    }

    const handleLoading = ( status:boolean ) => {
        setLoading(status)
    }

    const handleError = ( error : string ) => {
        setError(error)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        const { getMovieData } = dataprops
        if( title.length > 0 ){
            getMovieData( title, handleData, handleLoading, handleError, setNumberofPages, page, setFirst, setLast )
        }
    }

    const handleOnChange = ( e : React.ChangeEvent<HTMLInputElement> ) => { 
        setTitle(e.target.value) 
    }

    const handleClick = ( ) => { 
        setClick(false) 
        setMessage( "" );
        setTip( "" )
    }

    const handleShare = ( status:boolean ) => {
        setShare(status)
        setTimeout(()=>setShare(false),500);
    }

    const handleFocus = ( bool : boolean ) => { 
        setIsFocus(bool) 
    }

    const setMovieNominations = ( ) => {
        setTimeout(()=>setNominations(getNominations()),100)
    }

    // useEffect(()=>{
    //     const { getMovieData } = dataprops
    //     if( title.length > 0 ){
    //         getMovieData(title, handleData, handleLoading, handleError, setNumberofPages, page, setFirst, setLast)
    //     }
    // },[title, page])

    useEffect(()=>{
        handleMobile()
        setMovieNominations();
    },[]) 

    const addNomination = ( index : number ) => {
        const {max, notification} = nominationprops;
        if( getNominations().length !== max ){
            setMessage('');setClick(false);
            var nominations = [];
            if( Array.isArray(getNominations())){          
                nominations = getNominations(); 
                nominations.push( data[ index ] );
                cookies.set( 'nomination', JSON.stringify( nominations ) );
                setMovieNominations();
                setTimeout( ( ) => {
                    if( nominations.length === max ){
                        setMessage(notification.maxNomination.msg);
                        setTip(notification.maxNomination.tip);
                        setClick(true);
                    }
                },200 )
            }else{
                nominations.push( data[ index ] );
                cookies.set( 'nomination', JSON.stringify( nominations ) );
                setMovieNominations();
            }
        }else{
            setMessage(notification.exceedNomination.msg);
            setTip(notification.exceedNomination.tip);
            setClick(true);
        }
    }

    const removeNomination = ( index : number ) => {
        if( getNominations().length !== 0 ){
            var nominations  = getNominations();
            const arrayindex = nominations.indexOf( nominations[ index ] );
            if( arrayindex > -1 ) nominations.splice( index, 1 );
            cookies.set( 'nomination', JSON.stringify( nominations ) );
            setMovieNominations();
        }
    }

    return { handleOnChange, handleSubmit, data, loading, error, numberofPages, first, last, handlePage, title,
        handleFocus, handleShare, handleClick, isFocus, share, click, message, tip, nominations, isMobile, 
        addNomination, removeNomination }
}