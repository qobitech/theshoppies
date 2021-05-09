import { FC } from 'react'
import * as font from '../utils/font/font'
import css from '../assets/css/props.module.css'

interface IProps {
    item : any;
}

const OtherInfo:FC<IProps> = (props) => {

    const { item } = props

    const { Plot, Language, Country, Rated, Released, Runtime, Director, Writer, Actors, BoxOffice, Production } = item

    const firstSection = { Plot, Language, Country, Rated, Released, Runtime, Director }

    const thirdSection = { Writer, Actors, BoxOffice, Production }

    const { Para } = font

    return(

        <div className="d-block w-100 py-4 p-3 rounded" style={{ border : "1px solid #f7f7f7", height : "270px", overflowY : "auto" }}>               
            {Object.keys(firstSection).map((item, index)=>{
                return(
                    <div className="d-flex flex-wrap w-100 align-items-start justify-content-between pb-3">
                        <div className="d-flex py-1" style={{minWidth:"120px"}}>
                            <Para fontclass={`${css.title}`}>
                                {item}
                            </Para>
                        </div>
                        <div className="d-flex py-1" style={{flex:1}}>
                            <Para fontclass={`${css.value}`}>
                                { Object.values(firstSection)[index] }
                            </Para>
                        </div>
                    </div>
                )        
            })}
            <div className="d-flex flex-wrap w-100 align-items-start justify-content-between">
                <div className="d-flex py-1" style={{minWidth:"120px"}}>
                    <Para fontclass={`${css.title} mt-2`} >
                        Genre
                    </Para>
                </div>
                <div className="d-flex py-1" style={{flex:1}}>
                    <div className="d-flex flex-wrap w-100">
                        {Array.isArray( item.Genre ) && item.Genre[0] && item.Genre.map( ( genre: any, index : any ) => {
                            return(
                                <div className="d-flex p-2 mr-1 my-1"  
                                    style={{width:"max-content",height:"max-content", border:"1px solid var(--main-color7)"}} 
                                    key={ index }>
                                    <Para fontclass={`${css.value}`} >
                                        { genre }
                                    </Para>
                                </div>
                        )})}
                    </div>    
                </div>
            </div>
            {Object.keys(thirdSection).map((item, index)=>{
                return(
                    <div className="d-flex flex-wrap w-100 align-items-start justify-content-between pb-3">
                        <div className="d-flex py-1" style={{minWidth:"120px"}}>
                            <Para fontclass={`${css.title}`}>
                                {item}
                            </Para>
                        </div>
                        <div className="d-flex py-1" style={{flex:1}}>
                            <Para fontclass={`${css.value}`}>
                                { Object.values(firstSection)[index] }
                            </Para>
                        </div>
                    </div>
                )        
            })}
        </div>
    )
}

export default OtherInfo
