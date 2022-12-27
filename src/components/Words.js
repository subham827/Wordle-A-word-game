import wordbank from "../wordle-bank.txt";
export const boardDefault = [["","","","",""],
                             ["","","","",""],
                             ["","","","",""],
                             ["","","","",""],
                                ["","","","",""],
                             ["","","","",""]];

export const generateRandomWord = async() => {
    let wordset;
    let todaysword;
    let correctWords = ['HELLO','RIGHT','WORLD','BRAIN','FALSE','WHITE','ABOVE','ABOUT','WATER','ALARM','ADMIN','WRONG','GLARE','BADGE','FRONT','PRIME','CLOCK','WATCH','CATCH','CAROL','CARRY','CHAIR','CHALK','CHARM','ERROR','EIGHT']
    try{
        await fetch(wordbank).then(response => response.text()).then((result)=>{
            const wordArr = result.split("\n");
            todaysword = correctWords[Math.floor(Math.random() * correctWords.length)];
            wordset = new Set(wordArr);
        })
        return { wordset, todaysword }

    }
    catch(err){
        console.log(err);
    }
}                             


