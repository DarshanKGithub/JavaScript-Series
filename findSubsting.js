const str = "My name is Badshah";

function isPresentSubstring(str){
    let find = 'sh';
    for(let i = 0; i < str.length; i++){
        if(str[i] == find){
            return true;
        }
    }
    return false;

}

console.log(isPresentSubstring(str));