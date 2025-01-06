---
title: ERC-20
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy Your Own Crypto Token (ERC20)

## What is ERC-20 Token?

ERC 20 tokens are issued on the Ethereum network. They have emerged as the technical standard on the Ethereum blockchain for token implementation and provide a list of rules that all Ethereum-based tokens must follow. Side note: Ethereum is a layer 1 blockchain that carries several independent and dependent L1 and L2 blockchains due to its highly automated/virtualized [EVM](https://shardeum.org/blog/ethereum-virtual-machine-evm-simplified/).

‘ERC’ stands for ‘Ethereum Request for Comment.’ ERC-20 specifically has six different coding functions. In terms of implementation of the coding for ERC-20 tokens, the six basic coding functions are as follows:

1. Total supply
2. Balance of
3. Allowance
4. Transfer
5. Approve
6. Transfer from

## Create and Deploy your ERC-20 Token using Remix

This step-by-step tutorial will teach you how to create and deploy an ERC-20 token on the Shardeum Liberty network. We will use [Metamask](https://metamask.io/) and [Remix IDE](https://remix.ethereum.org/) for this tutorial.

## Add Shardeum Network to Metamask/Claim Token

[Metamask](https://metamask.io/) allows users to store and manage account keys, broadcast transactions, send and receive Ethereum-based cryptocurrencies and tokens, and securely connect to decentralized applications through a compatible web browser or the mobile app’s built-in browser. Click [here](https://metamask.io/download/) to install the MetaMask extension on your browser.

And follow these [instructions](https://docs.shardeum.org/basics/claim) to add Shardeum to MetaMask wallet and claim test 100 $SHM tokens from Liberty (alphanet) faucet.

## Writing the Code Using Remix

We are using [Remix IDE](https://remix.ethereum.org/) for writing the smart contract as mentioned above. In Remix, create a new contract file and name it ‘ShardeumERC20Token.sol’ (you can name it anything you want). And, in the contract, write the following code:

<Tabs>
  <TabItem value="solidity" label="Solidity" default>

```solidity
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract ShardeumERC20Token is ERC20 {

   constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol){
       _mint(msg.sender, 10000 * 10 ** 18);

   }
}
```

  </TabItem>
</Tabs>

Code explanation in brief for reference:

1. **pragma solidity ^0.8.0** – This line specifies the compiler version of Solidity to be used. ^0.8.0 means any version greater than 0.8.0.
2. **import** – This line imports the ERC-20 token standard from OpenZeppelin (OZ).
3. **contract ShardeumERC20Token is ERC20** – This specifies a new contract, named LW3Token, in our Solidity file. Also, it says that this contract is an instance of ERC20.
4. **constructor** – Essentially, we created constructor function that is called when the smart contract is first deployed.
5. **_mint** – An internal function within the ERC20 standard contract, which means that it can only be called by the contract itself. External users cannot call this function.
6. __10000 * 10 ** 18__ – (which is actually 10 ^ 18) specifies that you want 10000 full tokens to be minted to your address.

## Compiling the Smart Contract

Compile the contract by going over to the ‘Compiler’ tab in Remix and selecting ‘ShardeumERC20Token.sol’, and then hit ‘Compile’.

![mint_your_own_crypto_1](/img/mint_your_own_crypto/mint_your_own_crypto_1.jpg)

## Deploying the Smart Contract on Shardeum Liberty

Let’s deploy a fixed supply of 10000 Tokens (You can change it to another supply at the code level).

Go to the ‘Deployer’ tab in Remix.

Select the ‘Injected Web3’ environment (make sure you select Shardeum Liberty Network), and connect your MetaMask wallet.

Now, select the ‘ShardeumERC20Token.sol’ contract, and enter values for the constructor arguments ‘_Name’ and ‘_Symbol’ as shown in the image below.

![mint_your_own_crypto_2](/img/mint_your_own_crypto/mint_your_own_crypto_2.jpg)

Proceed to click ‘Transact’ and approve the transaction in ‘Metamask’ to deploy your contract!

![mint_your_own_crypto_3](/img/mint_your_own_crypto/mint_your_own_crypto_3.jpg)

You have now successfully deployed ERC-20 Token on Shardeum Liberty!

After deploying, click the ‘Copy Address’ button to copy the contract address.

![mint_your_own_crypto_4](/img/mint_your_own_crypto/mint_your_own_crypto_4.jpg)

You can now go to [Shardeum Explorer](https://docs.shardeum.org/network/explorer) and search for contract address and you should be able to see it there!

## Video Tutorial

<iframe id="ytplayer" type="text/html"
  class="video"
  src="https://www.youtube.com/embed/sSjzxuxCOCA"
  allowFullScreen="allowFullScreen"
  mozallowfullscreen="mozallowfullscreen"
  msallowfullscreen="msallowfullscreen"
  oallowfullscreen="oallowfullscreen"
  webkitallowfullscreen="webkitallowfullscreen"
  frameBorder="0">
  </iframe>
