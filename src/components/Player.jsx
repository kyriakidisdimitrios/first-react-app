import {useState} from 'react';
//export default function Player({name, symbol}){
export default function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName); //sth react mporw na exw panw apo 1 xrhsh ths useState
    const [ isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        //setIsEditing(!isEditing); enw leitourgei den einai kai toso swsto, giati den einai instant
        setIsEditing((editing) => !editing); //o kaluteros tropos gia swing sthn react
    }
    function handleChange(event){ //8a katalabei to target automata
        setPlayerName(event.target.value);
    }//gia na mporw na kanw update to player name

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //let btnCaption = 'Edit';
    if (isEditing) {
        editablePlayerName =( <input type = "text" required value={playerName} onChange={handleChange}/>
    );
        //playerName = <input type = "text" required defaultValue={name} />; //gia na mporei na allazei
        //btnCaption = 'Save';
    }

    //Bhma 2
     return (
        <li>
             <span className="player">
                 {/*{playerName}*/}
                 {editablePlayerName}
             <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick = {handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}