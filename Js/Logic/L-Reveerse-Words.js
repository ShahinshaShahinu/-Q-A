let str = 'Hello World shahinsha actor good person' ;
let Arstr=[];
let sampleStr='';
let NewStr=''
for (let i = 0; i <str.length; i++) {
    if (str[i]!=' ' && str.length-1 != i) {
        
        sampleStr+=str[i]
    }else{
        if (str.length-1==i) {
        sampleStr+=str[i] }
        Arstr.push(sampleStr);
        sampleStr=''
    }
}

for(let i=Arstr.length-1 ; i>=0 ;i--){
    if(i==0){
        NewStr += Arstr[i] 
    }else{
        NewStr += Arstr[i] + ' '
    }
}


console.log(NewStr)