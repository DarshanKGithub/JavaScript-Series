const str = "My Name is Darshan";

function longestString(str){
    let longest = '';
    let secondLargest = '';

    let words = str.split(' ');
    console.log(words);

    for(const word of words){
        if(word.length > longest.length){
            secondLargest = longest;
            longest = word;      
          }
          else if(word !== longest && word<= secondLargest){
            secondLargest = word;
          }
    }
    //  return longest;
    return secondLargest;
}

console.log(longestString(str));