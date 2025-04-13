Perfect topic, Nikhil! 😎  
Let’s break down the mysterious and powerful **`this` keyword** in JavaScript — **what it means, how it changes, and where it confuses people**. 💥

---

## 📌 What is `this` in JavaScript?

In JavaScript, `this` refers to **the object that is executing the current function**.

But it depends on **how** and **where** the function is called.  
Let’s explore different scenarios👇

---

## 🔹 1. Global Scope (non-strict mode)

```js
console.log(this); // 👉 refers to the global object

// In browser: window
```

---

## 🔹 2. Inside a function (non-strict mode)

```js
function show() {
  console.log(this);
}
show(); // 👉 still global object (window)
```

---

## 🔹 3. Inside a function (strict mode)

```js
"use strict";
function show() {
  console.log(this);
}
show(); // 👉 undefined
```

---

## 🔹 4. Inside an object method

```js
const user = {
  name: "Nikhil",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // 👉 "Nikhil"
```

✅ Here, `this` refers to the **object** calling the method (`user`).

---

## 🔹 5. Arrow Functions 🚫

```js
const person = {
  name: "Nikhil",
  sayHi: () => {
    console.log(this.name);
  }
};

person.sayHi(); // 👉 undefined 😵
```

⚠️ **Arrow functions don’t have their own `this`** —  
they use the `this` from the **lexical scope** (where they were defined).

---

## 🔹 6. Constructor Functions

```js
function Person(name) {
  this.name = name;
}

const p1 = new Person("Nikhil");
console.log(p1.name); // 👉 Nikhil
```

✅ In constructor functions, `this` refers to the **newly created object**.

---

## 🔹 7. `this` in event listeners (browser)

```js
<button onclick="console.log(this)">Click</button>
```

Here, `this` refers to the **DOM element** that triggered the event (`<button>`).

---

## 🧠 Summary Cheat Sheet

| Context                         | `this` refers to...                    |
|-------------------------------|----------------------------------------|
| Global (non-strict)           | `window` (global object)               |
| Global (strict mode)          | `undefined`                            |
| Inside object method          | That object                            |
| Arrow function                | `this` from surrounding scope          |
| Constructor function          | New object being created               |
| Event handler (HTML/DOM)      | Element that received the event        |

---

If you'd like, I can now:

- Quiz you on `this`
- Show code snippets for interview
- Or give a mini project where `this` behaves differently in methods vs arrow functions

What would you like next? 🔥