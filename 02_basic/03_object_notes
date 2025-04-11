### **1️⃣ JavaScript Object Literals & Constructor Objects**  
JavaScript me **objects** banane ke **do main tareeke** hote hain:  

1. **Object Literal** (`{}` syntax se bana object)  
2. **Constructor Function/Object** (`new` keyword se bana object)  

Chalo dono ko detail me samajhte hain! 😊  

---

## **🔹 1. Object Literal (`{}`)**
Yeh **sabse easy aur common** tareeka hai **object create karne ka**.  

### **📌 Example:**
```js
const person = {
    name: "Nikhil",
    age: 24,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); // Output: Nikhil
person.greet(); // Output: Hello, my name is Nikhil
```
**🔹 Features:**  
✅ Simple syntax (`{}` ka use)  
✅ Directly properties aur methods add kar sakte hain  
✅ Har object independent hota hai  

---

## **🔹 2. Constructor Function/Object (`new Object()`)**
Yeh **dynamic tareeka** hai **multiple objects** create karne ka.  

### **📌 Example (Using `new Object()`):**
```js
const person = new Object();
person.name = "Nikhil";
person.age = 24;
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

console.log(person.name); // Output: Nikhil
person.greet(); // Output: Hello, my name is Nikhil
```
📌 **Difference**?  
✅ Yahan **new Object()** use kiya hai  
✅ Yeh **slightly slow** hota hai compare to **literal syntax**  
✅ Same output milega  

---

## **🔹 3. Constructor Function (Reusable Objects)**
Agar aap **multiple similar objects** banana chahte ho, to **constructor function** best hota hai.  

### **📌 Example (Using Function Constructor):**
```js
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const person1 = new Person("Nikhil", 24);
const person2 = new Person("Amit", 26);

console.log(person1.name); // Output: Nikhil
console.log(person2.name); // Output: Amit
person1.greet(); // Output: Hello, my name is Nikhil
```
**🔹 Features:**  
✅ **Multiple objects easily create kar sakte hain**  
✅ `new` keyword se **dynamic object generation hota hai**  
✅ `this` keyword har object ke liye **unique properties store karta hai**  

---

## **🎯 Object Literal vs Constructor Object (Comparison Table)**
| Feature | Object Literal `{}` | Constructor Function |
|---------|----------------|------------------|
| Syntax | Simple (`{}`) | Function + `new` |
| Performance | Fast | Slightly Slow |
| Reusability | Nahi | Haan |
| Memory Use | Har object ka **separate copy** | Shared via Prototype |

---

### **📌 🔥 Which One Should You Use?**
✅ **Agar ek ya do objects banane hain → Object Literal (`{}`) best hai**  
✅ **Agar multiple similar objects banane hain → Constructor Function (`new`) best hai**  

---

### **🤔 Ab Kya Samajhna Chahiye?**
Agar tumko **`class` vs `constructor function`** ka difference chahiye ya **prototype** ka concept samajhna hai to batao! 😊🚀