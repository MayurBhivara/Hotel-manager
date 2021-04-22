import React from 'react';
import NavigationItem from '../../Components/NavigationItem/NavigationItem'
import classes from './NavigationBar.module.css'
const navigationBar = ()=>{
    const navItems = ['Home', 'Add Room', 'Edit Room', 'Reciepts'];
    return (
        <div className={classes.NavigationBar}>
            <h1 style={{color:"#810000"}}>Hotel Manager</h1>
            <ul style={{width:"60%"}} className={classes.Navlist}>
                {navItems.map(item=>{
                    return <NavigationItem key={navItems.indexOf(item)} name={item}/>
                })}
            </ul>
        </div>
        
    );
} 
export default navigationBar;