let flattenArray = (nestedArray) =>{
    let output = [];
    for(val of nestedArray){
        if(val.length === undefined){
            output.push(val);
        }else{
            for(value of flattenArray(val)){
                output.push(value);
            }
        }
    }
    return output;
}

let input = [1,2,[3,4,[5,6],7,[8,9]]];
console.log(flattenArray(input));