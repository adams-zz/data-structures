describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  it("should have a method named 'add'", function() {
    expect(stack.add).toEqual(jasmine.any(Function));
  });

  it("should accept an item", function() {
		expect(stack.add("item")).toEqual("item");
  });

  it("should add multiple items", function() {
		stack.add("item1");
		stack.add("item2");
		expect(stack.size()).toEqual(2);
  });

  it("should have a method named 'remove'", function () {
		expect(stack.remove).toEqual(jasmine.any(Function));
	});

	it("should remove an item", function () {
		stack.add("item");
		expect(stack.remove("item")).toEqual("item");
	});

	it("should remove multiple items", function(){
		stack.add("item1");
		stack.add("item2");
		stack.remove();
		expect(stack.size()).toEqual(1);
	});

	it("should tell the size of the stack", function () {
		stack.add("item1");
		stack.add("item2");
		expect(stack.size()).toEqual(2);
	});

  // add more tests here to test the functionality of stack
});