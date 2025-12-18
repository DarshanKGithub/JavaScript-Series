const str = "My Name is Darshan";

function longestString(str){
    let longest = '';

    let words = str.split(' ');
    console.log(words);

    for(const word of words){
        if(word.length > longest.length){
            longest = word;        }
    }
     return longest;
}

console.log(longestString(str));