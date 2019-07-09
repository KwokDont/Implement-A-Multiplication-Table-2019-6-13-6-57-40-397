function isValid(start,end){
    if(start <= end && start > 0 && end < 1000){
        return true;
    }
}

module.exports = isValid;