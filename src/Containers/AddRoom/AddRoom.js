import React, {useState, useEffect} from 'react';
import classes from './AddRoom.module.css'
import axios from 'axios';
const AddRoom = (props)=>{
    const [buttonShow,setButtonShow] = useState(false);
    const [roomData, setRoomData] = useState([]);
    const [data, setData] = useState({
        roomNumber:'',
        type:'',
        status:'vacant',
        guests:[],
        rate:''
    });

    useEffect(() => {
        async function fetchdata() {
            const result = await axios.get('http://localhost:8000/api/rooms');
            setRoomData(result.data);
        }
        fetchdata();
    }, []);    

    const setButtonDisplay = ()=>{
        if(data.roomNumber&&data.type&&data.rate){
            setButtonShow(true);
        }else{
            setButtonShow(false);
        }
    }
    
    useEffect(()=>{
        setButtonDisplay();
    });

    const roomNumberInputHandler = (value)=>{
        setData({...data, roomNumber:value});
    };

    const typeInputHandler = (value)=>{
        value = value.toLowerCase();
        setData({...data, type:value});
    };
    
    const rateInputHadnler = (value)=>{
        setData({...data, rate:value});
    };
    
    const addRoomHandler = (event)=>{
        event.preventDefault();
        for(let i =0; i<roomData.length;i++){
            if(roomData[i].roomNumber===data.roomNumber){
                alert('Room already exist');
                return;
            }
        }

        axios.post('http://localhost:8000/api/rooms/newroom', data);
        setData({roomNumber:'',
        type:'',
        status:'vacant',
        guests:[],
        rate:''});
        props.history.push('/');
    };

    return(
        <div className={classes.AddForm}>
            <h3>Add a new Room</h3>
            <form>
                <div>
                    <label>Room Number: </label>
                    <input onChange={(e)=>roomNumberInputHandler(e.target.value)} value={data.roomNumber} type="number" min="1" placeholder="enter the new room number"  />
                </div>
                <div>
                    <label>Type of Room: </label>
                    <input onChange={(e)=>typeInputHandler(e.target.value)} value={data.type} type="text" placeholder="eg. Delux" />
                </div>
                <div>
                    <label>Rate: </label>
                    <input onChange={(e)=>rateInputHadnler(e.target.value)} value={data.rate} type="number" min="1"/>
                </div>
                <div>
                    <button onClick={(event)=>addRoomHandler(event)} disabled={!buttonShow}>+ Add Room</button>
                </div>
            </form>
        </div>
    );
};
export default AddRoom;