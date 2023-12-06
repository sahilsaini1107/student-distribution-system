const { processInput, BV, AV, BNV, ANV, NA, mySet } = require('./index');
// flushing all the containers before each test
beforeEach(() => {
  BV.length = 0;
  AV.length = 0;
  BNV.length = 0;
  ANV.length = 0;
  NA.length = 0;
  mySet.clear();
});

afterAll(()=>{
  processInput('fin');
})

test('Input should categorize students correctly', () => {
  processInput('init 12');
  processInput('reg 1 A V');
  processInput('reg 2 A NV');
  processInput('reg 3 B V');
  processInput('reg 4 B NV');
  processInput('reg 5 C V');

  expect(BV).toEqual([3]);
  expect(AV).toEqual([1]);
  expect(BNV).toEqual([4]);
  expect(ANV).toEqual([2]);
  expect(NA).toEqual([5]);
});

test('check overflow condition', () => {
  processInput('init 12');
  processInput('reg 1 A V');
  processInput('reg 2 A NV');
  processInput('reg 3 B V');
  processInput('reg 4 B NV');
  processInput('reg 5 A NV');
  processInput('reg 6 A NV');
  processInput('reg 7 B V');
  processInput('reg 8 B NV');
  processInput('reg 9 A NV');
  processInput('reg 10 A NV');
  processInput('reg 11 B V');
  processInput('reg 12 B NV');
  processInput('reg 13 A NV');

  expect(BV).toEqual([3,7,11]);
  expect(AV).toEqual([1]);
  expect(BNV).toEqual([4,8,12]);
  expect(ANV).toEqual([2,5,6]);
  expect(NA).toEqual([9,10,13]);
});

test('rollNumber need to be unique', () => {
  processInput('init 12');
  processInput('reg 1 A V');
  processInput('reg 2 A NV');
  processInput('reg 2 B V');
  processInput('reg 4 B NV');
  processInput('reg 4 A V');

  expect(BV).toEqual([]);
  expect(AV).toEqual([1]);
  expect(BNV).toEqual([4]);
  expect(ANV).toEqual([2]);
  expect(NA).toEqual([]);
});
