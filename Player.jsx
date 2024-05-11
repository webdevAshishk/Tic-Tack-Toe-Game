import { useState, useEffect } from 'react';
import './Player.css';

function Player(props) {
    let [playerName, setPlayerName] = useState(props.name);
    let [isEditing, setIsEditing] = useState(false);


    function handleChange(event) {
        setPlayerName(event.target.value); 
    }
    
    function handleClick() { 
        if (isEditing === true) {
            props.setPlayer(playerName);  // update
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }

    function handleKey(event) {
        if(event.key == "Enter") 
            props.setPlayer(playerName);
            setIsEditing(false)
    }

    let editablePlayerName = <span className="player-name"> {playerName}</span>;

    if (isEditing === true) {
        editablePlayerName =
            <input 
                type="text" 
                required 
                onChange={handleChange} 
                value={playerName}
                onKeyDown = {handleKey}
                />;
    }

    return (
        <div className="Player-container">
            {editablePlayerName}
            <span className='symbol'> {props.symbol} </span>
            <button onClick={handleClick}> {isEditing ? "Save" : "Edit"} </button>
        </div>
    );
}

export default Player;

/*
function Player(props) {

    let[playerName, setPlayerName] = useState(props.name);
    let[isEditing, setIsEditing] = useState(false);


    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    function handleClick() {
        if(isEditing == true) {
            setIsEditing(false);
        }
        else{
            
            setIsEditing(true);
        }
    }

    let editablePlayerName = <span className="player-name"> {playerName}</span>

    if(isEditing == true) {
        editablePlayerName  = 
            <input type="text" required  onChange={handleChange}  />
    }

    return (
        <div className="Player-container">

            {editablePlayerName}

            <span className='symbol'> {props.symbol} </span>
        
            <button onClick={handleClick}> { isEditing ? "Save" : "Edit" } </button>
        </div>
    );
}
*/

// Onkar Nagarkar     save 





    // isEditing ek useState wala variable hai
    // initially isEditing = "false"
    // click karne par--> handleClick function call hoga --> false ka true kar dega
    // Agar isEditing true hai, toh aap "Save" print karte hai aur isEditing "false" hai toh aap Edit print karte hai 
    // Jaise hi useState wala koi bhi variable ki value change hoti hai toh component wapas render hota hai

/*
    useEffect(() => {
        props.setName(playerName); // Pass the updated playerName to App component
    }, [playerName]); //When any changes are made to the PlayerName
*/