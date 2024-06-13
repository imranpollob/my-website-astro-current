---
title: "Top 20 ERC Standards to Know for Every Blockchain Developers"
summary: ""
date: "Jun 9 2024"
draft: false
tags:
- Solidity
- Smart Contract
---

Understanding ERC standards is essential for a blockchain developer for several reasons:

1.  **Interoperability**: ERC standards ensure that tokens and smart contracts can interact seamlessly with other applications, wallets, and exchanges, fostering a cohesive ecosystem.
2.  **Security**: Standards incorporate best practices for security, reducing the risk of vulnerabilities and making it easier to audit and verify code.
3.  **Efficiency**: Standards provide a common blueprint for token functionality, allowing developers to use and build upon existing implementations, saving time and effort.
4.  **Regulatory Compliance**: Standards like ERC-1400 help ensure that tokens meet legal and regulatory requirements, particularly for security tokens and transfer restrictions.
5.  **Innovation**: Different standards cater to various types of tokens and use cases, from fungible (ERC-20) to non-fungible (ERC-721) to multi-token (ERC-1155), enabling developers to create versatile and innovative applications.
    

Top 20 ERC Standards
--------------------

1.  **ERC-20**:

      - **Purpose**: Standardizes the way fungible tokens are created and managed on the Ethereum blockchain.
      - **Benefits**: Interoperability between tokens, easier integration with wallets and exchanges.
      - **Key Functions**: totalSupply, balanceOf, transfer, transferFrom, approve, allowance.
  
2.  **ERC-721**:

      - **Purpose**: Standardizes the way non-fungible tokens (NFTs) are created and managed on the Ethereum blockchain.
      - **Benefits**: Unique ownership representation for digital or physical assets.
      - **Key Functions**: balanceOf, ownerOf, approve, getApproved, setApprovalForAll, isApprovedForAll, transferFrom, safeTransferFrom.

3.  **ERC-1155**:
    
      - **Purpose**: Introduces a standard for managing both fungible and non-fungible tokens efficiently.
      - **Benefits**: Reduced gas costs, more flexible token management.
      - **Key Functions**: balanceOf, balanceOfBatch, setApprovalForAll, isApprovedForAll, safeTransferFrom, safeBatchTransferFrom.

4.  **ERC-777**:
    
      - **Purpose**: Enhances ERC-20 functionality with features like sending tokens to contracts and improved security.
      - **Benefits**: More flexible token functionality, reduced user errors.

5.  **ERC-165**:
    
      - **Purpose**: Allows contracts to query whether another contract implements a specific interface.
      - **Benefits**: Improved contract compatibility and interaction.
      - **Key Functions**: supportsInterface.

6.  **ERC-621**:
    
      - **Purpose**: Provides a mechanism to increase or decrease the supply of tokens.
      - **Benefits**: Greater flexibility for token issuers.
      - **Key Functions**: increaseSupply, decreaseSupply.

7.  **ERC-827**:
    
      - **Purpose**: Extends ERC-20 to allow tokens to be approved for transfer by a third party.
      - **Benefits**: Enables more complex transactions involving tokens.
      - **Key Functions**: approveAndCall, transferFromAndCall.

8.  **ERC-884**:
    
      - **Purpose**: Standardizes the issuance of tokens that represent ownership of real-world assets.
      - **Benefits**: Facilitates tokenization of real-world assets like property or commodities.
      - **Key Functions**: mint, burn.

9.  **ERC-902**:
    
      - **Purpose**: Defines a standard interface for subscription-based services using tokens.
      - **Benefits**: Enables the creation of tokens representing access to services.
      - **Key Functions**: subscribe, unsubscribe, isSubscribed.

10.  **ERC-998**:
      - **Purpose**: Introduces the concept of composable tokens, which can own and be owned by other tokens.
      - **Benefits**: Enables more complex and flexible token structures.
      - **Key Functions**: transferToParent, transferFromParent.

11.  **ERC-1153**:
    
      - **Purpose**: Enables gasless transactions, where transaction fees are paid by a third party.
      - **Benefits**: Allows users to interact with contracts without holding ETH for gas.
      - **Key Functions**: transferRelay.

12.  **ERC-1154**:
    
      - **Purpose**: Standardizes batch transfers of tokens, enabling multiple transfers in a single transaction.
      - **Benefits**: Reduces gas costs and improves efficiency for bulk token transfers.

13.  **ERC-1190**:
    
      - **Purpose**: Defines a standard for tokenized voting, where tokens are used as votes in governance systems.
      - **Benefits**: Enables decentralized governance using tokens as voting power.
      - **Key Functions**: vote, delegate, undelegate.

14.  **ERC-1202**:
    
      - **Purpose**: Standardizes token-weighted polling, where votes are weighted based on the number of tokens held.
      - **Benefits**: Provides a fair and transparent way to conduct polls using token voting.

    
15.  **ERC-1261**:
    
      - **Purpose**: Defines a standard for decentralized identity using tokens.
      - **Benefits**: Enables the use of tokens as a form of decentralized identification.
      - **Key Functions**: registerIdentity, revokeIdentity, getIdentity.

16.  **ERC-1400**:
    
      - **Purpose**: Provides a standard for security tokens that comply with regulatory requirements.
      - **Benefits**: Facilitates the issuance and management of compliant security tokens.

17.  **ERC-1404**:
    
      - **Purpose**: Standardizes restrictions on token transfers, such as whitelisting or blacklisting addresses.
      - **Benefits**: Enhances security and compliance by controlling token transfers.
      - **Key Functions**: detectTransferRestriction, messageForTransferRestriction.

18.  **ERC-1643**:
    
      - **Purpose**: Defines a standard for documenting metadata about tokens, such as name, symbol, and decimals.
      - **Benefits**: Provides a standardized way to access token metadata.
      - **Key Functions**: name, symbol, decimals.

19.  **ERC-1736**:
    
      - **Purpose**: Standardizes the tokenization of debt, enabling the creation of tokens representing debt obligations.
      - **Benefits**: Facilitates the management and transfer of tokenized debt.
      - **Key Functions**: issueDebtToken, redeemDebtToken, transferDebtToken.

20.  **ERC-1948**:
      - **Purpose**: Defines a standard for tokenizing licenses, enabling the creation of tokens representing licenses for digital assets.
      - **Benefits**: Enables the management and transfer of digital asset licenses using tokens.
      - **Key Functions**: issueLicenseToken, revokeLicenseToken, transferLicenseToken.


Understanding these standards will allows you to build versatile and future-proof blockchain applications.