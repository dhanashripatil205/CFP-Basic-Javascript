//ES9-regular Expression Unicode Escape

// Generally speaking, the number character interpretation [0-9], the word character is [0-9a-zA-Z], and the blank character includes spaces, carriage returns and other characters, but this is the case in ASCII encoding, not in Unicode encoding.

// . Therefore, if you specify that regular expressions use Unicode mode in Python 2 (the simplest way to interpret is to specify the pattern modifier (? u) at the beginning of regular expressions), \ d \ w \ s can match all corner numbers, Chinese characters, and all corner spaces. In this case, it is called the Unicode matching rule in this book; correspondingly, the matching in the previous ASCII encoding is called the ASCII matching rule.