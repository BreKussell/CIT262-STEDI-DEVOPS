import {hello} from './helloworld.js';
test('Should print hello',()=>{

    const helloResponse = hello();
    expect(helloResponse).toBe('hello');
});
