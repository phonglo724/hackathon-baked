import React from 'react'


export default function ImageBox(props) {
    
    return (
        <div className="image-box">
            <img 
            src={props.imageList[props.imageIndex]} 
            alt="baked" 
            onClick={props.onClickForward}/>
        </div>
    );
}
