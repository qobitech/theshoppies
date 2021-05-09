import { FC } from 'react'
import * as font from '../utils/font/font'
import ResultItem from './result'
import spinner from '../assets/images/spinner.svg'
import css from '../assets/css/props.module.css'

interface IProps {
    resultProps : { [ key : string ] : any };
}

const Result : FC<IProps> = ( props ) => {

        const { Three, Five } = font

        const { resultProps } = props

        const btnTxt = "Nominate"

        const { data, loading, error, searchWord, addNomination, isMobile, handlePage, numberofPages, first, last } = resultProps || {}

        const tapprops = isMobile ? "tab-pane in active" : ""

        let nextbtnStyle = last ? css.buttonDisabled : css.buttonPagination

        let prevbtnStyle = first ? css.buttonDisabled : css.buttonPagination

        return(
            <div className={`col-12 col-lg-6 pl-0 pr-0 pr-lg-3 ${ tapprops }`} >
                <div className="d-block w-100 bg-white rounded mt-5 mb-2 py-4 px-4" style={{boxShadow:"var(--box-shadow)"}} >
                    <span className="d-flex w-100 align-items-center" style={{overflow:"hidden", height:"45px"}}>
                        <Three fontStyle={{overflowWrap : "break-word", fontFamily:"encode_sans_semi_bold"}} >
                            Results { searchWord.length > 0 ? "for \""+searchWord+"\"" : "" }
                        </Three>
                    </span>

                    <span className="d-flex w-100 pl-0 mt-4" >
                        {loading ?
                            <span className="d-block text-center w-100 py-3">
                                <img src={ spinner } alt="" style={{ width:"40px", height:"40px" }}/>
                            </span>
                        :
                        error.length < 1 ?
                        <ul className="d-flex flex-column w-100 m-0 p-0"  >
                        {Array.isArray( data ) && data[0] ? 
                        <>
                        {data.map( ( item, index ) => {
                            return(
                                <ResultItem  data={ data } item={ item } index={ index } handleNomination={ addNomination } 
                                    key={ index } btnTxt={ btnTxt } 
                                    variant="result" />
                            )
                        } )}
                        <span className="d-block w-100 border-top">
                            <span className="d-flex w-100 align-items-center justify-content-center py-4" >
                                <Five fontStyle={{opacity:.7}}>{ numberofPages }</Five>
                            </span>
                            <span className="d-flex w-100 align-items-center justify-content-center pb-3">
                                <button className={ `px-3 ml-0 ml-md-3 rounded text-black ${first ? 'bg-transparent' : ''} ${prevbtnStyle}` } onClick={ ( ) => handlePage( "minus" ) } disabled={ first }>
                                    <i className="fas fa-angle-left"></i>
                                    &nbsp;&nbsp;PREVIOUS
                                </button>
                                <span className="d-flex px-1"/>
                                <button className={ `px-3 ml-0 ml-md-3 rounded ${last ? 'bg-transparent' : ''} ${nextbtnStyle}` } onClick={ ( ) => handlePage( "add" ) } disabled={ last } >
                                    NEXT&nbsp;&nbsp;
                                    <i className="fas fa-angle-right"></i>
                                </button>
                            </span>
                        </span>
                        </>
                        :
                        <Five fontclass="mt-2" fontStyle={{opacity:".7"}}>No Search Results</Five>
                        }
                        </ul>
                        :
                        <span className="d-block text-center w-100 py-3">
                            <Five>{error}</Five>
                        </span>
                        }
                    </span>
                </div>    
            </div>
        )
}

export default Result
