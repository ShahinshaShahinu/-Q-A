    
    function binaryItera(array, target) {
        let startIdx = 0;
        let endIdx = array.length - 1;
    
        while (startIdx <= endIdx) {
            let middle = Math.floor(startIdx + (endIdx - startIdx) / 2);
    
            if (array[middle] === target) {
                return middle;
            }
            else if (array[middle] > target) {
                endIdx = middle - 1;
            }
            else if (array[middle] < target) {
                startIdx = middle + 1;
            }
        }
    
        return -1;
    }
    
    let array = [1, 2, 3, 4, 5, 6, 7];
    console.log(binaryItera(array, 7));
    
    


    
    function BinaryRecur(Array, target, startIdx = 0, endIdx = Array.length - 1) {
        if (startIdx > endIdx) {
            return -1;
        }
    
        let middile = startIdx + Math.floor((endIdx - startIdx) / 2);
    
        if (Array[middile] === target) {
            return middile;
        }  
        else if (Array[middile] > target) {
            return BinaryRecur(Array, target, startIdx, middile - 1);
        }
        else {
            return BinaryRecur(Array, target, middile + 1, endIdx);
        }
    }
    
    let Array = [1, 2, 3, 4, 5, 6, 7];
    console.log(BinaryRecur(Array, 3));
    
    
    
    
