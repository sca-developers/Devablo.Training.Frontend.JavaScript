/* 
  Promises & Async JS Programming

  Callbacks
    - Manage own errors
    - Nested Callbacks
    - Passing Callbacks
    - Own Call Stack
    Caller Async Process with Callback
    Callback put on Call Stack
    Only Caller gets notified

  Promise
    The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
    A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
    A Promise is in one of these states:
    - pending: initial state, neither fulfilled nor rejected.
    - fulfilled: meaning that the operation completed successfully.
    - rejected: meaning that the operation failed.

    Built into ES6
*/

test('test Jest done', (done) => {
  setTimeout(function(){
    done();
  }, 1000);
});

test('can use basic promise', () => {
  
  let promiseOperation = new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("Success!"); // Yay! Everything went well!
    }, 250);
  });

  promiseOperation.then((data) => {
    expect(data).toBe('Yay! Success!');
    done();
  })
  .catch((error) => {
    // do something
  });
});

test('can use promise reject and catch', (done) => {
  
  let promiseOperation = new Promise((resolve, reject) => {
    reject(Error('Sorry'));
  });

  promiseOperation.catch((error) => {
    expect(error.message).toBe('Sorry');
    done();
  });
  
});

test('can use multiple promises', (done) => {
  
  let promiseOne = Promise.resolve(3);
  let promiseTwo = Promise.resolve(promiseOne);

  promiseTwo.then((data) => {
    expect(data).toBe(3);
    done();
  })
  
});

test('can use promise and test call stack priority with asynchronous', (done) => {

  let async = false;
  let promise = Promise.resolve((resolve, reject) => {
      resolve();
  });

  promise.then((data) => {
    expect(async).toBe(true);
    done();
  });

  // Async Code Above Executes after on call stack
  // Therefore this will work
  async = true;
});


test('can use use multiple promises and chain sequentially', (done) => {
  
    function getOrder(id) {
      let order = {
        OrderId: id,
        UserId: 1,
        OrderName: `Order with ID ${id}`
      };
      return Promise.resolve(order);
    };
    function getUser(id) {
      let user = {
        UserId: id,
        UserName: `User with ID ${id}`
      };
      return Promise.resolve(user);
    };

    getOrder(1).then((order) => {
      return getUser(order.UserId).then((user) => {
        expect(user.UserId).toBe(1);
        done();
      })
    }).catch((error) =>{
      // Handle
    });

  });

test('can use multiple promises and execute promises with all', (done) =>{
    let ids = [1,2,3];
    let promises = [];

    for(let i = 0; i < ids.length; i ++) {
      promises.push(ids[i]);
    }

    Promise.all(promises).then((data) => {
      expect(data.length).toBe(3);
      done();
    });
});

test('can use promises and resolve after the first promise', (done) =>{
    let ids = [1,2,3];
    let promises = [];

    for(let i = 0; i < ids.length; i ++) {
      promises.push(ids[i]);
    }

    Promise.race(promises).then((data) => {
      expect(data).toBe(1);
      done();
    });
});