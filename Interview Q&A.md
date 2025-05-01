Great! Here's a **JavaScript Interview Q&A guide** from **basic to advanced**, with **clear definitions** and **easy examples** to help you prepare well:

---

## 🟢 **Basic Level**

### 1. **What is JavaScript?**
**Definition:**  
JavaScript is a **high-level**, **interpreted**, and **dynamic programming language** used mainly for making web pages interactive.

**Example:**
```html
<button onclick="alert('Hello, Nikhil!')">Click me</button>
```

---

### 2. **What are the different data types in JavaScript?**
**Definition:**  
JavaScript has 8 basic data types:
- Primitive: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`
- Non-primitive: `object`, `array`, `function`

**Example:**
```javascript
let name = "Nikhil";       // string
let age = 25;              // number
let isStudent = true;      // boolean
let x = null;              // null
let y;                     // undefined
let arr = [1, 2, 3];       // array (object)
let obj = { key: "value" };// object
```

---

### 3. **Difference between `==` and `===`?**
**Definition:**
- `==` checks **value only** (type coercion).
- `===` checks **value and type** (strict equality).

**Example:**
```javascript
'5' == 5   // true
'5' === 5  // false
```

---

### 4. **What is `var`, `let`, and `const`?**
**Definition:**
- `var`: function-scoped, can be redeclared.
- `let`: block-scoped, can't be redeclared.
- `const`: block-scoped, can’t be reassigned.

**Example:**
```javascript
var a = 10;
let b = 20;
const c = 30;
```

---

## 🟡 **Intermediate Level**

### 5. **What are closures in JavaScript?**
**Definition:**  
A closure is a function that **remembers** its outer scope, even after the outer function has finished executing.

**Example:**
```javascript
function outer() {
  let name = "Nikhil";
  return function inner() {
    console.log(name);
  };
}
const greet = outer(); 
greet(); // Output: "Nikhil"
```

---

### 6. **What is hoisting in JavaScript?**
**Definition:**  
Hoisting means **variable and function declarations** are moved to the top of their scope before execution.

**Example:**
```javascript
console.log(a); // undefined
var a = 5;
```

---

### 7. **What is the difference between `null` and `undefined`?**
**Definition:**
- `null`: assigned value representing "no value"
- `undefined`: variable declared but not assigned

**Example:**
```javascript
let a;         // undefined
let b = null;  // null
```

---

### 8. **What are higher-order functions?**
**Definition:**  
A function that takes another function as an argument or returns a function is called a higher-order function.

**Example:**
```javascript
function greet(name) {
  return `Hello, ${name}`;
}

function processUser(name, callback) {
  return callback(name);
}

console.log(processUser("Nikhil", greet)); // Hello, Nikhil
```

---

## 🔴 **Advanced Level**

### 9. **What is the event loop in JavaScript?**
**Definition:**  
The event loop allows JavaScript to handle **asynchronous tasks** using a **single thread** by moving callbacks from the task queue to the call stack.

**Example:**
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");
// Output: Start -> End -> Async Task
```

---

### 10. **What is a promise?**
**Definition:**  
A **promise** is an object representing the **eventual completion or failure** of an asynchronous operation.

**Example:**
```javascript
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Done!");
  else reject("Failed!");
});

promise.then(res => console.log(res)).catch(err => console.log(err));
```

---

### 11. **What is `this` in JavaScript?**
**Definition:**  
`this` refers to the **object that is executing the current function**.

**Example:**
```javascript
const obj = {
  name: "Nikhil",
  greet() {
    console.log(this.name);
  }
};
obj.greet(); // "Nikhil"
```

---

### 12. **What are arrow functions?**
**Definition:**  
Arrow functions provide a **shorter syntax** and **don’t have their own `this`**.

**Example:**
```javascript
const add = (a, b) => a + b;
```

---

### 13. **What is the difference between synchronous and asynchronous code?**
**Definition:**
- **Synchronous**: executes line by line (blocking)
- **Asynchronous**: executes in the background (non-blocking)

**Example:**
```javascript
// Sync
console.log("1");
console.log("2");

// Async
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
```

---

Absolutely, Nikhil! Here's **Part 2** with **more JavaScript interview questions and answers**—still easy to understand and with examples from **intermediate to advanced level**:

---

## 🟡 **Intermediate to Advanced Questions**

---

### 14. **What is the difference between `call()`, `apply()`, and `bind()`?**

**Definition:**
These methods control the value of `this` when calling a function.

| Method | Description |
|--------|-------------|
| `call()`  | Calls a function with a given `this` and arguments (comma-separated) |
| `apply()`| Same as `call()`, but takes arguments as an array |
| `bind()` | Returns a new function with bound `this`, doesn’t call it immediately |

**Example:**
```javascript
function greet(city) {
  console.log(`${this.name} from ${city}`);
}

const user = { name: "Nikhil" };

greet.call(user, "Jaipur");  // call
greet.apply(user, ["Delhi"]); // apply
const boundGreet = greet.bind(user);
boundGreet("Mumbai");         // bind
```

---

### 15. **What is a callback function?**

**Definition:**
A callback is a **function passed as an argument** to another function, to be executed **later**.

**Example:**
```javascript
function sayHello(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

sayHello("Nikhil", () => {
  console.log("Callback called");
});
```

---

### 16. **What is destructuring in JavaScript?**

**Definition:**
Destructuring is a feature to **unpack values** from arrays or objects into separate variables.

**Example:**
```javascript
const user = { name: "Nikhil", age: 25 };
const { name, age } = user; // object destructuring

const arr = [10, 20];
const [a, b] = arr; // array destructuring
```

---

### 17. **What is the difference between shallow copy and deep copy?**

**Definition:**
- **Shallow copy** copies only the **first level**.
- **Deep copy** copies **nested objects** too.

**Example:**
```javascript
const original = { name: "Nikhil", details: { age: 25 } };

const shallow = { ...original };
shallow.details.age = 30;
console.log(original.details.age); // 30 (linked)

const deep = JSON.parse(JSON.stringify(original));
deep.details.age = 40;
console.log(original.details.age); // 30 (unchanged)
```

---

### 18. **What is the difference between `map()` and `forEach()`?**

**Definition:**
- `forEach()` just loops through an array.
- `map()` returns a **new array**.

**Example:**
```javascript
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);     // [2, 4, 6]
nums.forEach(n => console.log(n * 2));    // prints: 2 4 6
```

---

### 19. **What is the spread operator (`...`) in JavaScript?**

**Definition:**
The spread operator expands elements of an array/object.

**Example:**
```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }
```

---

### 20. **What are template literals?**

**Definition:**
Template literals use backticks (`` ` ``) and allow **embedded expressions**.

**Example:**
```javascript
const name = "Nikhil";
const greeting = `Hello, ${name}!`; // Hello, Nikhil!
```

---

### 21. **What is a prototype in JavaScript?**

**Definition:**
Every JavaScript object has a `prototype` that it inherits methods and properties from. It’s part of the **prototype chain** used for inheritance.

**Example:**
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const user = new Person("Nikhil");
user.sayHi(); // Hi, I'm Nikhil
```

---

### 22. **What is recursion in JavaScript?**

**Definition:**
Recursion is a function calling itself until it reaches a base condition.

**Example:**
```javascript
function countDown(n) {
  if (n === 0) return;
  console.log(n);
  countDown(n - 1);
}

countDown(3); // 3, 2, 1
```

---

Great, Nikhil! Here's **Part 3** with even more **advanced JavaScript interview questions and answers**, still with clear explanations and code examples.

---

## 🔴 **Advanced JavaScript Interview Questions**

---

### 23. **What is `async` and `await` in JavaScript?**

**Definition:**  
`async` and `await` make **asynchronous code** look like **synchronous** code.  
- `async` makes a function return a promise.  
- `await` pauses the execution until the promise is resolved.

**Example:**
```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}
fetchData();
```

---

### 24. **What is event delegation?**

**Definition:**  
Event delegation is a technique where a **parent element handles events** for its **child elements** using **event bubbling**.

**Example:**
```javascript
document.getElementById("parent").addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.textContent);
  }
});
```

---

### 25. **What is a JavaScript module?**

**Definition:**  
A module allows you to **encapsulate code** and **export/import** it between files using `export` and `import`.

**Example:**  
`math.js`
```javascript
export function add(a, b) {
  return a + b;
}
```

`main.js`
```javascript
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

---

### 26. **What is a debounce function?**

**Definition:**  
Debounce limits how often a function is called by waiting for a certain time to pass without any new event.

**Example:**
```javascript
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

window.addEventListener("resize", debounce(() => {
  console.log("Resize event debounced!");
}, 300));
```

---

### 27. **What is throttling in JavaScript?**

**Definition:**  
Throttling limits a function to be called at most once in a specified time interval.

**Example:**
```javascript
function throttle(func, limit) {
  let lastCall = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastCall >= limit) {
      lastCall = now;
      func();
    }
  };
}

window.addEventListener("scroll", throttle(() => {
  console.log("Scroll event throttled!");
}, 1000));
```

---

### 28. **What is memory leak in JavaScript?**

**Definition:**  
A memory leak occurs when **unused memory** is not released, often due to global variables, unremoved event listeners, or closures.

**Example Cause:**
```javascript
let leaks = [];
function leakyFunction() {
  leaks.push(new Array(1000000).join("leak"));
}
setInterval(leakyFunction, 1000); // Dangerous
```

---

### 29. **What is the difference between `setTimeout` and `setInterval`?**

| Function       | Description                          |
|----------------|--------------------------------------|
| `setTimeout`   | Runs a function **once** after delay |
| `setInterval`  | Runs a function **repeatedly**       |

**Example:**
```javascript
setTimeout(() => console.log("After 2s"), 2000);
setInterval(() => console.log("Every 2s"), 2000);
```

---

### 30. **Explain the JavaScript event loop with microtasks and macrotasks**

**Definition:**  
- **Macrotasks:** setTimeout, setInterval, setImmediate  
- **Microtasks:** Promises, MutationObserver  
Microtasks are executed **before** macrotasks.

**Example:**
```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output: Start → End → Promise → Timeout
```

---

### 31. **What is the Temporal Dead Zone (TDZ)?**

**Definition:**  
The TDZ is the time between entering a block and initializing `let`/`const` variables where they **cannot be accessed**.

**Example:**
```javascript
console.log(a); // ReferenceError
let a = 10;
```

---

### 32. **What is optional chaining (`?.`) in JavaScript?**

**Definition:**  
It allows you to safely access **deeply nested properties** without throwing an error.

**Example:**
```javascript
const user = { profile: { name: "Nikhil" } };
console.log(user?.profile?.name); // "Nikhil"
console.log(user?.address?.city); // undefined
```

---

### 33. **What is Nullish Coalescing (`??`) operator?**

**Definition:**  
Returns the right-hand side value if the left-hand side is `null` or `undefined`.

**Example:**
```javascript
let name = null;
console.log(name ?? "Default Name"); // "Default Name"
```

---

Awesome, Nikhil! You're really pushing your JavaScript knowledge 💪  
Here’s **Part 4** – more **advanced JavaScript interview questions and answers**, still explained clearly with examples.

---

## 🔵 **Expert-Level JavaScript Interview Q&A**

---

### 34. **What is the difference between `==` and `===` in JavaScript?**

**Definition:**
- `==` checks **equality** after type conversion (loose equality).
- `===` checks **both value and type** (strict equality).

**Example:**
```javascript
console.log(5 == "5");  // true  (type coerced)
console.log(5 === "5"); // false (type matters)
```

---

### 35. **What is hoisting in JavaScript?**

**Definition:**  
Hoisting is JavaScript's default behavior of **moving declarations to the top** of the scope before execution.

**Example:**
```javascript
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;
```

---

### 36. **What is a closure?**

**Definition:**  
A closure is a function that remembers variables from its **outer lexical scope** even after the outer function has finished executing.

**Example:**
```javascript
function outer() {
  let name = "Nikhil";
  return function inner() {
    console.log(name); // still remembers 'name'
  };
}

const greet = outer();
greet(); // Nikhil
```

---

### 37. **What are the types of scopes in JavaScript?**

**Definition:**  
- **Global Scope**: Declared outside any function.  
- **Function Scope**: Accessible only within a function.  
- **Block Scope**: Defined using `let` and `const` inside `{}`.

**Example:**
```javascript
let x = "global"; // global

function testScope() {
  let y = "function"; // function
  if (true) {
    const z = "block"; // block
  }
}
```

---

### 38. **What is the difference between `var`, `let`, and `const`?**

| Feature         | `var`       | `let`         | `const`       |
|----------------|-------------|---------------|---------------|
| Scope          | Function     | Block         | Block         |
| Re-declarable  | Yes          | No            | No            |
| Re-assignable  | Yes          | Yes           | No            |
| Hoisted        | Yes (as `undefined`) | Yes (TDZ) | Yes (TDZ) |

**Example:**
```javascript
var a = 1;
let b = 2;
const c = 3;
```

---

### 39. **What is IIFE (Immediately Invoked Function Expression)?**

**Definition:**  
An IIFE is a function that runs **immediately after being defined**. Often used to create a private scope.

**Example:**
```javascript
(function () {
  console.log("IIFE executed!");
})();
```

---

### 40. **What is the difference between synchronous and asynchronous code?**

| Type         | Description                                      |
|--------------|--------------------------------------------------|
| Synchronous  | Code runs line by line. Blocks next execution.   |
| Asynchronous | Code runs without blocking the main thread.      |

**Example:**
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Code");
}, 1000);

console.log("End");
// Output: Start → End → Async Code
```

---

### 41. **What is `this` keyword in JavaScript?**

**Definition:**  
`this` refers to the **context** in which a function is called.

**Example:**
```javascript
const person = {
  name: "Nikhil",
  greet() {
    console.log("Hello " + this.name);
  }
};

person.greet(); // Hello Nikhil
```

---

### 42. **What are arrow functions and how are they different?**

**Definition:**  
Arrow functions are a shorter syntax for writing functions.  
They **do not bind their own `this`**.

**Example:**
```javascript
const add = (a, b) => a + b;

const obj = {
  name: "Nikhil",
  greet: () => {
    console.log(this.name); // undefined, not bound
  }
};
```

---

### 43. **What are promises and how do they work?**

**Definition:**  
A Promise is an object representing the **eventual completion (or failure)** of an asynchronous operation.

**Example:**
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});

promise.then(result => console.log(result)); // "Done"
```

---

### 44. **What is the difference between mutable and immutable data types?**

- **Mutable:** Can be changed (e.g., arrays, objects)
- **Immutable:** Cannot be changed (e.g., strings, numbers)

**Example:**
```javascript
let str = "Hello";
str[0] = "Y"; // does not change string (immutable)

let arr = [1, 2];
arr[0] = 10; // changes array (mutable)
```

---

### 45. **What is the difference between function declaration and function expression?**

| Type                | Hoisted | Syntax example |
|---------------------|---------|----------------|
| Declaration         | Yes     | `function sum(){}` |
| Expression (Named or Anonymous) | No | `const sum = function() {}` |

---

Great choice, Nikhil! Here's **Part 5** of your JavaScript interview prep: advanced topics including **DOM, Web APIs, Error Handling, ES6+ Features**, and **Design Patterns**—all with simple definitions and examples.

---

## 🟢 **JavaScript Interview Q&A – Part 5: DOM, Web APIs, ES6+, and Patterns**

---

### 46. **What is the DOM (Document Object Model)?**

**Definition:**  
DOM is a tree-like structure representing HTML elements in memory. JavaScript uses it to dynamically **read, modify, add, or delete** HTML content.

**Example:**
```javascript
document.getElementById("title").innerText = "Hello DOM!";
```

---

### 47. **What are some common DOM manipulation methods?**

| Method                      | Description                          |
|----------------------------|--------------------------------------|
| `getElementById()`         | Selects an element by ID             |
| `querySelector()`          | Selects the first matching element   |
| `createElement()`          | Creates a new element                |
| `appendChild()`            | Adds a child to an element           |
| `innerHTML / innerText`    | Sets or gets content of an element   |

**Example:**
```javascript
const div = document.createElement("div");
div.innerText = "New Element";
document.body.appendChild(div);
```

---

### 48. **What are Web APIs in JavaScript?**

**Definition:**  
Web APIs are **built-in browser features** (not part of core JavaScript) used for tasks like DOM manipulation, AJAX, storage, etc.

**Examples of Web APIs:**
- **DOM API** – Modify HTML
- **Fetch API** – Make HTTP requests
- **LocalStorage** – Store data locally
- **Geolocation API** – Get user's location
- **WebRTC / WebSockets** – Real-time communication

---

### 49. **What is event bubbling and capturing?**

**Definition:**
- **Bubbling**: Event flows from the target **upward** to parent.
- **Capturing**: Event flows from the top (root) **down to the target**.

**Example:**
```javascript
element.addEventListener("click", handler, true); // capturing
element.addEventListener("click", handler, false); // bubbling (default)
```

---

### 50. **What is the Fetch API?**

**Definition:**  
A modern Web API for making **asynchronous HTTP requests**. Returns a **promise**.

**Example:**
```javascript
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

### 51. **What is error handling in JavaScript?**

**Definition:**  
You use `try`, `catch`, `finally`, and `throw` to handle errors safely.

**Example:**
```javascript
try {
  throw new Error("Something went wrong!");
} catch (e) {
  console.error(e.message);
} finally {
  console.log("Cleanup done");
}
```

---

### 52. **What are ES6+ features you should know?**

| Feature       | Description                              | Example                      |
|--------------|------------------------------------------|------------------------------|
| `let` / `const` | Block scoped variables                 | `let x = 10;`                |
| Arrow Function | Short function syntax                   | `(a, b) => a + b`            |
| Template Literal | `${}` inside backticks                | ``Hello, ${name}``           |
| Destructuring | Extract from arrays/objects              | `const {name} = obj`         |
| Spread/Rest    | `...` syntax for expand/collect         | `[...arr]`, `(...args)`      |
| Promises       | Handle async operations                 | `new Promise(...)`           |
| Classes        | OOP style class syntax                  | `class Person {}`            |

---

### 53. **What is destructuring in JavaScript?**

**Definition:**  
Destructuring allows unpacking values from arrays or properties from objects into variables.

**Example:**
```javascript
const user = { name: "Nikhil", age: 23 };
const { name, age } = user;
```

---

### 54. **What is the spread operator?**

**Definition:**  
`...` expands elements from an array or object.

**Example:**
```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3]; // [1, 2, 3]
```

---

### 55. **What are JavaScript design patterns?**

**Definition:**  
Reusable solutions to common programming problems. Common patterns:

- **Module Pattern**: Encapsulation
- **Factory Pattern**: Object creation logic
- **Observer Pattern**: Publish/Subscribe
- **Singleton Pattern**: Only one instance

**Example: Module Pattern:**
```javascript
const Counter = (() => {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
})();
```

---

### 56. **What is the `async` / `await` syntax?**

**Definition:**  
Syntactic sugar over promises for cleaner async code. `await` pauses execution until promise resolves.

**Example:**
```javascript
async function fetchData() {
  try {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
```

---
Awesome, Nikhil! Let’s jump straight into **Part 6: Object-Oriented Programming (OOP) in JavaScript**, continuing the question numbers from the previous part (starting from **#57**). Each topic below is well-defined with examples that are **easy to understand**. 💡

---

## 🟢 **JavaScript Interview Q&A – Part 6: Object-Oriented Programming (OOP)**

---

### **57. What is OOP in JavaScript?**

**Definition:**  
Object-Oriented Programming (OOP) is a programming style based on the concept of **objects** — reusable pieces of code that bundle **data (properties)** and **behavior (methods)** together.

JavaScript supports OOP through:
- **Objects**
- **Constructor functions**
- **Prototypes**
- **Classes (ES6)**

---

### **58. What are objects in JavaScript?**

**Definition:**  
An object is a collection of **key-value pairs** (properties and methods).

**Example:**
```javascript
const person = {
  name: "Nikhil",
  age: 23,
  greet: function() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

person.greet(); // Hello, I'm Nikhil
```

---

### **59. What is a constructor function?**

**Definition:**  
A constructor function is used to create multiple object instances with the same structure.

**Example:**
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const user1 = new Person("Nikhil", 23);
user1.greet(); // Hi, I'm Nikhil
```

---

### **60. What are prototypes and the prototype chain?**

**Definition:**  
Each JS object has an internal link to another object called its **prototype**. This forms a **prototype chain**, which is used for inheritance.

**Example:**
```javascript
Person.prototype.sayAge = function() {
  console.log(`I'm ${this.age} years old`);
};

user1.sayAge(); // I'm 23 years old
```

---

### **61. What is an ES6 class in JavaScript?**

**Definition:**  
A `class` is a blueprint for creating objects using **syntactic sugar** over prototypes.

**Example:**
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const user = new Person("Nikhil");
user.greet(); // Hi, I'm Nikhil
```

---

### **62. What is inheritance in JavaScript?**

**Definition:**  
Inheritance allows a class or object to **access properties and methods** of another.

**Using classes:**
```javascript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const dog = new Dog();
dog.speak(); // Animal speaks
dog.bark();  // Dog barks
```

---

### **63. What is encapsulation?**

**Definition:**  
Encapsulation means **hiding internal details** and only exposing what’s necessary.

**Example with private field (ES2022+):**
```javascript
class User {
  #password;

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  checkPassword(input) {
    return this.#password === input;
  }
}

const u = new User("Nikhil", "1234");
console.log(u.checkPassword("1234")); // true
```

---

### **64. What is abstraction in JavaScript?**

**Definition:**  
Abstraction is about **hiding complexity** and showing only relevant details.

**Example (simplified interface):**
```javascript
class Car {
  start() {
    this.#injectFuel();
    this.#ignite();
    console.log("Car started");
  }

  #injectFuel() { /* hidden logic */ }
  #ignite() { /* hidden logic */ }
}
```

---

### **65. What is polymorphism?**

**Definition:**  
Polymorphism means the **same method behaves differently** for different classes.

**Example:**
```javascript
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

let pet = new Cat();
pet.speak(); // Meow
```

---

### **66. What is the `super` keyword in JavaScript?**

**Definition:**  
`super` is used to call the **parent class constructor** or methods.

**Example:**
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.breed = "Labrador";
  }
}
```

---

### **67. What are static methods and properties?**

**Definition:**  
`static` methods belong to the class itself, not instances.

**Example:**
```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); // 5
```

---

### **68. What are getters and setters in JavaScript?**

**Definition:**  
They allow you to control access to object properties.

**Example:**
```javascript
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    this._name = newName;
  }
}

const u = new User("nikhil");
console.log(u.name); // NIKHIL
```

---

### **69. What is composition vs inheritance?**

**Definition:**
- **Inheritance**: "is-a" relationship.
- **Composition**: "has-a" relationship. More flexible; combine small functions/objects.

**Example of Composition:**
```javascript
const canWalk = (obj) => ({
  walk: () => console.log(`${obj.name} walks`)
});

const canEat = (obj) => ({
  eat: () => console.log(`${obj.name} eats`)
});

function Person(name) {
  const person = { name };
  return Object.assign(person, canWalk(person), canEat(person));
}

const nikhil = Person("Nikhil");
nikhil.walk(); // Nikhil walks
```

---

