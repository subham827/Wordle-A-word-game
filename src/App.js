
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { useState,useEffect } from 'react'
import { boardDefault,generateRandomWord } from './components/Words'
import Rules from './components/Rules';
import { Button } from '@mui/material';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { createContext } from 'react';


export const AppContext = createContext();
function App() {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [max, setMax] = useState(0);
  
 
  // const correctWord = correctWords[Math.floor(Math.random()*correctWords.length)] 
  const [hint,setHint] = useState('No hint available')
  const [correctWord, setcorrectWord] = useState("");
  const [board,setBoard] = useState(boardDefault);
  const [attempt,setAttempt] = useState({attempt:0,letter:0});
  const [playagain,setPlayagain] = useState(false);
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([]);
  useEffect(()=>{
    generateRandomWord().then((result)=>{
    setWordSet(result.wordset) 
    setcorrectWord(result.todaysword.toUpperCase())
    console.log(result.todaysword.toUpperCase());   
    })},[])
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
      
    }
    const handleplay = ()=>{
      setPlayagain(false);
      if(score > max){
        setMax(score);
      }
      setScore(0);
      
      setAttempt({attempt:0,letter:0});
      setBoard( [["","","","",""],
      ["","","","",""],
      ["","","","",""],
      ["","","","",""],
         ["","","","",""],
      ["","","","",""]]);
      setDisabledLetters([]);
      generateRandomWord().then((result)=>{
        setWordSet(result.wordset) 
        setcorrectWord(result.todaysword.toUpperCase())
        console.log(result.todaysword.toUpperCase());   
        })
    }
    const handleclick = () => {
      setOpen(true);
      if(correctWord === 'HELLO'){
        setHint('Greeting')
      }
      else if(correctWord === 'RIGHT'){
        setHint('Correct')
      }
      else if(correctWord === 'WORLD'){
        setHint('Land and Water')
      }
      else if(correctWord === 'BRAIN'){
        setHint('Think!')
      }
      else if(correctWord === 'FALSE'){
        setHint('Not True')
      }
      else if(correctWord === 'DRUGS'){
        setHint('Walter White 👨‍🦲🎩👓')
      }
      else if(correctWord === 'ABOVE'){
        setHint('Up')
      }
      else if(correctWord === 'ABOUT'){
        setHint('I know ____ everything')
      }
      else if(correctWord === 'WATER'){
        setHint('Rhymes with daughter')
      }
      else if(correctWord === 'ALARM'){
        setHint('Wake up')
      }
      else if(correctWord === 'ADMIN'){
        setHint('Boss')
      }
      else if(correctWord === 'WRONG'){
        setHint('Incorrect')
      }
      else if(correctWord === 'GLARE'){
        setHint('Stare')
      }
      else if(correctWord === 'BADGE'){
        setHint('Police')
      }
      else if(correctWord === 'FRONT'){
        setHint('First')
      }
      else if(correctWord === 'PRIME'){
        setHint('Strongest transformer is optimus ___')
      }
      else if(correctWord === 'CLOCK'){
        setHint('Time')
      }
      else if(correctWord === 'WATCH'){
        setHint('Time')
      }
      else if(correctWord === 'CATCH'){
        setHint('In trignometry what is 1/tan')
      }
      else if(correctWord === 'CAROL'){
        setHint('Christmas')
      }
      else if(correctWord === 'CARRY'){
        setHint('Rhymes with the synonym of wedding')
      }
      else if(correctWord === 'CHARM'){
        setHint('Cinderella love interest')
      }
      else if(correctWord === 'ERROR'){
        setHint('404 Not Found')
      }
      else if (correctWord === 'EIGHT'){
        setHint('Number')
      }

    }
      
  const onSelectLetter = (keyVal) => {
     if(attempt.letter > 4){
                return
            }
            const currBoard = [...board]
            currBoard[attempt.attempt][attempt.letter] = keyVal
            setBoard(currBoard)
            setAttempt({attempt:attempt.attempt,letter:attempt.letter+1})
  }
  const onDeleteLetter = () => {
     if(attempt.letter === 0){
                return;
            }
            const currBoard = [...board]
            currBoard[attempt.attempt][attempt.letter-1] = ''
            setBoard(currBoard)
            setAttempt({attempt:attempt.attempt,letter:attempt.letter-1})
  }
  const onEnterLetter = () => {
      if(attempt.letter !==5){
                return;
            }

            let currWord = "";
            for(let i=0;i<5;i++){
                currWord += board[attempt.attempt][i]

            }
            if(!wordSet.has(currWord.toLowerCase())){
                alert("Word not found")
                return;
            }
            if(attempt.attempt === 5){
                alert("Game Over the correct word is  " + correctWord)
                setPlayagain(true);
                return;
            }
           if (currWord === correctWord) {
                alert("You Win! Your score is " + (5-attempt.attempt)*20)
                setScore((5-attempt.attempt)*20);
                // setHighestScore([...highestScore,score]);
                setPlayagain(true);
                return;
            
           }
            

            setAttempt({attempt:attempt.attempt+1,letter:0})
  }
  return (
    <div className="App">
     <nav>
      <h1>Wordle</h1>
      
     </nav>
     <AppContext.Provider value={{board,setBoard,attempt,setAttempt, onSelectLetter, onEnterLetter, onDeleteLetter, correctWord, disabledLetters, setDisabledLetters}}>
      <h2>Current Score : {score}</h2>
      <h2>Highest Score : {Math.max(score,max)}</h2>
      <div className='game'>

      <Board />
      <Keyboard />
      </div>
     </AppContext.Provider>
     <Button variant="outlined" onClick={handleclick}>
      Get Hint
</Button>
<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}  >
<Alert severity="info">{hint}</Alert>
 
</Snackbar>
{playagain && <Button variant="outlined" onClick={handleplay}>Play again </Button>}



    </div>
  );
}

export default App;
