// Note: don't use javascript's native array functions to do this.
var makeStack = function(){
	var tempArray = [];
	var counter = 0;
    var rcounter = 0;

  var stack = {
    //fixme
    
    add: function (item) {
        rcounter++;
		return tempArray[counter++] = item;
    },
    remove: function () {
		var deleted = tempArray[counter - 1];
		delete tempArray[counter - 1];
        rcounter--;
		return deleted;
    },
    size: function () {
		return rcounter;
    }
   };
	return stack;
};
