const createMultipleTable = require('../js-workspace/index');

it('should return a multiplication table given two number',()=>{
    //given
    const startNumber = 3;
    const endNumber = 1;
    //when
    const result = createMultipleTable(startNumber,endNumber);
    //then
    expect(result).toBe("1*1=1\t\n1*2=2\t2*2=4\t\n1*3=3\t2*3=6\t3*3=9\t\n");
});