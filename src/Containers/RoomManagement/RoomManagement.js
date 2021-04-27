import React, { useState, useEffect } from 'react';
import Room from '../../Components/Room/Room'
import classes from './RoomManagement.module.css'
import axios from 'axios';
const RoomManagement = () => {
    const [rooms, setRooms] = useState([]);
    const [roomData, setRoomData] = useState([]);
    const [roomInput, setRoomInput] = useState(0);

    useEffect(() => {
        async function fetchdata() {
            const result = await axios.get('http://localhost:8000/api/rooms');
            setRooms(result.data);
            setRoomData(result.data);
        }
        fetchdata();
    }, []);

    const roomInputhandler = (value) => {
        setRoomInput(value);
    };

    const roomSearchBynumber = () => {
        if(!roomInput) {
            alert("Enter a valid number");
            setRoomData(rooms);
            return;
        }
        var room = rooms.filter(x=>{
            return x.roomNumber === roomInput;
        })
        // if(roomInput===null) return;
        if(room.length===0){
            alert(`Room ${roomInput} does not exist`);
            setRoomData(rooms);
        } 
        else setRoomData(room);
    }

    const filterHandler = (value)=>{
        var filteredData = null;
        switch(value){
            case 'reserved':
                filteredData = rooms.filter(x=>{
                    return x.status==='reserved';
                });
                setRoomData(filteredData);
                break;
            case 'vacant':
                filteredData = rooms.filter(x=>{
                    return x.status==='vacant';
                });
                setRoomData(filteredData);
                break;
            case 'occupied':
                filteredData = rooms.filter(x=>{
                    return x.status==='occupied';
                });
                setRoomData(filteredData);
                break;
            default:
                setRoomData(rooms);
                break;
        }
    };

    return (
        <div className={classes.RoomManagement}>
            <h1>Rooms Status</h1>
            <div className={classes.Controls}>
                <label>Filter</label>
                <select onChange={(event)=>filterHandler(event.target.value)} name="filter" defaultValue="all">
                    <option value="all">All</option>
                    <option value="reserved">Reserved</option>
                    <option value="vacant">Vacant</option>
                    <option value="occupied">Occupied</option>
                </select>
                <span className={classes.Find}>
                    <input onChange={(e) => roomInputhandler(e.target.value)} value={roomInput} type="number" name="search" placeholder="Search Room Number" min="0" />
                    <button onClick={roomSearchBynumber}><i className="fas fa-search"></i></button>
                </span>

            </div>
            <div className={classes.RoomDisplay}>
                {roomData.map(el => {
                    return <Room key={el.roomNumber} roomNo={el.roomNumber} status={el.status} action={el.status === "occupied" ? 'check-out' : 'check-in'} type={el.type} />
                })}
            </div>
        </div>
    );
}
export default RoomManagement;