import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const Letter = ({letterpos,attemptval}) => {
    const { board,correctWord, attempt, disabledLetters,setDisabledLetters } = useContext(AppContext)
    const letter = board[attemptval][letterpos]

    const correct = correctWord[letterpos] === letter
    const almost = !correct && correctWord.includes(letter) && letter !== ''

    // const error = !correct && !almost && letter !== ''

    const letterClass = attempt.attempt > attemptval && (correct ? 'correct' : almost ? 'almost' : 'error' )
useEffect(() => {
    if (letter!=='' &&  !correct && !almost) {
        // setDisabledLetters([...disabledLetters,letter]) this do not update setImmediately 
        setDisabledLetters(disabledLetters => [...disabledLetters,letter])
        
    }
},[attempt.attempt])
  return (
    <div className='letter' id={letterClass}>{letter}</div>
  )
}

export default Letter