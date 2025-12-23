//Q2) Write a function which return longest word from the sentence

const str = "My name is darshan";

function longestWord(str)
{
    let words = str.split(" ");
    let longestWord = "";
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word
        }
    }
    return longestWord;

}

console.log(longestWord(str));
