---
title: Transaction Consensus
sidebar_position: 4
---

# Transaction Consensus

Shardeum uses a combination of Proof of Stake (PoS) and Proof of Quorum (PoQ) as its consensus mechanism to validate every transaction. 

**Proof of Stake**

Every Validator node in Shardeum is required to stake a minimum stake amount to start participating in the network. These validator nodes are incentivized to earn SHM as long as they are validating transactions honestly and if a node acts maliciously, its staked SHM is slashed, ensuring the network security.

**Proof of Quorum**

Shardeum uses transaction-level consensus instead of block-level consensus like other popular networks. Transaction-level consensus eliminates the complexities needed to ensure atomic processing, otherwise required by block-level consensus platforms. This further results in immediate finality and low latency, which prevents network congestion. 

Transactions are validated individually as soon as they are received with a time stamp (with no possibility of double spending). This is followed by gossiping the transactions to all the other nodes in a shard on the network instead of each & every node. Every node, essentially, will know that every other node in the group knows about a particular transaction. This enables a trustless and leaderless collection of electronic votes (or quorum) in the form of receipts.

E-voting enables consensus nodes to digitally sign transactions without the need to ‘send’ votes preventing forgery. And when there are more than 50% of the receipts (quorum), transactions are committed on the network. Along with its unique gossip protocol, the consensus algorithm used on Shardeum will also auto-rotate the validator nodes on the network, making it extremely difficult for bad actors to attack the network.


<iframe width="800" height="480" src="https://www.youtube.com/embed/uFX6TY55XwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
