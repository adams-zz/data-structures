// Note: don't use javascript's native array functions to do this.
var makeQueue = function(){
  var tempObj = {};
  var counter = 0;
  var rcounter = 0;

  var queue = {
    //fixme
    add: function (item) {
      rcounter++;
      return tempObj[counter++] = item;
    },

    remove: function (){
      removed = tempObj[counter-rcounter];
      delete tempObj[counter-rcounter];
      rcounter--;
      return removed;
    },

    size: function() {
      return rcounter;
    }

  };

  return queue;
}