# Counter

A malicious alien invades the earth and says he'll destroy the earth unless we make an app which conforms to his specification.

Specification:

1. He wants an application with two counters: a big one and a small one.
2. When the small counter is clicked, the big count and the small count are both incremented.
3. When the big counter is clicked, only the big count will be incremented.
4. The alien's final demand: the small counter cannot be rendered from the big counter.

How can we do this? Props are passed down from parent component to child component, but there is no way we know of to pass data up from a child to a parent. We can pass any value down as a prop from a parent to a child...

We know that functions are values in Javascript. So, we can create a function which modifies the state of the parent, and pass it down as a prop to the child component. This enables the child component to indirectly set the state of it's parent!

Here's a running demo of the finished app we're trying to build: http://future-marble.surge.sh/

In this branch I rewrote the app to use react hooks.
