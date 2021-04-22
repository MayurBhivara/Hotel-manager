import React from 'react';

const room = (props)=>{
    return(
        <div>
            <h4>{props.roomNo}</h4>
            <p>{props.type}</p>
            <p>{props.status}</p>
            <button>{props.action}</button>
        </div>
    );
};
export default room;