import React from 'react'
import * as font from '../utils/font/font'
import * as styleProps from './props'

class OtherInfo extends React.Component {
    constructor( props ){
        super( props )
        this.state={
        }
    }

    render(){

        const { moreinfoProps : { title, value } } = styleProps;

        const { Para } = font

        const { props : { item } } = this

        return(

                    <span className="d-block w-100 py-4 p-3 rounded" style={{ border : "1px solid #f7f7f7", height : "270px", overflowY : "auto" }}>
                        <span className="d-flex flex-wrap w-100 align-items-start justify-content-between pb-3">
                            <span className="d-flex py-1" style={{minWidth:"120px"}}>
                                <Para fontClass={`${title.className}`} fontStyle={{...title.style}}>
                                    Plot
                                </Para>
                            </span>
                            <span className="d-flex py-1" style={{flex:1}}>
                                <Para fontClass={`${value.className}`} fontStyle={{...value.style}}>
                                    { item.Plot }
                                </Para>
                            </span>
                        </span>
                        <span className="d-flex flex-wrap w-100 align-items-start justify-content-between pb-3">
                            <span className="d-flex py-1" style={{minWidth:"120px"}}>
                                <Para fontClass={`${title.className}`} fontStyle={{...title.style}}>
                                    Language
                                </Para>
                            </span>
                            <span className="d-flex py-1" style={{flex:1}}>
                                <Para fontClass={`${value.className}`} fontStyle={{...value.style}}>
                                    { item.Language }
                                </Para>
                            </span>
                        </span>
                        <span className="d-flex flex-wrap w-100 align-items-start justify-content-between pb-3">
                            <span className="d-flex py-1" style={{minWidth:"120px"}}>
                                <Para fontClass={`${title.className}`} fontStyle={{...title.style}}>
                                    Country
                                </Para>
                            </span>
                            <span className="d-flex py-1" style={{flex:1}}>
                                <Para fontClass={`${value.className}`} fontStyle={{...value.style}}>
                                    { item.Country }
                                </Para>
                            </span>
                        </span>
                        <span className="d-flex flex-wrap w-100 align-items-start justify-content-between pb-3">
                            <span className="d-flex py-1" style={{minWidth:"120px"}}>
                                <Para fontClass={`${title.className}`} fontStyle={{...title.style}} >
                                    Rated
                                </Para>
                            </span>
                            <span className="d-flex py-1" style={{flex:1}}>
                                <Para fontClass={`${value.className}`} fontStyle={{...value.style}} >
                                    { item.Rated }
                                </Para>
                            </span>
                        </span>                            
                        <span className="d-flex flex-wrap w-100 align-items-start justify-content-between pb-3">
                            <span className="d-flex py-1" style={{minWidth:"120px"}}>
                                <Para fontClass={`${title.className}`} fontStyle={{...title.style}}>
                                    Released
                                </Para>
                            </span>
                            <span className="d-flex py-1" style={{flex:1}}>
                                <Para fontClass={`${value.className}`} fontStyle={{...value.style}}>
                                    { item.Released }
                                </Para>
                            </span>
                        </span>

                        <span className="d-flex flex-wrap w-100 align-items-start justify-content-between pb-3">
                            <span className="d-flex py-1" style={{minWidth:"120px"}}>
                                <Para fontClass={`${title.className}`} fontStyle={{...title.style}}>
                                    Runtime
                                </Para>
                            </span>
                            <span className="d-flex py-1" style={{flex:1}}>
                                <Para fontClass={`${value.className}`} fontStyle={{...value.style}}>
                                    { item.Runtime }
                                </Para>
                            </span>
                        </span>
                        <span className="d-flex flex-wrap w-100 align-items-start justify-content-between pb-3">
                            <span className="d-flex py-1" style={{minWidth:"120px"}}>
                                <Para fontClass={`${title.className}`} fontStyle={{...title.style}}>
                                    Director
                                </Para>
                            </span>
                            <span className="d-flex py-1" style={{flex:1}}>
                                <Para fontClass={`${value.className}`} fontStyle={{...value.style}}>
                                    { item.Director }
                                </Para>
                            </span>
                        </span>
                        <span className="d-flex flex-wrap w-100 align-items-start justify-content-between">
                            <span className="d-flex py-1" style={{minWidth:"120px"}}>
                                <Para fontClass={`${title.className} mt-2`} fontStyle={{...title.style}} >
                                    Genre
                                </Para>
                            </span>
                            <span className="d-flex py-1" style={{flex:1}}>
                                <span className="d-flex flex-wrap w-100">
                                    {Array.isArray( item.Genre ) && item.Genre[0] && item.Genre.map( ( genre, index ) => {
                                        return(
                                            <span className="d-flex p-2 mr-1 my-1"  
                                                style={{width:"max-content",height:"max-content", border:"1px solid var(--main-color7)"}} 
                                                key={ index }>
                                                <Para fontClass={`${value.className}`} fontStyle={{...value.style}}>
                                                    { genre }
                                                </Para>
                                            </span>
                                        )
                                        } )
                                    }
                                </span>    
                            </span>
                        </span>
                        <span className="d-flex flex-wrap w-100 align-items-start justify-content-between pb-3">
                            <span className="d-flex py-1" style={{minWidth:"120px"}}>
                                <Para fontClass={`${title.className}`} fontStyle={{...title.style}}>
                                    Writer
                                </Para>
                            </span>
                            <span className="d-flex py-1" style={{flex:1}}>
                                <Para fontClass={`${value.className}`} fontStyle={{...value.style}}>
                                    { item.Writer }
                                </Para>
                            </span>
                        </span>
                        <span className="d-flex flex-wrap w-100 align-items-start justify-content-between pb-3">
                            <span className="d-flex py-1" style={{minWidth:"120px"}}>
                                <Para fontClass={`${title.className}`} fontStyle={{...title.style}}>
                                    Actors
                                </Para>
                            </span>
                            <span className="d-flex py-1" style={{flex:1}}>
                                <Para fontClass={`${value.className}`} fontStyle={{...value.style}}>
                                    { item.Actors }
                                </Para>
                            </span>
                        </span>
                        <span className="d-flex flex-wrap w-100 align-items-start justify-content-between pb-3">
                            <span className="d-flex py-1" style={{minWidth:"120px"}}>
                                <Para fontClass={`${title.className}`} fontStyle={{...title.style}}>
                                    BoxOffice
                                </Para>
                            </span>
                            <span className="d-flex py-1" style={{flex:1}}>
                                <Para fontClass={`${value.className}`} fontStyle={{...value.style}}>
                                    { item.BoxOffice }
                                </Para>
                            </span>
                        </span>
                        <span className="d-flex flex-wrap w-100 align-items-start justify-content-between pb-3">
                            <span className="d-flex py-1" style={{minWidth:"120px"}}>
                                <Para fontClass={`${title.className}`} fontStyle={{...title.style}}>
                                    Production
                                </Para>
                            </span>
                            <span className="d-flex py-1" style={{flex:1}}>
                                <Para fontClass={`${value.className}`} fontStyle={{...value.style}}>
                                    { item.Production }
                                </Para>
                            </span>
                        </span>
                    </span>
        )
    }
}

export default OtherInfo
