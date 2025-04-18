Sure Nikhil! Let's dive deep into **Scopes in JavaScript** — ek fundamental concept jo **variable accessibility aur behavior** ko control karta hai. Samajhne ke baad, aapka **JavaScript code aur clean aur bug-free** hoga.

---

## ✅ What is Scope in JavaScript?

**Scope** ka matlab hota hai — _"Kahan se kisi variable ko access ya use kiya ja sakta hai?"_

JavaScript me scope decide karta hai ki **kisi variable ya function ko code ke kis hisson me access kiya ja sakta hai**.

---

## 🧠 JavaScript Me 3 Types of Scope Hote Hain:

| Type                | Meaning |
|---------------------|---------|
| 🔹 Global Scope      | Puri file me access ho sakta hai |
| 🔸 Function Scope    | Sirf us function ke andar valid hota hai |
| 🔹 Block Scope       | `{}` ke andar hi valid hota hai (like `if`, `for`, etc.) |

---

## 🔹 1. Global Scope

Agar variable ko function ke bahar declare kiya gaya ho, to wo **globally accessible** hota hai.

```js
let name = "Nikhil";

function greet() {
  console.log(name); // ✅ Accessible here
}

greet();
console.log(name); // ✅ Accessible here too
```

---

## 🔸 2. Function Scope

Variables jo kisi **function ke andar declare hote hain**, unhe **bahar se access nahi** kar sakte.

```js
function showAge() {
  let age = 25;
  console.log(age); // ✅ Accessible here
}

showAge();
console.log(age); // ❌ Error: age is not defined
```

---

## 🔹 3. Block Scope (let & const only)

Agar variable `let` ya `const` se declare kiya gaya hai kisi block `{}` ke andar, to us block ke bahar wo access nahi hota.

```js
if (true) {
  let city = "Jaipur";
  console.log(city); // ✅ Jaipur
}

console.log(city); // ❌ Error: city is not defined
```

> ⚠️ **Note:** `var` block scope follow nahi karta, wo **function scoped** hota hai!

```js
if (true) {
  var city = "Delhi";
}
console.log(city); // ✅ Delhi (because var is function-scoped)
```

---

## 📦 Scope Chain

Agar kisi variable ko current scope me nahi milta, to JavaScript **parent scopes** me search karta hai — ise **scope chain** kehte hain.

```js
let country = "India";

function outer() {
  let state = "Rajasthan";

  function inner() {
    let city = "Jaipur";
    console.log(country); // ✅ India
    console.log(state);   // ✅ Rajasthan
    console.log(city);    // ✅ Jaipur
  }

  inner();
}

outer();
```

---

## 🚀 Lexical Scope (Closures ka base)

**Lexical Scope** ka matlab hai — _"inner functions outer variables ko access kar sakte hain, but not vice-versa."_

```js
function outer() {
  let a = 10;

  function inner() {
    console.log(a); // ✅ 10
  }

  return inner;
}

const func = outer();
func(); // still prints 10 due to CLOSURE
```

---

## 📌 var vs let vs const in Scope

| Feature        | `var`           | `let` / `const`        |
|----------------|------------------|-------------------------|
| Scope          | Function Scoped  | Block Scoped            |
| Hoisting       | Yes (value = `undefined`) | Yes (but in Temporal Dead Zone) |
| Re-declare     | Yes              | No (in same scope)      |

---

## 🧪 Interview Tip

> **Q:** What is the difference between function scope and block scope?  
> **A:** Function scope limits variable access to the entire function, while block scope limits access only within the `{}` block.

---

## 🧠 In Short:

- `var` is function-scoped  
- `let` and `const` are block-scoped  
- Variables follow **scope chain** to resolve values  
- Functions form **closures** that retain access to outer variables

---

Agar aap chaho to me aapko **hoisting**, **closure**, aur **TDZ (Temporal Dead Zone)** bhi easily samjha sakta hoon — jo scope ke deep concepts hain. Batao karna hai?