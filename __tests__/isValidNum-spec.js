const isValid = require('../js-workspace/isValidNum');

it('should be true when invoke isValid given start smaller than end',()=>{
    //given
    const start = 5;
    const end = 10;
    //when
    
    //then
    expect(isValid(start,end)).toBe(true);
});