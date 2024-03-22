let str ='shahahs';
let palindrome=true
for (let i = 0; i < str.length/2; i++) {
    if (str[i]!==str[str.length-1-i]) {
        palindrome =false
        break;
    }
    
}
if(palindrome){
    console.log('palindrome')
}else{
    console.log('no')
}