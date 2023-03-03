//ES9-regular Expression Backward Assertion

// Assertion is a test of characters before or after the current matching position. It does not actually consume any characters, so assertion is also called "non consuming matching" or "non obtaining matching".

// There are four forms of regular expression assertions:

// (? = pattern) zero width positive lookahead assertion
// (?! pattern) zero width negative lookahead assertion
// (? < pattern) zero width positive look behind assertion
// (? <! Pattern) zero width negative look behind assertion
// The pattern in this is a regular expression.

// lookahead and lookbehind are translated into:

// Positive negative
// Forward backward
// Forward and reverse
// Forward looking and backward looking
// ......
// This document uses forward and reverse.