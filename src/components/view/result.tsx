import { FC, useState } from 'react'
import Lazyload from 'react-lazyload'
import spinner from '../assets/images/spinner.svg'
import Cookies from 'universal-cookie'
import Aos from 'aos'
import 'aos/dist/aos.css'
import css from '../assets/css/props.module.css'
import { compareObj } from '../utils'
import { IMovies, IMovie } from '../interface'

const cookies = new Cookies();

Aos.init();

interface IProps {
    item : IMovie;
    handleNomination:( index: number )=>void;
    data : IMovies; 
    index : number; 
    btnTxt: string; 
    variant : string;
}

const ResultItem : FC<IProps> = ( props ) => {

    const { item, handleNomination, data, index, btnTxt, variant } = props
    const [ clicked, setClicked ] = useState(false);

    const getNomination = ( ) => Array.isArray( cookies.get( 'nomination' ) ) ? cookies.get( 'nomination' ) : "NO NOMINATIONS"

    const isSame = compareObj(getNomination(), item )

    const handleEvent = ( index : number ) => {
        handleNomination( index );
        setClicked(!clicked)
    }

    let btnstyle = isSame ? css.buttonDisabled : css.button;

    return(
        <div className={`d-block w-100`} data-aos="zoom-in" data-aos-once="true"
            style={{ borderBottom : ( ( data.length - 1 ) === index  || false ) ? "0" : "1px solid #f7f7f7" }} >
            
            <div className="d-flex flex-wrap align-items-center w-100 justify-content-between" >
                
                <div className="mr-3 my-2 d-flex align-items-center justify-content-center" 
                    style={{minWidth:"50px", minHeight:"50px", overflow:"hidden"}} >
                    <Lazyload placeholder={<img src={ spinner } alt="spinner icon" style={{width:"20px"}}/>} >
                        <img src={ item.Poster } alt="" style={{width:"50px", height:"50px"}} />
                    </Lazyload>
                </div>

                <div className="d-flex flex-wrap align-items-center justify-content-between" style={{flex:1}}>                  
                    <div className={`d-flex py-4 align-items-center justify-content-between`} style={{flex:1}}>
                        <li style={{fontSize:"14px", listStyleType:"none", maxWidth:"270px", overflowWrap: "break-word", 
                                    fontFamily:"encode_sans_medium", lineHeight:"25px" }} 
                            className="mr-3 my-2">
                            { item.Title }&nbsp;({ item.Year })
                        </li>
                        {variant === "result" ?  
                        <button className={`px-3 ml-0 ml-md-3 rounded border-0 ${btnstyle}`} onClick={ () => handleEvent( index ) } disabled={ isSame } >
                            { btnTxt }
                        </button>
                        :
                        <button className={`px-3 ml-0 ml-md-3 rounded border-0 ${css.button}`} onClick={ () => handleEvent( index ) } >
                            { btnTxt }
                        </button>}                            
                    </div>                         
                </div>

            </div>

        </div>

        )
}

export default ResultItem