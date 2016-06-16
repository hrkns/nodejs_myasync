"# nodejs_myasync" 

It's an small module for NodeJs that let us implement asynchronous operations, putting the functions in a array

Example

//"Callback hell" way:

func_1(parms, function(x, y){
  //code
  //code
  //...
  func_2(parms, function(z, w){
    //code
    //code
    //...
    func_n(parms, function(u, v){
      //code
      //code
      //...
      
    })
  })
});

//using the module
//assuming the index.js is in a folder called "async"
var async = require('async').async;
var seguimiento = new async([
  function(){
    func_1(parms, function(x, y){
      //code
      //code
      //go to the second function
      seguimiento.next(1);
    });
  },
  //here we receive v == 1
  function(v){
    func_2(parms, function(w, z){
      //code
      //code
      //go to the second function
      seguimiento.next(5);
    });
  },
  //here we receive w == 5
  function(w){
    func_n(parms, function(u, v){
      //code
      //code
      
      //end
    });
  }
]).start();
