import React from 'react'
import * as font from '../utils/font/font'
import ResultItem from './result'
import * as styleProps from './props'
import csshome from './landingpage.module.css'

class Nomination extends React.Component {
    constructor( props ){
        super( props )
        this.state={

        }
    }


    render(){

        const { Three, Five } = font

        const { props : { nominationProps, nominationid } } = this

        const { nominations, removeNomination, trigger, isMobile } = nominationProps || {}

        const btnTxt = "Remove"

        const { moreinfoProps : { buttonRemove } } = styleProps;

        const tapprops = isMobile ? "tab-pane fade" : ""

        return(
            <div className={`${csshome.sticky} col-12 col-lg-6 pr-0 pl-0 pl-lg-3 ${ tapprops }`} id={ nominationid }>      
                <div className="d-flex flex-column bg-white rounded my-5 py-4 px-4" style={{boxShadow:"var(--box-shadow)"}}>
                    <span className="d-flex w-100 align-items-center" style={{overflow:"hidden", height:"45px"}}>
                        <Three fontStyle={{fontFamily:"encode_sans_semi_bold"}}>Nominations</Three>
                    </span>
                    <span className="d-flex w-100 pl-0 mt-4" >
                        <ul className="d-flex flex-column w-100 m-0 p-0"  >
                        {Array.isArray( nominations ) && nominations[0] ? nominations.map( ( item, index ) => {
                            return(
                                <ResultItem  data={ nominations } item={ item } index={ index } handleNomination={ removeNomination } key={ index }
                                    btnTxt={ btnTxt } button={ buttonRemove } variant="nomination" 
                                    trigger={ trigger } />
                            )
                        } )
                        :
                        <Five fontClass="mt-2" fontStyle={{opacity:".7"}}>No Nominations</Five>
                        }
                        </ul>
                    </span>
                </div>
            </div>
        )
    }
}

export default Nomination