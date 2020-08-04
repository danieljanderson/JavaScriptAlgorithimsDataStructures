#Time Complexity
Big O Shorthands
1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

#Space Complexity in JS (rules of thumb)

Most primitives (booleans, numbers, undefined, null) are constant space
Stings require O(n) space (where n is the string length)
Reference types are generally O(n), where n is the length (for arrays) or the number of keys(for objects)