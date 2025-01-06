---
title: Shardeum Liberty Opcodes
sidebar_position: 5
---

# Liberty Opcodes

Blocks work differently in Shardeum because transactions are processed individually and not grouped into blocks. However, generating blocks at a specific interval is still required to support the existing smart contracts, which use block-related opcodes and comply with the JSON RPC specifications.

Shardeum uses a life cycle called cycle to schedule validator rotation and many other operations. For example, a cycle can take 60 seconds, producing a cycle record for each cycle. In Shardeum, block numbers are tied to the cycle production rate. Shardeum decided to generate 10 blocks in each cycle. If the cycle duration is 60 seconds, a new block will be generated every 6 seconds to produce 10 blocks in each cycle.

Transaction’s timestamp selects the appropriate block by deterministically mapping the timestamp to the block number. If the injected transaction does not have a timestamp, the network will determine a timestamp for the transaction and select the correct block. The block information will be fed into the EVM together with the transaction parameter.

Shardeum exposes block-related public API endpoints so JSON RPC servers can use the same block information as the network.

## Block Related Opcodes

| **Stack** 	| **Name**   	| **Supported** 	| **Notes**                                                                                                                        	|
|-----------	|------------	|---------------	|----------------------------------------------------------------------------------------------------------------------------------	|
| 40        	| BLOCKHASH  	| Supported     	| Hash of the specific block, only valid for the 256 most recent blocks, excluding the current one                                 	|
| 41        	| COINBASE   	| Supported     	| Return network account address because there is no block miner in Shardeum                                                       	|
| 42        	| TIMESTAMP  	| Supported     	| Return network account address because there is no block miner in Shardeum                                                       	|
| 43        	| NUMBER     	| Supported     	| Current block's number                                                                                                           	|
| 44        	| DIFFICULTY 	| Supported     	| Current block's difficulty. Since Shardeum does not use Proof of Work for transaction consensus the difficulty value is set to 0 	|
| 45        	| GASLIMIT   	| Supported     	| Current block's gas limit                                                                                                        	|
| 46        	| CHAINID    	| Supported     	| Current network's chain id: 8080                                                                                                 	|
| 48        	| BASEFEE    	| EIP-1559      	| London hardfork, EIP-3198: Current block's base fee                                                                              	|
