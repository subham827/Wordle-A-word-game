import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const Key = ({keyVal, bigKey, disabled}) => {
    const { board,setBoard,attempt,setAttempt, onSelectLetter, onEnterLetter, onDeleteLetter } = useContext(AppContext)
    const selectletter = ()=>{
       
        if(keyVal === 'ENT'){
           
            onEnterLetter()

        }
        else if(keyVal === 'DEL'){
           
            onDeleteLetter()
        }
        else{
          
            onSelectLetter(keyVal)

    }}
  return (
    <div className='key' id={bigKey ?"big" : disabled && "disabled"} onClick={selectletter}>{keyVal}</div>
  )
}

export default Key