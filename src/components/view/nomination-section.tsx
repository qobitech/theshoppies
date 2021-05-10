import { FC } from 'react'
import * as font from '../utils/font/font'
import ResultItem from './result'
import csshome from '../assets/css/landingpage.module.css'
import css from '../assets/css/props.module.css'
import { IMovies } from '../interface'

interface IProps {
    nominationProps : { 
        nominations : IMovies; 
        isMobile : boolean; 
        removeNomination : (index:number)=>void 
    };
    nominationid? : string;
}

const Nomination : FC<IProps> = (props) => {

    const { Three, Five } = font

    const { nominationProps, nominationid } = props

    const { isMobile, nominations, removeNomination } = nominationProps || {}

    const btnTxt = "Remove"

    const tapprops = isMobile ? "tab-pane fade" : ""

    return(
        <div className={`${csshome.sticky} col-12 col-lg-6 pr-0 pl-0 pl-lg-3 ${ tapprops }`} id={ nominationid }>      
            <div className="d-flex flex-column bg-white rounded my-5 py-4 px-4" style={{boxShadow:"var(--box-shadow)"}}>
                <div className="d-flex w-100 align-items-center" style={{overflow:"hidden", height:"45px"}}>
                    <Three fontStyle={{fontFamily:"encode_sans_semi_bold"}}>Nominations</Three>
                </div>
                <div className="d-flex w-100 pl-0 mt-4" >
                    <ul className="d-flex flex-column w-100 m-0 p-0"  >
                    {Array.isArray( nominations ) && nominations[0] ? nominations.map( ( item, index ) => {
                        return(
                            <ResultItem  data={ nominations } item={ item } index={ index } handleNomination={ removeNomination } key={ index }
                                btnTxt={ btnTxt } variant="nomination" />
                        )
                    } )
                    :
                    <Five fontclass="mt-2" fontStyle={{opacity:".7"}}>No Nominations</Five>
                    }
                    </ul>
                </div>
                {nominations.length === 5 &&
                <div className="d-block w-100 border-top p-0 py-3 text-center">                 
                    <button className={`px-3 ml-0 ml-md-3 rounded border-0 ${css.button}`} >
                                Submit Nominations
                    </button>                        
                </div>}
            </div>
        </div>
    )
}

export default Nomination