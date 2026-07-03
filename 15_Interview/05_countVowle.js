function countVowle(str){
    // let vowle = ['a','e','i','o','u'];
    let vowle = "aeiouAEIOU"
    let count = 0;
    for(i= 0; i< str.length; i++){
        if(vowle.includes(str[i])) count ++

    }
    return count
}

console.log(countVowle('Exit'));


//2nd method

function countVowels(str) {
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(countVowels("Hello World"));


/*// Explation


Great question, Nikhil 👍 Let’s break both approaches step by step in a clear **interview-friendly way**.

---

# ✅ 1. First Approach (Using `includes()`)

```javascript
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}
```

---

## 🔹 Step-by-step Explanation

### 1. `let count = 0;`

* We create a variable `count` to store the number of vowels.
* Initially, it's `0` because we haven’t checked anything yet.

---

### 2. `const vowels = "aeiouAEIOU";`

* This string contains **all vowels (both lowercase + uppercase)**.
* Why?

  * So we don’t miss vowels like `A` or `E`.

---

### 3. Loop through string

```javascript
for (let i = 0; i < str.length; i++)
```

* We iterate through each character of the string.
* Example: `"Hello"`

  * `H → e → l → l → o`

---

### 4. `includes()` method

```javascript
vowels.includes(str[i])
```

## 🔹 What is `includes()`?

* It checks whether a value exists inside a string or array.
* Returns:

  * `true` → if found
  * `false` → if not found

### Example:

```javascript
"aeiou".includes("e") // true
"aeiou".includes("z") // false
```

---

### 🔹 How it's used here:

* For each character:

  * Check if it's inside `"aeiouAEIOU"`
  * If yes → it's a vowel

---

### 5. Increment count

```javascript
count++;
```

* If vowel found → increase count by 1

---

### 6. Return result

```javascript
return count;
```

---

## 🔹 Dry Run Example

Input: `"Hello"`

| Character | includes? | count |
| --------- | --------- | ----- |
| H         | ❌         | 0     |
| e         | ✅         | 1     |
| l         | ❌         | 1     |
| l         | ❌         | 1     |
| o         | ✅         | 2     |

👉 Final Output: `2`

---

# ✅ 2. Second Approach (Using `match()` + Regex)

```javascript
function countVowels(str) {
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
```

---

## 🔹 Step-by-step Explanation

### 1. `str.match(...)`

## 🔹 What is `match()`?

* `match()` is a **string method** used to find patterns using **Regular Expressions (Regex)**.
* It returns:

  * An **array of matches**
  * OR `null` if no match found

---

### 2. Regex: `/[aeiou]/gi`

Let’s break it:

### 🔸 `[aeiou]`

* Means: match **any one character** from this list
* So it matches: `a, e, i, o, u`

---

### 🔸 `g` flag (global)

* Find **all matches**, not just the first one

### Example:

```javascript
"hello".match(/[aeiou]/g)
// Output: ["e", "o"]
```

---

### 🔸 `i` flag (case-insensitive)

* Makes it ignore case

### Example:

```javascript
"HELLO".match(/[aeiou]/gi)
// Output: ["E", "O"]
```

---

### 3. Result stored in `matches`

```javascript
let matches = str.match(/[aeiou]/gi);
```

* Example:

```javascript
"Hello World".match(/[aeiou]/gi)
// ["e", "o", "o"]
```

---

### 4. Ternary Operator

```javascript
return matches ? matches.length : 0;
```

## 🔹 Why needed?

* If no vowels exist:

```javascript
"xyz".match(/[aeiou]/gi)
// null
```

* `null.length` → ❌ ERROR

So we check:

* If `matches` exists → return length
* Else → return `0`

---

## 🔹 Dry Run Example

Input: `"Hello"`

```javascript
str.match(/[aeiou]/gi)
```

➡️ `["e", "o"]`

```javascript
matches.length = 2
```

👉 Output: `2`

---

# ⚖️ Difference Between Both Methods

| Feature     | `includes()` method | `match()` method      |
| ----------- | ------------------- | --------------------- |
| Concept     | Loop + check        | Pattern matching      |
| Readability | Easy                | Slight advanced       |
| Performance | Good                | Better for large text |
| Use case    | Beginners           | Interviews / advanced |

---

# 🎯 Interview Tip

You can say:

> “I can solve this problem in two ways — using a loop with `includes()` for simplicity, or using regex with `match()` for a more optimized and concise solution.”

---

*/