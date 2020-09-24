import React from 'react'


export default function Joke(props){
    return (
        <div>
            <p style={{display: !props.question && 'none'}} className="question">question: {props.question }</p>
            <p style={{color: !props.question && '#888888'}} className="punchLine">punchLine: {props.punchLine }</p>
            <hr/>  
        </div>
    );
}