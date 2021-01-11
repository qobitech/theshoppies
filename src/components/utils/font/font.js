import React from 'react';
import { Link } from 'react-router-dom';
import FontCss from './font.module.css'

const One =({fontStyle,idea,fontClass,referral,clickk,...props})=>{
    return(
    <>
    {typeof clickk === 'function' ?
    <h1 id={idea} className={`${FontCss.font_one} ${fontClass}`} style={fontStyle} ref={referral} onClick={clickk} >{props.children}</h1>
    :
    <h1 id={idea} className={`${FontCss.font_one} ${fontClass}`} style={fontStyle} ref={referral}>{props.children}</h1>
    }
    </>
    )
}

const Two =({fontStyle,fontClass,referral,clickk,...props})=>{
    return(
    <>
    {typeof clickk === 'function' ?
    <h2 className={`${FontCss.font_two} ${fontClass}`} style={fontStyle} ref={referral} onClick={clickk} >{props.children}</h2>
    :
    <h2 className={`${FontCss.font_two} ${fontClass}`} style={fontStyle} ref={referral}>{props.children}</h2>
    }
    </>
    )
}

const Three =({fontStyle,fontClass,referral,clickk,...props})=>{
    return(
    <>
    {typeof clickk === 'function' ?   
    <h3 className={`${FontCss.font_three} ${fontClass}`} style={fontStyle} ref={referral} onClick={clickk} >{props.children}</h3>
    :
    <h3 className={`${FontCss.font_three} ${fontClass}`} style={fontStyle} ref={referral}>{props.children}</h3>
    }
    </>
    )
}

const Four =({fontStyle,fontClass,referral,clickk,...props})=>{
    return(
    <>
    {typeof clickk === 'function' ? 
    <h4 className={`${FontCss.font_four} ${fontClass}`} style={fontStyle} ref={referral} onClick={clickk}>{props.children}</h4>
    :
    <h4 className={`${FontCss.font_four} ${fontClass}`} style={fontStyle} ref={referral}>{props.children}</h4>
    }
    </>
    )
}

const Five =({fontStyle,fontClass,referral,fid,clickk,...props})=>{
    return(
    <>
    {typeof clickk === 'function' ? 
    <h5 className={`${FontCss.font_five} ${fontClass}`} style={fontStyle} ref={referral} id={fid} onClick={clickk}>{props.children}</h5>
    :
    <h5 className={`${FontCss.font_five} ${fontClass}`} style={fontStyle} ref={referral} id={fid}>{props.children}</h5>
    }
    </>
    )
}

const Six =({fontStyle,fontClass,referral,clickk,...props})=>{
    return(
    <>
    {typeof clickk === 'function' ? 
    <h6 className={`${FontCss.font_six} ${fontClass}`} style={fontStyle} ref={referral} onClick={clickk}>{props.children}</h6>
    :
    <h6 className={`${FontCss.font_six} ${fontClass}`} style={fontStyle} ref={referral} >{props.children}</h6>
    }
    </>
    )
}

const Para =({fontStyle,fontClass,referral,clickk,...props})=>{
    return(
    <>
    {typeof clickk === 'function' ?
    <p className={`${FontCss.font_p} ${fontClass}`} style={fontStyle} ref={referral} onClick={typeof clickk === 'function' && clickk}>{props.children}</p>
    :
    <p className={`${FontCss.font_p} ${fontClass}`} style={fontStyle} ref={referral} >{props.children}</p>
    }
    </>
    )
}

const Alpha =({fontStyle,ahref,href,fontClass,referral,click,...props})=>{
    return(
        <>
        {href !== undefined ?
        <Link to={href} className={`${FontCss.font_alpha} ${fontClass}`} style={fontStyle} ref={referral} onClick={click}>
            {props.children}
        </Link>
        :
        <a href={ahref} className={`${FontCss.font_alpha} ${fontClass}`} style={fontStyle} ref={referral} onClick={click} 
            target="_blank" rel="noopener noreferrer" >
            {props.children}
        </a>}
        </>
    )
}

export {
    One,Two,Three,Four,Five,Six,Para,Alpha
}