describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  it("should have a method named 'add'", function() {
    expect(queue.add).toEqual(jasmine.any(Function));
  });

  it("should add item to beginning of queue", function() {
    expect(queue.add("item")).toEqual("item");
  });

  it("should have a method named 'remove'", function(){
    expect(queue.remove).toEqual(jasmine.any(Function));
  });

  it("should remove first item", function (){
    queue.add("item1");
    queue.add("item2");
    expect(queue.remove()).toEqual("item1");
  });

  it("should remove multiple items", function (){
    queue.add("item1");
    queue.add("item2");
    queue.add("item3");
    queue.remove();
    queue.remove();
    expect(queue.size()).toEqual(1);
  });

  it("should show the current size", function () {
    queue.add("item1");
    queue.add("item2");
    expect(queue.size()).toEqual(2);
  });

  it("size should update dynamicly", function (){
    queue.add("item1");
    queue.add("item2");
    queue.add("item3");
    queue.remove();
    expect(queue.size()).toEqual(2);
  });

  // add more tests here to test the functionality of queue
});