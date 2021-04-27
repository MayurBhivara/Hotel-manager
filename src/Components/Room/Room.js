import React from 'react';
import classes from './Room.module.css'
const room = (props)=>{
    var color = 'red';
    if(props.status==='reserved') color = 'orange';
    if(props.status==='vacant') color = 'green';
    return(
        <div style={{border:`2px solid ${color}`}} className={classes.Room}>
            <h4>{props.roomNo}</h4>
            <p>{props.type}</p>
            <p>{props.status}</p>
            <button>{props.action}</button>
        </div>
    );
};
export default room;