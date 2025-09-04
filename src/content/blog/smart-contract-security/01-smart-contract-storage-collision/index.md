---
title: "Smart Contract Storage Collision"
summary: ""
date: "May 25 2024"
draft: false
tags:
- Smart Contract Security
---

A storage collision is a type of cross-contract vulnerability in smart contracts, particularly on the Ethereum blockchain. Here are the technical details:

*   A smart contract uses storage to persistently store its data on the blockchain. 
*   Typically, each contract has its own separate storage.
*   However, it is also possible that two smart contracts share their storage using a delegate call.
*   When these two contracts have different understandings of the types/semantics of their shared storage, a storage collision vulnerability can occur.
*   This may lead to unexpected behavior such as denial of service (frozen funds), privilege escalation, and theft of financial assets.
    

For example, consider a set of two Smart Contracts, where one is a proxy pattern. If the proxy and the target contract start from storage slot 0, they have separated storage layout internally. If the proxy contract calls a function in the target contract that modifies the storage, it will clash with the first variable in the proxy. This is a storage collision.

To detect and investigate the impact of storage collision vulnerabilities at scale, researchers have proposed systems like CRUSH.

#### Example:

Here's an example of a storage collision vulnerability in Solidity:

```solidity
// Contract A
contract A {
    uint256 public value;

    function setValue(uint256 _value) public {
        value = _value;
    }
}

// Contract B
contract B {
    address public owner;

    function setOwner(address _owner) public {
        owner = _owner; // This will overwrite the value in Contract A
    }
}

// Deployment
contract Deployer {
    A public a;
    B public b;

    constructor() {
        a = new A();
        b = new B();

        // Both contracts share the same storage slot 0
        address(b) = address(a);
    }
}
```

In this example:

1.  Contract A stores a \`uint256\` value in storage slot 0.
2.  Contract B expects an \`address\` value in storage slot 0.
3.  The \`Deployer\` contract creates instances of both A and B, and then sets the address of B to be the same as the address of A using \`address(b) = address(a)\`. This causes the two contracts to share the same storage.
    

Now, if we call `a.setValue(42)`, the value 42 will be stored in slot 0. However, if we then call `b.setOwner(0x1234...)`, the `owner` variable in Contract B will overwrite the `value` in Contract A with the address `0x1234...`.

This storage collision can lead to unexpected behavior, such as loss of funds or denial of service, depending on how the contracts are used.

To mitigate this vulnerability, the contracts sharing storage must have a consistent understanding of the data types and semantics stored in each slot. Additionally, when upgrading a contract, the new version should extend the previous storage layout rather than modifying existing slots.