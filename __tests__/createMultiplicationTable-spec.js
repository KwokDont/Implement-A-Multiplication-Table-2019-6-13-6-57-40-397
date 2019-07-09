const createMultiplicationTable = require('../js-workspace/createMultiplicationTable');

it('should return a multiplication table given two number',()=>{
    //given
    const startNumber = 1;
    const endNumber = 3;
    //when
    const result = createMultiplicationTable(startNumber,endNumber);
    //then
    expect(result).toBe("1*1=1\t\n1*2=2\t2*2=4\t\n1*3=3\t2*3=6\t3*3=9\t\n");
});