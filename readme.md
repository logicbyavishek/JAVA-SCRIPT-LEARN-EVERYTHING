# I practice my dsa and solve questions
- Previously I'm post my all dsa related and practice work in a private repo but for now i want to use this repo for DSA solved question and answer accordingly .

### NB :
- show my commit history for dsa solving I'm provide solved answer in String Part and perfer Image for previous 3 question before this commit and after that I'm regularlly update my reademe.md file for get easier to find question and answer both .


# JavaScript String MCQ Practice

## 1. Predict the Output

```js
let str = "apple,banana,grape";
let result = str.split(",");
console.log(result[1]);
```

**Options:**

* A) "banana"
* B) "grape"
* C) "apple"
* D) "banana,grape"

**Answer:** A) "banana"
**Explanation:** `split(",")` converts the string into an array → `["apple", "banana", "grape"]`. Index `1` gives `"banana"`.

---

## 2. String Method

**Question:** How do you convert a string to uppercase in JavaScript?

**Options:**

* A) `str.upcase()`
* B) `toUpper(str)`
* C) `str.toUpperCase()`
* D) `str.upper()`

**Answer:** C) `str.toUpperCase()`
**Explanation:** `toUpperCase()` is the built-in method to convert a string to uppercase.

---

## 3. Predict the Output

```js
let str = "JavaScript";
console.log(str.slice(4, 10));
```

**Options:**

* A) "Script"
* B) "JavaSc"
* C) "JavaScript"
* D) "Scrip"

**Answer:** A) "Script"
**Explanation:** `slice(4, 10)` extracts characters from index 4 to 9 (end is exclusive).

---

## 4. Guess the Method

**Question:** Which method is used to find the index of the first occurrence of a substring?

**Options:**

* A) `getIndex()`
* B) `search()`
* C) `indexOf()`
* D) `find()`

**Answer:** C) `indexOf()`
**Explanation:** Returns the first index of the substring, or `-1` if not found.

---

## 5. Predict the Output

```js
console.log(typeof "hello");
```

**Options:**

* A) "string"
* B) "String"
* C) "object"
* D) "text"

**Answer:** A) "string"
**Explanation:** In JavaScript, string literals return `"string"` when used with `typeof`.

---
