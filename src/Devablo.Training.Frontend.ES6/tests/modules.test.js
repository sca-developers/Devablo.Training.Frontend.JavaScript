/*
  Modules
    Why?
      Organised Code
      Control Visibility

  Current Module Implementations
  IIFE
    Immeditiely Invoked Function Expression
      Scoped to function
      Expose Public via param passed in
      Private Methods & Implementation
  
  Other Implementations
    CommonJS modules
      Not ECMA Script Standard but used by JS community
      Exports & Require
      Load, Cache & Return Module
    AMD API
      Require.JS
        define
  
  ES6 Modules
    Single Module API developers can adhere to
    Will take time to get browser to load modules
    Will take time for community to adapt
    
    export class Obj
    import '{obj}' from 'js file'
*/

test('', () => {
  
  let result = Object.is(1,2);
  
  expect(result).toBe(false);
});