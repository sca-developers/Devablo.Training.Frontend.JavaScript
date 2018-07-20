// Default Function Params
test('can use iterators in es6', () => {
    let numbers = [1,2,3,4];
    let sum = 0;

    for(let i of numbers){
        sum += i;
    }

    expect(sum).toBe(10);
});

test('can use iterator symbol', () => {
    let numbers = [1,2,3,4];
    let sum = 0;
    let iterator = numbers[Symbol.iterator]();
    let next = iterator.next();
    
    while(!next.done){
        sum += next.value;
        next = iterator.next();
    }

    expect(sum).toBe(10);
})

test('can use es6 generators and yield', () => {

    let numbers = function*(start, end){
        for(let i = start; i <= end; i++){
            console.log(i);
            yield i;
        }
    }

    let sum = 0;
    for(let i of numbers(1,4)){
        sum += i;
    }

    expect(sum).toBe(10);
})

test('can filter using generator and predicate', () =>{
    let filter = function*(items, predicate){
        for(let item of items){
            if(predicate(item)){
                yield item;
            }
        }
    };
    // Way to do pagination
    let take = function*(items, number){
        let count = 0;
        if (number < 1) return;

        for(let item of items){
            yield item;
            count += 1;
            if(count >= number) {
                return;
            }
        }
    }

    let numbers = [1,2,3,4];
    let sum = 0;

    // Filter for Evens with modulas
    for(let i of filter(numbers, n => n % 2 == 0)){
        sum += i;
    }

    expect(sum).toBe(6);
})