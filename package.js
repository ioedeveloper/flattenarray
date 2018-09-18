const flattenArray = module.exports = (nestedArray) =>{
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
};