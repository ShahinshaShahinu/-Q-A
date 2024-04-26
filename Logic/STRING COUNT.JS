
function name(a, b) {
    let ar=[...a],br=[...b];


    let c = 0
    for (let i = 0; i < a.length; i++) {
        let f = true;
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                f = false
                break
            }

        }
        
    

        if (f==true) {
           
            c++
        }
       

    }
  
    for (let i = 0; i < ar.length; i++) {
        let d=true
        for (let k = 0; k < br.length; k++) {
           if(ar[i]==br[k]){
            ar[i]=null,br[k]=null
            d=false;
            break ;
           }
            
        }

        if(d){
            
            c++
        }
        
    }
  console.log(c);
}


name('hell', 'helh')