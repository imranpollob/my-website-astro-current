---
title: "Understanding Ethereum Opcodes"
summary: ""
date: "May 26 2024"
draft: false
tags:
- Blockchain
---

Ethereum opcode (short for “operation code”) is a specific instruction that the Ethereum Virtual Machine (EVM) understands and can execute. These opcodes are the low-level human-readable instructions of a program. All opcodes have their hexadecimal counterparts, for example, “MSTORE” is “0x52”, “SSTORE” is “0x55”, etc.

The EVM acts as a virtual computer within the Ethereum blockchain. It’s responsible for executing smart contracts, which are programs written in languages like Solidity. When you write a smart contract, it’s compiled into bytecode, a low-level machine code format. This bytecode consists of a sequence of opcodes. The EVM reads the bytecode of a smart contract and interprets each opcode. Based on the opcode, the EVM performs a specific operation like adding two numbers, storing data in memory, or calling another smart contract.

Opcodes are the fundamental building blocks of smart contract functionality. By combining different opcodes, developers can create complex logic within their smart contracts. Here’s what opcodes enable:

*   **Core Operations:** Basic arithmetic operations (addition, subtraction), data manipulation (copying, comparing), and control flow (if statements, loops).
*   **Interaction:** Opcodes allow smart contracts to interact with other contracts, send and receive Ether (Ethereum’s cryptocurrency), and access blockchain data.
*   **Security:** Certain opcodes manage gas consumption, a fee system that prevents malicious smart contracts from overloading the network.
    

**Examples of Ethereum Opcodes:**

1.  **Arithmetic Operations**:

    *   ADD: Performs addition operation.
    *   SUB: Performs subtraction operation.
    *   MUL: Performs multiplication operation.
    *   DIV: Performs division operation.
    *   MOD: Performs modulus operation.
    *   AND: Performs bitwise AND operation.
    *   OR: Performs bitwise OR operation.
    *   XOR: Performs bitwise XOR operation.
    *   NOT: Performs bitwise NOT operation.

2.  **Data Storage and Retrieval**:
    
    *   SLOAD: Loads a value from storage.
    *   SSTORE: Stores a value in storage.
    *   MLOAD: Loads a value from memory.
    *   MSTORE: Stores a value in memory.

3.  **Control Flow**:
    
    *   JUMP: Jumps to a specified instruction.
    *   JUMPI: Conditionally jumps to a specified instruction.
    *   STOP: Halts execution.
    *   RETURN: Stops execution and returns data.

4.  **Blockchain Interactions**:
    
    *   CALL: Calls another contract.
    *   DELEGATECALL: Calls another contract and retains the caller’s context.
    *   CREATE: Creates a new contract.
    *   SELFDESTRUCT: Destroys the contract and sends its funds to an address.


There are numerous opcodes defined for the EVM, each with a specific purpose. You can find resources online that explore the entire opcode set, including details on what each opcode does and how much gas it costs to execute. These opcodes form the basis of the Ethereum smart contracts and allow them to interact with the Ethereum blockchain. They are crucial for the execution of smart contracts and the overall operation of the Ethereum network.