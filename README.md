# Counter

A malicious alien invades the earth and says he'll destroy the earth unless we make an app which conforms to his specification.

Specification:

1. He wants an application with two counters: a big one and a small one.
2. When the big counter is clicked, the big count and the small count are both incremented.
3. When the little counter is clicked, only the little count will be incremented.
4. The alien's final demand: the small counter cannot be rendered from the big counter.

How can we do this? Props are passed down from parent component to child component, but there is no way we know of to pass data up from a child to a parent....
