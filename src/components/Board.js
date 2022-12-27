import React from 'react'
import { useState } from 'react'
import { boardDefault } from './Words'
import Letter from './Letter'
const Board = () => {
  
  return (
    <div className='board'>
        
        <div className='row'>
        <Letter letterpos={0} attemptval={0}></Letter>
        <Letter letterpos={1} attemptval={0}></Letter>
        <Letter letterpos={2} attemptval={0}></Letter>
        <Letter letterpos={3} attemptval={0}></Letter>
        <Letter letterpos={4} attemptval={0}></Letter>
        </div>
        
        <div className='row'>
        <Letter letterpos={0} attemptval={1}></Letter>
        <Letter letterpos={1} attemptval={1}></Letter>
        <Letter letterpos={2} attemptval={1}></Letter>
        <Letter letterpos={3} attemptval={1}></Letter>
        <Letter letterpos={4} attemptval={1}></Letter>
        </div>
        
        <div className='row'>
        <Letter letterpos={0} attemptval={2}></Letter>
        <Letter letterpos={1} attemptval={2}></Letter>
        <Letter letterpos={2} attemptval={2}></Letter>
        <Letter letterpos={3} attemptval={2}></Letter>
        <Letter letterpos={4} attemptval={2}></Letter>
        </div>
        
        <div className='row'>
        <Letter letterpos={0} attemptval={3}></Letter>
        <Letter letterpos={1} attemptval={3}></Letter>
        <Letter letterpos={2} attemptval={3}></Letter>
        <Letter letterpos={3} attemptval={3}></Letter>
        <Letter letterpos={4} attemptval={3}></Letter>
        </div>
        
        <div className='row'>
        <Letter letterpos={0} attemptval={4}></Letter>
        <Letter letterpos={1} attemptval={4}></Letter>
        <Letter letterpos={2} attemptval={4}></Letter>
        <Letter letterpos={3} attemptval={4}></Letter>
        <Letter letterpos={4} attemptval={4}></Letter>
        </div>
        
        <div className='row'>
        <Letter letterpos={0} attemptval={5}></Letter>
        <Letter letterpos={1} attemptval={5}></Letter>
        <Letter letterpos={2} attemptval={5}></Letter>
        <Letter letterpos={3} attemptval={5}></Letter>
        <Letter letterpos={4} attemptval={5}></Letter>
        </div>
       
    </div>
  )
}

export default Board