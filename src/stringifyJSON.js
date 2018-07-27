// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here
 // console.log('my obj = ', obj);

  quotes = '';
  
  if(typeof obj === "number"){
	  return '' + obj;	
  } 
  if( obj === null){
	return "null";
  }
  if( typeof obj === "boolean"){
	return '' + obj;
  } 

  if( typeof obj === "string"){
	return '"'+obj+'"';
  } 

  if(Array.isArray(obj) && obj.length < 1) {
   	return '[]';
  } 


  if (Array.isArray(obj) && obj.length > 0){   

    var arr = [];

    obj.forEach(function(element){     
        arr.push(stringifyJSON(element));
    }); 

    return '[' + arr.join(',') + ']';
  }

  if (typeof obj === 'object'){
    for (var key in obj){
      
      if(obj[key] !== undefined && typeof obj[key] !== 'function'){
        quotes+= stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
   
    return '{' + quotes.slice(0,quotes.length-1) + '}';
  }



 //return str;
 

 };

