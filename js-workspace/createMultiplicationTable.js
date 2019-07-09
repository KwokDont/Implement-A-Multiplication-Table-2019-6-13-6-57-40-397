const isValidNum = require('./isValidNum');

function createMultiplicationTable(startNumber,endNumber) {
    var result = '';
    if (isValidNum(startNumber,endNumber)) {
        for (let i = startNumber; i < endNumber+1; i++) {
            for (let j = startNumber; j <= i; j++) {
                result += j+'*'+i+"="+i*j+"\t";
            }
            result+="\n";
        }
        return result;
    }
    return null;
}

module.exports = createMultiplicationTable;