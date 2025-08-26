1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   ans: Differences are explained below-
   a- when we need to get a single element from html file we can use getElementById to get the element by its id.
   b- If we need to get more than 1 element with same class name, then we can use getElementByClassName.
   c- If we need just the first element from some elements with same classes or tag name , we can use querySelector. It will give us the first element only ,no matter how many elements are matches with the class or attributes.  
   d- If we neem all elements with same attribute, we can easily use querySelectorAll . It will return us a Nodelist of elements.

2. How do you create and insert a new element into the DOM?
   ans: Into the DOM we can create and insert a new element by using 2 methods. We neemd to use document.createElement() to create an element. Then we have to insert it into a parent element. For inserting into a parent element we need to use appenchild() methods.

3. What is Event Bubbling and how does it work?
   ans: We already that DOM works as a tree model. Event Bubbling is when user triggered an event or element, it propagates upwards through its ancestor in the DOM tree.

4. What is Event Delegation in JavaScript? Why is it useful?
   ans: Event Delegation is a powerfull method , which improves the code to reuse and helps to improve websites performance. When we are dealing with large number of elements we should use Event delegation method.
   Event Delegation is a useful pattern that allows you to write cleaner code, and create fewer event listeners with similar logic.

5. What is the difference between preventDefault() and stopPropagation() methods?
   ans: preventDefault() is a method which stops the default behavior of an event. Such as it can prevent a form submission or the default behavior of a checkbox, it can prevent reload the page after an event of submit button and many more.
   stopPropagation() is a method which helps to propagation of an event through the Document Object Model (DOM) tree.
