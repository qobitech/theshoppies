import React from 'react'
import * as font from '../utils/font/font'
import ResultItem from './result'
import * as styleProps from './props'

class Result extends React.Component {
    constructor( props ){
        super( props )
        this.state={

        }
    }

    render(){


        const { Three, Five } = font

        const { props : { resultProps } } = this

        const btnTxt = "Nominate"

        const { data, searchWord, addNomination, trigger } = resultProps || {}

        const { moreinfoProps : { button, buttonDisabled } } = styleProps;

        return(
            <div className="col-12 col-lg-6 pl-0 pr-0 pr-lg-3">
                <div className="d-block w-100 bg-white rounded mt-5 mb-2 py-4 px-4" style={{boxShadow:"var(--box-shadow)"}} >
                    <span className="d-flex w-100 align-items-center" style={{overflow:"hidden", height:"45px"}}>
                        <Three fontStyle={{overflowWrap: "break-word",fontFamily:"encode_sans_semi_bold"}}>
                            Results { searchWord.length > 0 ? "for \""+searchWord+"\"" : "" }
                        </Three>
                    </span>

                    <span className="d-flex w-100 pl-0 mt-4" >
                        <ul className="d-flex flex-column w-100 m-0 p-0"  >
                        {Array.isArray( data ) && data[0] ? data.map( ( item, index ) => {
                            return(
                                <ResultItem  data={ data } item={ item } index={ index } handleNomination={ addNomination } 
                                    key={ index } btnTxt={ btnTxt } button={ button } buttonDisabled={ buttonDisabled } 
                                    variant="result" trigger={ trigger } />
                            )
                        } )
                        :
                        <Five fontClass="mt-2" fontStyle={{opacity:".7"}}>No Search Results</Five>
                        }
                        </ul>
                    </span>
                </div>    
            </div>
        )
    }
}

export default Result
