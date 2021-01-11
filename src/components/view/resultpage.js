import React from 'react'
import * as font from '../utils/font/font'
import ResultItem from './result'
import * as styleProps from './props'
import spinner from '../assets/images/spinner.svg'

class Result extends React.Component {
    constructor( props ){
        super( props )
        this.state={

        }
    }

    render(){


        const { Three, Five } = font

        const { props : { resultProps, resultid } } = this

        const btnTxt = "Nominate"

        const { data, loading, error, searchWord, addNomination, trigger, isMobile, handlePage, numberofPages, first, last } = resultProps || {}

        const { moreinfoProps : { button, buttonDisabled, buttonPagination } } = styleProps;

        const tapprops = isMobile ? "tab-pane in active" : ""

        let nextbtnStyle = last ? buttonDisabled : buttonPagination

        let prevbtnStyle = first ? buttonDisabled : buttonPagination

        return(
            <div className={`col-12 col-lg-6 pl-0 pr-0 pr-lg-3 ${ tapprops }`} id={ resultid }  >
                <div className="d-block w-100 bg-white rounded mt-5 mb-2 py-4 px-4" style={{boxShadow:"var(--box-shadow)"}} >
                    <span className="d-flex w-100 align-items-center" style={{overflow:"hidden", height:"45px"}}>
                        <Three fontStyle={{overflowWrap: "break-word",fontFamily:"encode_sans_semi_bold"}}>
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
                                    key={ index } btnTxt={ btnTxt } button={ button } buttonDisabled={ buttonDisabled } 
                                    variant="result" trigger={ trigger } />
                            )
                        } )}
                        <span className="d-block w-100 border-top">
                            <span className="d-flex w-100 align-items-center justify-content-center py-4" >
                                <Five fontStyle={{opacity:.7}}>{ numberofPages }</Five>
                            </span>
                            <span className="d-flex w-100 align-items-center justify-content-center pb-3">
                                <button className={ prevbtnStyle.className } style={{ ...prevbtnStyle.style }} 
                                    onClick={ ( ) => handlePage( "minus" ) } disabled={ first }>
                                    <i className="fas fa-angle-left"></i>
                                    &nbsp;&nbsp;PREVIOUS
                                </button>
                                <span className="d-flex px-1"/>
                                <button className={ nextbtnStyle.className } style={{ ...nextbtnStyle.style }} 
                                    onClick={ ( ) => handlePage( "add" ) } disabled={ last } >
                                    NEXT&nbsp;&nbsp;
                                    <i className="fas fa-angle-right"></i>
                                </button>
                            </span>
                        </span>
                        </>
                        :
                        <Five fontClass="mt-2" fontStyle={{opacity:".7"}}>No Search Results</Five>
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
}

export default Result
