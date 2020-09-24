import React from 'react';
import Joke from './Joke/Joke'

import JokesData from '../data/jokesData.js'

export default function Jokes() {  

    const JokesDataComponents = 
        JokesData.map(joke =>  <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} /> )

  return(
      <div>
       {JokesDataComponents}
      </div>
  )
}

