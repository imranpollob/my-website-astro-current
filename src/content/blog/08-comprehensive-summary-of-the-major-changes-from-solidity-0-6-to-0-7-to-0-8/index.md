---
title: "Comprehensive summary of the major changes from Solidity 0.6 to 0.7 to 0.8"
summary: ""
date: "Jun 5 2024"
draft: false
tags:
- Solidity
- Smart Contract
---

### Solidity 0.6 to 0.7

1.  **Function Visibility**: Functions without visibility specifiers now default to internal instead of public.
    
2.  **Constructor Syntax**: Constructors must be defined using the constructor keyword rather than a function with the same name as the contract.
    
3.  address **payable**: Explicit conversions from address to address payable and vice versa are now required.
    
4.  **Function Overloading**: Stricter checks on function overloading, especially with external functions.
    
5.  **ABI Encoder v2**: Enabled by default for increased stability and better encoding/decoding.
    
6.  safe **Keyword:** Removal of the safe keyword.
    
7.  The getter for public state variables returns memory instead of storage.
    
8.  Mandatory specification of calldata data location for parameters of external functions.
    
9.  Introduction of the Error data type for custom error messages.
    
10.  Returns bytes32 instead of uint.
    
11.  The revert and require statements now support error messages as arguments.
    
12.  Linearization of inheritance using C3 Linearization.
    
13.  The delete keyword can now be used to set arrays and structs to their default values.
    
14.  String literals can now be converted to bytes directly.
    
15.  Enhancements and changes in Yul (the intermediate language for Solidity).
    
16.  Introduction of the receive keyword for functions specifically to receive Ether.
    
17.  fallback function split into receive and fallback.
    
18.  Clarification and enforcement of modifier precedence.
    
19.  More flexible and consistent tuple assignments.
    
20.  Base constructor arguments must be provided explicitly in derived contracts.
    

### Solidity 0.7 to 0.8

1.  Default behavior is to revert on integer overflow and underflow (SafeMath-like behavior).
    
2.  Introduction of custom error types to replace string-based revert reasons, which saves gas.
    
3.  More improvements and optimizations in ABI encoding and decoding.
    
4.  Introduction of block.chainid to retrieve the chain ID.
    
5.  ecrecover now returns an address instead of bytes32.
    
6.  Contracts cannot inherit from themselves.
    
7.  Introduction of the type() function to retrieve information about types, including the max and min values for integers.
    
8.  Introduction of the immutable keyword for state variables that can be assigned only once and are constant thereafter.
    
9.  Introduction of the abstract keyword for contracts that cannot be instantiated.
    
10.  Mandatory use of the override keyword when overriding functions and state variables.
    
11.  Introduction of the Error(string) type for revert reasons, improving gas efficiency.
    
12.  enum types now support explicit type conversions.
    
13.  Function selectors can now be used directly for low-level call operations.
    
14.  Introduction of block.basefee for EIP-1559.
    
15.  Improved handling and operations for signed integers, including checked and unchecked arithmetic.
    
16.  Inline assembly is more tightly integrated and checked for correctness.
    
17.  Enhanced try/catch syntax for handling errors in external calls.
    
18.  Improved checks for multiple inheritance to ensure consistency and correctness.
    
19.  Better specification and control over storage layout, reducing risks of storage conflicts.
    
20.  Improved gas estimation accuracy for complex transactions.
    
21.  Functions can now return multiple values more consistently and predictably.
    
22.  Improved initialization syntax and handling for structs and arrays.
    
23.  Consistent enforcement of visibility specifiers across all elements.
    
24.  Increased the maximum size limit for contracts, allowing for more complex contracts.
    
25.  More informative and detailed compiler error messages to aid in debugging.
    
26.  Numerous compiler optimizations for better performance and reduced gas usage.
    

These changes significantly enhance the safety, usability, and efficiency of Solidity, reflecting the ongoing evolution and improvement of the language.

[Solidity v0.7.0 Breaking Changes](https://docs.soliditylang.org/en/stable/070-breaking-changes.html)

[Solidity v0.8.0 Breaking Changes](https://docs.soliditylang.org/en/stable/080-breaking-changes.html)