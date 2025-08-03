// Event Delegation
// Event delegation is a technique in JavaScript where a single event listener is added to a parent element
// to manage events for multiple child elements. This is particularly useful for dynamically added elements.

// What is Event Propagation?
// Event propagation is the process by which an event travels through the DOM. It consists of two phases:
// 1. Capturing Phase: The event starts from the document and travels down to the target element.
// 2. Bubbling Phase: The event starts from the target element and bubbles up to the document.

// What is Event Bubbling?
// Event bubbling is a type of event propagation where the event starts from the target element and bubbles
// up to its parent elements. This means that if an event occurs on a child element, it will first trigger the event listener on that child, and then on each of its parent elements up to the root of the document.

const div =document.querySelector('div');
const form = document.querySelector('form');
const button = document.querySelector('button');


// div.addEventListener('click', (e) => {
//     alert('Div clicked!');
// });
// form.addEventListener('click', (e) => {
//     alert('Form clicked!');
// });
// button.addEventListener('click', (e) => {
//     alert('Button clicked!');
// });


// event that are not bubbled
// Some events do not bubble, meaning they do not propagate up the DOM tree. Examples include
// - focus
// - blur
// - mouseenter
// - mouseleave

// event.target vs event.currentTarget vs this.target
// - event.target: Refers to the element that triggered the event.
// - event.currentTarget: Refers to the element to which the event listener is attached.
// - this.target: In the context of an event listener, `this` refers to the element to which the event listener is attached, similar to `event.currentTarget`.

function func(event) {
    alert('Event Current Target: ' + event.currentTarget.tagName + '\n' +
          'Event Target: ' + event.target.tagName + '\n' +
          'This Target: ' + this.tagName);
}

// What is Event Capturing?
// Event capturing is the opposite of event bubbling. In this phase, the event starts from the document and travels down to the target element. 
// It is less commonly used than bubbling, but it can be useful in certain scenarios where you want to intercept an event before it reaches the target element

div.addEventListener('click', (e) => {
    alert('Div clicked!');
}, {
    capture: true // This enables event capturing
});
form.addEventListener('click', (e) => {
    alert('Form clicked!');
}, {
    capture: true // This enables event capturing
});
button.addEventListener('click', (e) => {
    alert('Button clicked!');
}), {
    capture: true // This enables event capturing
};

// How to stop event bubbling or capturing?
// You can stop event bubbling or capturing by calling `event.stopPropagation()` within the event handler
button.addEventListener('click', (e) => {
    alert('Button clicked!');
    e.stopPropagation(); // This stops the event from bubbling up to parent elements
});

// What is Event Delegation?
// Event delegation is a technique where a single event listener is added to a parent element to manage
// events for multiple child elements. This is particularly useful for dynamically added elements or when you have
// a large number of child elements, as it reduces the number of event listeners in the DOM

document.querySelector('.products').addEventListener('click', (event) => {
    console.log(event.target);
    if(event.target.tagName === "SPAN") {
        window.location.href += "/" + event.target.className;
    }
})