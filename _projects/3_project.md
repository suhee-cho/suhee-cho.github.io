---
layout: post
title: Neuromimetic Metaplasticity for Adaptive Continual Learning without Catastrophic Forgetting
description: A brain-inspired synaptic metaplasticity model that enables deep neural networks to learn continuously without catastrophic forgetting, by intermixing stable and unstable synapses.
importance: 2
tags: computational-neuroscience machine-learning
related_publications: false
rootlink: /projects/
---

## Overview

A central challenge for artificial intelligence is *continual learning* — the ability to keep learning new information without erasing what was previously learned. Deep neural networks (DNNs) suffer acutely from **catastrophic forgetting**: learning a new task overwrites the weights encoding prior tasks, wiping them from memory almost entirely. Meanwhile, the human brain accomplishes this effortlessly. In this work, we asked: what minimal synaptic-level property gives the brain its continual learning ability? The answer, we argue, is the coexistence of **stable and unstable synapses** — and replicating this in a DNN is all it takes.

## The Problem: Stability–Plasticity Dilemma

When a DNN is trained on a sequence of tasks, highly plastic (unstable) weights readily adopt new patterns but destroy old ones. One fix is to freeze weights (stable), but then the network stops learning. This tradeoff — stability for old memories vs. plasticity for new ones — is the **stability–plasticity dilemma**.

Prior solutions (EWC, progressive networks, experience replay) either require storing old data, adding new parameters per task, or expensive per-step computations to estimate synaptic importance. None of these are needed by the brain.

## Inspiration from Human Working Memory

The brain leaves two characteristic fingerprints in sequential memory tasks:

- **Serial position effect**: Items at the *beginning* (primacy) and *end* (recency) of a sequence are remembered better than those in the middle — a signature of the brain balancing old and new information.
- **Hebb repetition effect**: Repeatedly presenting the same item progressively strengthens its memory, even within an otherwise novel sequence.

We hypothesized these effects arise from a single mechanism: the coexistence of synapses with varying degrees of plasticity, from highly stable to highly flexible, within the same network.

## The Model: Synaptic Flexibility

We introduced the concept of **synaptic flexibility** — a value between 0 and 1 assigned to each synapse at initialization and held fixed throughout training. A synapse with flexibility = 0 is fully stable: once it deviates from its initial weight, further updates are suppressed. A synapse with flexibility = 1 is fully unstable: it updates freely, just like a standard DNN weight.

The update rule scales the effective learning rate of each synapse using a tanh-based function:

$$S(\text{flexibility}, \Delta w) = 1 - \tanh^2\!\left(\alpha \cdot \frac{1 - \text{flexibility}}{\text{flexibility}} \cdot \Delta w\right)$$

where Δw is the cumulative weight change since initialization. This means stable synapses resist further change once they have drifted far from their starting values, while flexible synapses update freely throughout learning.

We tested three network variants — **unstable** (all flexibility = 1, conventional DNN), **stable** (all flexibility = 0.3), and **hybrid** (flexibility uniformly sampled from [0, 1]) — applied to the fully connected classification layers of AlexNet.

## Key Results

### The Hybrid Network Reproduces the Serial Position Effect

- The **unstable** (conventional) model shows only the recency effect: it memorizes only the last few items and catastrophically forgets earlier ones.
- The **stable** model shows only the primacy effect: it retains early items but fails to learn new ones.
- The **hybrid** model shows the full **serial position effect**: it maintains memory for both early and recent items, successfully memorizing *all* items across sequences of varying lengths — matching the pattern observed in human working memory.

### Adaptive Capacity–Performance Tradeoff

As the number of items in a sequence grows, the hybrid model *dynamically reallocates* memory resources: it slightly reduces accuracy on individual items to accommodate more items above chance. This automatic capacity-performance tradeoff requires no external control and is robust even when the total number of items is unknown at training time.

### Hebb Repetition Effect and Robustness to Data Poisoning

Repeated training on the same sequence progressively improves memory in the hybrid model — particularly for middle-sequence items that initially suffer the lowest performance — mirroring the Hebb repetition effect in humans. Crucially, this frequency-dependent consolidation makes the hybrid network **robust to data poisoning**: after nine correct training trials followed by one trial with shuffled labels, the hybrid model retained memory of all items, while the conventional model lost everything.

### Frequency-Dependent Memory Allocation

When items in a sequence are presented at different frequencies, the hybrid model selectively strengthens memory for frequently presented items while allowing infrequent items to fade. This allows users to deliberately shape what the network prioritizes, simply by controlling training frequency — a feature absent in conventional DNNs.

## Why It Works

Stable synapses act as anchors for early memories (primacy), while unstable synapses continuously update to encode recent information (recency). Together, their random mixture across the network produces a balanced memory profile that neither extreme achieves alone. This mirrors findings from the caudate nucleus in the basal ganglia, where stable encoding in the caudate tail and flexible encoding in the caudate head coexist — with the caudate body containing both, just like our hybrid network.

## Advantages over Prior Methods

| Property | EWC / SI | Progressive Nets | Experience Replay | **Our Model** |
|---|---|---|---|---|
| No extra parameters per task | ✗ | ✗ | ✓ | **✓** |
| No stored data buffer | ✓ | ✓ | ✗ | **✓** |
| No per-step importance tracking | ✗ | ✓ | ✓ | **✓** |
| Fixed memory footprint | ✗ | ✗ | ✗ | **✓** |
| Handles unknown sequence length | ✗ | ✗ | ✗ | **✓** |

Our model stores only the initial weights and one flexibility value per parameter — constant memory overhead regardless of task count.

## Implications

This work shows that a *structural property* of synapses — the distribution of their plasticity — is sufficient to produce brain-like continual learning in DNNs, with no algorithmic tricks, extra phases, or stored data. The result suggests that the brain's solution to the stability-plasticity dilemma may be fundamentally architectural: a random mixture of stable and flexible synaptic connections, spontaneously achievable during development, is all that is needed to balance old and new memories adaptively.

## Paper

**Neuromimetic metaplasticity for adaptive continual learning without catastrophic forgetting**  
Suhee Cho, Hyeonsu Lee, Seungdae Baek & Se-Bum Paik  
*Neural Networks* 190 (2025) 107762 — [https://doi.org/10.1016/j.neunet.2025.107762](https://doi.org/10.1016/j.neunet.2025.107762)
