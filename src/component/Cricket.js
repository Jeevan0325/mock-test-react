import React from "react";
import "./Cricket.css"



const Cricket11 = ({name,score,jersey,wicket,image}) =>{
    return(
        <div>
            <div className="player">
                <img className="image" src={image} alt="" />
                <div className="player-name">Name:{name}</div>
                <div className="player-score">Score:{score}</div>
                <div className="player-jersey">Jersry:{jersey}</div>
                <div className="player-wicket">Wickets:{wicket}</div>
            </div>
            
        </div>
    )
}
export default Cricket11;