import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import FontCss from './font.module.css'

interface IProps {
    idea? : string;
    fontclass? : string;
    fontStyle? : {[key:string]: string | number };
    referral? : React.LegacyRef<HTMLHeadingElement>;
    linkRef? : React.Ref<HTMLAnchorElement>;
    areferral? : React.LegacyRef<HTMLAnchorElement>;
    clickk? : React.MouseEventHandler<HTMLHeadingElement> | React.MouseEventHandler<HTMLParagraphElement>;
    click?: React.MouseEventHandler<HTMLAnchorElement>;
    rest? : React.ReactNode;
    fid?: string;
    href?: string;
    ahref?:string;
}

const One : FC<IProps> =(props)=>{
    const {fontStyle,idea,fontclass,referral,clickk} = props
    return(
    <>
    {typeof clickk === 'function' ?
    <h1 id={idea} className={`${FontCss.font_one} ${fontclass}`} style={{...fontStyle}} ref={referral} onClick={clickk} {...props}>{props.children}</h1>
    :
    <h1 id={idea} className={`${FontCss.font_one} ${fontclass}`} style={fontStyle} ref={referral} {...props}>{props.children}</h1>
    }
    </>
    )
}

const Two : FC<IProps> =(props)=>{
    const {fontStyle,fontclass,referral,clickk} = props
    return(
    <>
    {typeof clickk === 'function' ?
    <h2 className={`${FontCss.font_two} ${fontclass}`} style={fontStyle} ref={referral} onClick={clickk} {...props}>{props.children}</h2>
    :
    <h2 className={`${FontCss.font_two} ${fontclass}`} style={fontStyle} ref={referral} {...props}>{props.children}</h2>
    }
    </>
    )
}

const Three  : FC<IProps> =(props)=>{
    const {fontStyle,fontclass,referral,clickk} = props
    return(
    <>
    {typeof clickk === 'function' ?   
    <h3 className={`${FontCss.font_three} ${fontclass}`} style={fontStyle} ref={referral} onClick={clickk} {...props}>{props.children}</h3>
    :
    <h3 className={`${FontCss.font_three} ${fontclass}`} style={fontStyle} ref={referral} {...props}>{props.children}</h3>
    }
    </>
    )
}

const Four  : FC<IProps> =(props)=>{
    const {fontStyle,fontclass,referral,clickk} = props
    return(
    <>
    {typeof clickk === 'function' ? 
    <h4 className={`${FontCss.font_four} ${fontclass}`} style={fontStyle} ref={referral} onClick={clickk} {...props}>{props.children}</h4>
    :
    <h4 className={`${FontCss.font_four} ${fontclass}`} style={fontStyle} ref={referral} {...props}>{props.children}</h4>
    }
    </>
    )
}

const Five  : FC<IProps> =(props)=>{
    const {fontStyle,fontclass,referral,clickk,fid} = props
    return(
    <>
    {typeof clickk === 'function' ? 
    <h5 className={`${FontCss.font_five} ${fontclass}`} style={fontStyle} ref={referral} id={fid} onClick={clickk} {...props}>{props.children}</h5>
    :
    <h5 className={`${FontCss.font_five} ${fontclass}`} style={fontStyle} ref={referral} id={fid} {...props}>{props.children}</h5>
    }
    </>
    )
}

const Six  : FC<IProps> =(props)=>{
    const {fontStyle,fontclass,referral,clickk} = props
    return(
    <>
    {typeof clickk === 'function' ? 
    <h6 className={`${FontCss.font_six} ${fontclass}`} style={fontStyle} ref={referral} onClick={clickk} {...props}>{props.children}</h6>
    :
    <h6 className={`${FontCss.font_six} ${fontclass}`} style={fontStyle} ref={referral} {...props}>{props.children}</h6>
    }
    </>
    )
}

const Para : FC<IProps> =(props)=>{
    const {fontStyle,fontclass,referral,clickk} = props
    return(
    <>
    {typeof clickk === 'function' ?
    <p className={`${FontCss.font_p} ${fontclass}`} style={fontStyle} ref={referral} onClick={clickk} {...props}>{props.children}</p>
    :
    <p className={`${FontCss.font_p} ${fontclass}`} style={fontStyle} ref={referral} {...props}>{props.children}</p>
    }
    </>
    )
}

const Alpha : FC<IProps> =(props)=>{
    const {fontStyle,fontclass,linkRef,href, click,areferral, ahref} = props
    return(
        <>
        {href !== undefined ?
        <Link to={href} className={`${FontCss.font_alpha} ${fontclass}`} style={fontStyle} ref={linkRef} onClick={click}>
            {props.children}
        </Link>
        :
        <a href={ahref} className={`${FontCss.font_alpha} ${fontclass}`} style={fontStyle} ref={areferral} onClick={click} 
            target="_blank" rel="noopener noreferrer" >
            {props.children}
        </a>}
        </>
    )
}

export {
    One,Two,Three,Four,Five,Six,Para,Alpha
}