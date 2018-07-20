/* 
  Object.is
    Similar to ===
    Function not operator
    Handles with NaN returning True
    Handles Positive Zero/Negative Zero Comparisons returning True
  
    Object.assign
      Extending an object
      Copy Properties/Methods of 1 object and to another Object
      Sometimes referred to as 'mixins'

    Object Property & Method Shorthand Initalizers
      New Short Form Syntax to make more intuitive
      es5object() {
        getMethod: function() {}
        property: property
      }
      es6object() {
        getMethod() {}
        property
      }
    
    Object Computed Name Property Short Form
      function CreateObj { return ['Prop']:Value; }

    Proxy Objects
      Intercepts operations on Objects
        get / sets
        method invocations
      Creates new object / wrapper around original object

      Useful for checking validation and things on the object
*/
test('can use object.is with not matching values returns FALSE', () => {
  
  let result = Object.is(1,2);
  
  expect(result).toBe(false);
});
test('can use object.is with zero and negative zero values returns FALSE', () => {
  
  let result = Object.is(0,-0);
  
  expect(result).toBe(false);
});
test('can use === with zero and negative zero values returns TRUE', () => {
  
  let result = (0 === -0);
  
  expect(result).toBe(true);
});
test('can use object.is with NaN comparing NaN values returns TRUE', () => {
  
  let result = Object.is(NaN,NaN);
  
  expect(result).toBe(true);
});
test('can use === with NaN comparing NaN values returns FALSE', () => {
  
  let result = (NaN === NaN);
  
  expect(result).toBe(false);
});
test('can use object.assign to extend an object with methods and properties from another object.', () => {
  var shark = {
    bite: function(target){
      target.hurt = true;
    }
  };
  var person = {};

  var laser = {
    pewpew: function(target){
      target.exploded = true;
    }
  };

  Object.assign(shark, laser);
  shark.pewpew(person);

  let result = person.exploded;
  
  expect(result).toBe(true);
});

test('can use longform object property initialization to create an object', () => {
  let artist = 'Sia';
  let track = 'Greatest';
  let Album = {
      artist: artist,
      track: track
  }

  expect(Album.artist).toBe('Sia');
  expect(Album.track).toBe('Greatest');
});

test('can use ES6 short form object property initialization to create an object', () => {
  let artist = 'Sia';
  let track = 'Greatest';
  let Album = {
      artist,
      track
  }
  expect(Album.artist).toBe('Sia');
  expect(Album.track).toBe('Greatest');
});

test('can use ES5 long form object function initialization to create an object', () => {
  let server = {
      getPort: function(){
        return 8080;
      }
  }
  expect(server.getPort()).toBe(8080);
});
test('can use ES6 short form object function initialization to create an object', () => {
  let server = {
      getPort() {
        return 8080;
      }
  }
  expect(server.getPort()).toBe(8080);
});

/*
 Computed Property Names Tests
*/
test('can use ES5 computed property name.', () => {
  function createSimpleObject(propName, propValue){
      var obj = {};
      obj[propName] = propValue;
      return obj;
  }
  var simpleObject = createSimpleObject('color','red')
  expect(simpleObject.color).toBe('red');
});
test('can use ES6 computed property name.', () => {
  function createSimpleObject(propName, propValue){
      return {
        [propName]:propValue
      }
  }
  var simpleObject = createSimpleObject('color','red')
  expect(simpleObject.color).toBe('red');
});
test('can use ES6 computed property name advanced usage.', () => {
  function createTriumvirate(first, second, third){
      return {
        ['member_' + first.name]:first,
        ['member_' + second.name]:second,
        ['member_' + third.name]:third,
      };
  };
  function createPerson(name){
    return {
      ['name']:name
    }
  };

  var Aaron = createPerson('Aaron');
  var Gavin = createPerson('Gavin');
  var Chris = createPerson('Chris');

  let tri = createTriumvirate(Aaron, Gavin, Chris);
  expect(tri.member_Aaron).toBe(Aaron);
  expect(tri.member_Gavin).toBe(Gavin);
  expect(tri.member_Chris).toBe(Chris);
});

/*
  Proxy Tests
*/
test('can use basic proxy', () => {
  let unicorn = {
    legs: 4,
    color: 'brown',
    horn: true,
    hornAttack: function(target){
      return target.name + ' was horn attacked!';
    }
  };

  unicorn.hornAttack = new Proxy(unicorn.hornAttack, {
    apply: function(target, context, args) {
      if(context !== unicorn){
        return '';
      }else{
        return target.apply(context, args);
      }
    }
  });

  var proxy = new Proxy(unicorn, {
    get: function(target, property){
      if(property === 'color'){
        return 'white';
      } else {
        return target[property];
      }
    },
    set: function(target, property, value){
      if(property === 'horn' && value === false){
        console.log('cannot set the property');
      } else {
        target[property] = value;
      }
      return true;
    }
  });

  proxy.color = 'yellow';
  proxy.horn = false;
  proxy.legs = 1;

  expect(proxy.legs).toBe(1);
  expect(proxy.color).toBe('white');
  expect(proxy.horn).toBe(true);
});

test('can use basic proxy', () => {
  let unicorn = {
    legs: 4,
    color: 'brown',
    horn: true,
    hornAttack: function(target){
      return target.name + ' was horn attacked!';
    }
  };

  unicorn.hornAttack = new Proxy(unicorn.hornAttack, {
    apply: function(target, context, args) {
      if(context !== unicorn){
        return 'no body else can use the horn attack';
      }else{
        return target.apply(context, args);
      }
    }
  });

  var thief = { name: 'Aaron'}
  thief.attack = unicorn.hornAttack;

  expect(thief.attack()).toBe('no body else can use the horn attack');
  expect(unicorn.hornAttack(thief)).toBe('Aaron was horn attacked!');
});