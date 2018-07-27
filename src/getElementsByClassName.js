// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currElement) {
	if (!currElement){
		currElement = document.body;
	}

	var arr = [];
	//console.log('Body classes =', body.classList.contains(className));	

	if(currElement.classList.contains(className)){
		arr.push(currElement);
	}

	for(var i = 0; i < currElement.children.length; i++){
		arr = arr.concat(getElementsByClassName(className,currElement.children[i]));
	}


	console.log('target =', currElement.children);	


	return arr;
};

