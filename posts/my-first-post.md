---
title: My First Blog Post
date: 2024-01-15
excerpt: I just started learning web development and I already have a website live on the internet. Here is how that happened.
published: true
---

## How I Got Here

A few weeks ago I could not explain what HTML stood for. Today I have a personal website deployed on the internet with my name on it. That is a strange feeling.

This post is partly for me — a record of where I started — and partly for anyone else who is at the very beginning and wondering if it is actually possible to build something real from zero.

The short answer is yes. The longer answer is the rest of this post.

## What I Learned in Week 1

The first thing we built was a single HTML file. One file. Just text with some tags around it. It looked terrible. It had no styling. My name was in a heading and there was a list of three things I like.

That file is on GitHub right now and I pushed it there myself from the terminal.

Here is the thing nobody told me: the terminal is just clicking, but with typing. That is all it is. `cd Documents` is the same as double-clicking the Documents folder. Once that clicked, I stopped being afraid of it.

The other thing from week 1 that actually matters: the box model. Every element on a webpage is a rectangle. There is content, then padding around it, then a border around that, then margin outside the border. That is it. That is the whole thing. Once you see it, you cannot unsee it.

## One Mistake I Made Constantly

I used `=` inside an `if` condition instead of `===`.

```javascript
// Wrong — this assigns true to isLoggedIn, always runs
if (isLoggedIn = true) {
  console.log("welcome");
}

// Right — this compares
if (isLoggedIn === true) {
  console.log("welcome");
}
```

I made this mistake probably eight times before I stopped. The error messages did not help at first because the code did not crash — it just did the wrong thing silently.

## What Comes Next

I am going to keep writing here as I build. The plan is to add at least one real project to the portfolio per month and write a post about what I learned building it.

If you are just starting out: the first week is the hardest. Not because the material is hard but because everything is unfamiliar at the same time. It gets better fast.
