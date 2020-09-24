import React from 'react'

function FirstHandleEvents (){
    return(
        <div>
            <button onClick={() => console.log('Hi!')}>Hi!</button>
            <button onClick={() => console.log('HAHAHHAHA')}>HAHAHHAHA</button>
        </div>
    )
}

export default FirstHandleEvents