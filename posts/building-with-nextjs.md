---
title: Building With Next.js — What I Wish I Knew Earlier
date: 2024-03-12
excerpt: Server components, file-based routing, and why the folder structure IS the app. Three things about Next.js that took a while to understand.
published: true
---

## Next.js Feels Like Magic Until It Does Not

When you first run `npm run dev` and see a working website appear at `localhost:3000`, Next.js feels like magic. Then you try to do something slightly outside the tutorial examples and get an error you cannot explain.

These are the three things I wish someone had explained clearly before I ran into them the hard way.

## The Folder Structure Is the Router

There is no router configuration file. There is no list of routes you define somewhere. The folder structure is the routing system.

```
src/app/page.jsx              →  yoursite.com/
src/app/blog/page.jsx         →  yoursite.com/blog
src/app/blog/[slug]/page.jsx  →  yoursite.com/blog/any-post-title
src/app/contact/page.jsx      →  yoursite.com/contact
```

A folder named `[slug]` is a dynamic route. Whatever appears in the URL at that position becomes available as `params.slug` inside the page component. When I understood this, the entire blog system made sense. Each post has a URL like `/blog/my-first-post`. The `[slug]` folder catches that URL. The `getPostBySlug("my-first-post")` function reads the matching markdown file.

## Server Components Run on the Server

Most React tutorials teach you to think of components as things that run in the browser. In Next.js with the App Router, most components run on the server first. This changes a lot.

A **server component** (the default) runs on the server. It can read files from the filesystem. It cannot use `useState` or respond to user clicks. The browser only receives the final HTML — the component's JavaScript code is never sent to the browser.

A **client component** (marked with `'use client'` at the top of the file) runs in the browser. It can use `useState`, handle clicks, and read from `localStorage`. It cannot read files from the server.

The rule I follow: start with a server component. Add `'use client'` only when you need something interactive.

The blog post list page is a server component. It reads markdown files from the filesystem, renders the list, and sends HTML to the browser. Zero JavaScript is shipped for that page. The contact form is a client component because it uses `useState` to track the form's status (idle, sending, sent, error).

## generateStaticParams Is What Makes the Blog Fast

Without `generateStaticParams`, when someone visits `/blog/my-first-post`, Next.js has to:
1. Read the filesystem
2. Parse the markdown
3. Render the HTML
4. Send it to the user

With `generateStaticParams`, all of that happens at build time — once, when you push to GitHub and Vercel builds the site. After that, visiting any blog post just retrieves a pre-built HTML file. No filesystem reads. No markdown parsing. Just a file.

```javascript
export function generateStaticParams() {
  let slugs = getAllPostSlugs();
  return slugs.map(slug => ({ slug }));
}
```

This is a function exported from a dynamic route page. Next.js calls it during the build. It returns a list of every possible value for `[slug]`. Next.js then pre-builds a page for each one.

For a small personal blog, the speed difference is not dramatic. But understanding why it is faster — the work is moved from request time to build time — is a concept that appears everywhere in web development.

## What I Am Building Next

I want to add a tags system to the blog. Each post would have a `tags` field in the frontmatter. There would be a `/blog/tag/[tag]` page that lists posts with that tag. It is the same pattern as the blog — file-based data, dynamic routes, `generateStaticParams` — just applied one level deeper.
