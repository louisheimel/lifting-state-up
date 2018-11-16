# Counter

A malicious alien invades the earth and says he'll destroy the earth unless we make an app which conforms to his specification.

Specification #1

1. He wants an application with two counters: a big one and a small one.
2. The small counter will be nested inside the big counter.
3. When the big counter is clicked, the big count and the small count are both incremented.
4. When the little counter is clicked, only the little count will be incremented.

This is easy enough to create. We'll pass the big count down to the little counter as a prop. The value of the little count will be the big count plus the number of times the little counter has been clicked (the number of times the little counter has been clicked will be a property of the little counter's state.
