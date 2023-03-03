//String padding

// String.padStart(targetLength,[padString])

// String.padEnd(targetLength,padString])

// targetLength: the target length to which the current string needs to be populated. If the value is less than the length of the current string, the current string itself is returned.
// padString: (optional) fills the string. If the string is too long, so that the length of the filled string exceeds the target length, only the leftmost part will be retained, and the rest will be truncated. The default value of this parameter is' '.

console.log('0.0'.padStart(4,'*'))
console.log('0.0'.padStart(20))
console.log('0.0'.padEnd(4,'*')) 
console.log('0.0'.padEnd(10,'*'))
 
/*
*0.0
                 0.0
0.0*
0.0*******
*/