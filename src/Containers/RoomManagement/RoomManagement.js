import React from 'react';
import Room from '../../Components/Room/Room'
import classes from './RoomManagement.module.css'
const roomManagement = () => {
    return (
        <div className={classes.RoomManagement}>
            <h1>Rooms Status</h1>
            <div className={classes.Controls}>
                <label>Filter</label>
                <select name="filter" defaultValue="all">
                    <option value="all">All</option>
                    <option value="reserved">Reserved</option>
                    <option value="vacant">Vacant</option>
                    <option value="occupied">Occupied</option>
                </select>
                <span className={classes.Find}>
                    <input type="number" name="search" placeholder="Search Room Number" min="1" />
                    <button><i className="fas fa-search"></i></button>
                </span>

            </div>
            <div className={classes.RoomDisplay}>
                <Room roomNo="210" status="reserved" action="Check-in" type="Delux" />
            </div>
        </div>
    );
}
export default roomManagement;