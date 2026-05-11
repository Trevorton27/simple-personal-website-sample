---
title: The JavaScript Concepts That Finally Made Sense
date: 2024-02-03
excerpt: After two weeks of JavaScript, three things suddenly clicked — functions, arrays, and async. Here is how I think about each one now.
published: true
---

## Why JavaScript Is Confusing At First

Most programming tutorials start with variables and loops and make it sound simple. And it is simple — for about three days. Then you run into `undefined`, or a function that does not return what you expected, or code that runs in the wrong order, and nothing in the tutorial explains what just happened.

Here are the three things that confused me most, and how I eventually understood them.

## Functions Are Verbs

A variable stores a thing. A function does a thing.

That is the mental model that finally worked for me. When I name a function, I name it like a verb: `getPostBySlug`, `formatDate`, `handleSubmit`. When I call it, I am asking the function to do its thing and give me the result.

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

let message = greet("Sarah");  // "Hello, Sarah!"
```

The function does not run when you define it. It runs when you call it with `()`. I thought this was obvious but it took me longer than I would like to admit.

## Arrays Are Just Lists

An array is an ordered list. That is all. The methods that confused me are all just ways of asking questions about the list or producing a new list.

- `.filter()` — give me only the items that pass a test
- `.map()` — give me a new list where every item has been changed
- `.find()` — give me the first item that passes a test

```javascript
let numbers = [3, 8, 1, 12, 5, 20];

// Keep only numbers greater than 10
let big = numbers.filter(n => n > 10);    // [12, 20]

// Double every number
let doubled = numbers.map(n => n * 2);   // [6, 16, 2, 24, 10, 40]

// Find the first number greater than 10
let first = numbers.find(n => n > 10);   // 12
```

Once I understood that these methods just return new arrays (or one item, in `find`'s case), I stopped being afraid of them.

## Async Is a Coffee Shop

JavaScript runs one instruction at a time. If it had to fully wait for a network request before doing anything else, the page would freeze. `async/await` is how JavaScript starts a task, does other things, and comes back to collect the result when it is ready.

The analogy that helped me: at a coffee shop, you do not stand frozen at the counter until your drink is done. You give your name, sit down, and they call you. `await` is the moment you sit back down and wait to be called.

```javascript
async function getWeather(city) {
  let response = await fetch(`https://api.example.com/weather?city=${city}`);
  let data = await response.json();
  return data;
}
```

Each `await` says: "pause here, wait for this to finish, then continue." The function is `async` because it contains at least one `await`.

## The Error I Still Make

Forgetting to `await` something that needs it.

```javascript
// Wrong — this logs a Promise object, not the data
let data = fetch("https://api.example.com/data");
console.log(data);

// Right
let data = await fetch("https://api.example.com/data");
```

When you forget `await`, you get a Promise object instead of the value you wanted. The console output looks like `Promise { <pending> }` which is completely unhelpful unless you know what you are looking at.

I still do this sometimes. The fix is always the same: add `await`.
