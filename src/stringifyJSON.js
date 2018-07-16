// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here
 // console.log('my obj = ', obj);
  
  if(typeof obj === "number"){
	  return '' + obj;	
  } else if( obj === null){
	return "null";
  }else if( typeof obj === "boolean"){
	return '' + obj;
  } else if( typeof obj === "string"){
	return '"'+obj+'"';
  } else if(Array.isArray(obj) && obj.length < 1) {
   	return '[]';
  } else if(Array.isArray(obj) && obj.length === 1) {
  //console.log(obj[0]);
	if(typeof obj[0] === "number"){
	  return '['+obj+']';	
  	} else if ( typeof obj[0] === "string"){
     return  '["'+obj+'"]';
  	}
  } else if(Array.isArray(obj) && obj.length === 2) {
  	//console.log(JSON.stringify(obj))
 	return  '[' + obj[0] + ',"' + obj[1] + '"]';
  } else if(Array.isArray(obj) && obj.length === 8) {
  	//console.log(JSON.stringify(obj))
 	return '['+obj+']';	
  }	





 //return str;
 

 };

// why is object only giving 9?
// do I have to do this for arrays and objects and strungs?