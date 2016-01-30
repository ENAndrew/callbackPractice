/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
  
function first(arr, cb) {
    cb(arr[0]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
  
function last(arr, cb) {
    cb(arr[arr.length - 1]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
  
function multiply(x, y, cb) {
    cb(x * y);
}

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


  //Code Here for contains
  
//function contains(arr, str, cb) {  //works but does not meet spec
//    var check;
//    arr.forEach(function(e){
//        if(e === str) {
//            check = true;
//        }
//    });
//    cb(check);
//}

function contains(arr, str, cb) {
    arr.forEach(function(e){
        if(e === str) {
            cb(true);
        } else {
            cb(false);
        }
    });

}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

//sortArr = ['Blaine', 'Cahlan', 'Cahlan', 'Colt', 'Ryan', 'Tyler', 'Tyler']


    //Code Here for uniq
    
function uniq(arr, cb) {
    var uniqObj = {};
    var newArr = [];
    arr.forEach(function(e){  // now I have an object call uniqObj with each name as a key, keys cannot duplicate, so you only get one each
        uniqObj[e] = null;
    });
    for (var key in uniqObj) {
        newArr.push(key);
    }
    cb(newArr);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



function each(arr, cb) {  //cb will need to provide indice and item
    arr.forEach(function(item, i){
        cb(item, i);
    });
    
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





function getUserById(arr, str, cb) {  //will need to return an object
    var correctObj = {};
    arr.forEach(function(item){
        if(item.id === str) {
            correctObj = item;
        }
    });
    cb(correctObj);
};

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  }
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
