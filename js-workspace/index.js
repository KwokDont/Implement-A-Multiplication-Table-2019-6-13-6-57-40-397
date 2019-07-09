const createMultiplicationTable = require('../js-workspace/createMultiplicationTable');
const isValidNum = require('./isValidNum');

function createMultipleTable(start,end){
    if(isValidNum(start,end)){
        return createMultiplicationTable(start,end);
    }else{
        return null;
    }
}

module.exports = createMultipleTable;

