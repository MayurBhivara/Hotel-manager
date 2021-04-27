import React from 'react';
import classes from './NavigationItem.module.css'
import { Link } from 'react-router-dom';
const navigationItem = (props) => {
    let link = props.name.trim().split(" ").join('').toLowerCase();
    link = `/${link}`;
    return (
        <Link to={link} >
            <li className={classes.NavigationItem}>
                {props.name}
            </li>
        </Link>
    );

};
export default navigationItem;