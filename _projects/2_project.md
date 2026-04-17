---
layout: post
title: Capturing Rapid Learning in an Extended Successor Representation Theory of the Cognitive Map
description: A computational model showing how the hippocampus supports rapid, one-shot spatial learning via BTSP and perceived salience-weighted successor representations.
importance: 1
tags: computational-neuroscience
related_publications: false
rootlink: /projects/
---

## Overview

How does the brain adapt so quickly to new, emotionally significant experiences—like avoiding a place where you once received a shock, or finding a shortcut to a newly discovered reward? Classical reinforcement learning models struggle to capture this kind of rapid, one-shot adaptation. In this work, we propose an extended successor representation (SR) theory that addresses this challenge by incorporating two key biological mechanisms: **behavioral time-scale synaptic plasticity (BTSP)** and **perceived salience (PS) weighting**.

## Motivation

The SR framework is a powerful account of how animals learn to predict future states and flexibly generalize value across goals. However, standard SR models have difficulty explaining how animals:

1. Learn from a single exposure to a significant event (e.g., one-trial shock avoidance),
2. Rapidly redirect behavior after a reward is relocated, and
3. Make need-dependent choices that reflect the current motivational state.

These are hallmarks of hippocampal-dependent learning in rodents and humans. We aimed to explain these phenomena within a biologically grounded SR framework.

## The Model

We propose a three-layer hippocampal-prefrontal circuit:

- **CA3** encodes the spatial structure of an environment via a symmetric place cell connectivity matrix, learned through **symmetric BTSP** during online exploration. CA3 supports offline replay, propagating information about significant events (rewarded locations, aversive places) to connected but directly unexplored states.
- **CA1** computes a **PS-weighted SR**—a modified successor representation where transitions are biased by the perceived salience of each visited state. Salience reflects the motivational significance of states (e.g., proximity to reward or shock). CA1 weights are updated by **asymmetric BTSP** during both online exploration and offline replay.
- **Successor Features (SF) layer** receives PS-weighted SR encodings from CA1 and learns to predict future feature vectors via a downstream prediction network, enabling goal-flexible behavior without relearning from scratch when goals change.

## Key Results

### Need-Dependent Choice
The model reproduces need-dependent choice behavior: when an animal's motivational state changes (e.g., from hungry to thirsty), the PS-weighted SR automatically shifts attention toward goal-relevant states, allowing behavior to adapt without re-exploring the environment.

### Rapid Reward Relocation
After a reward is moved to a new location, offline replay from CA3 allows CA1's PS-weighted SR to rapidly update—even for paths not directly experienced after relocation. The model matches the speed of behavioral adaptation observed in rodent experiments, requiring only brief periods of rest/sleep.

### One-Trial Shock Avoidance
A single aversive experience is sufficient to reshape the PS-weighted SR so that the shocked location and adjacent states are avoided. This emerges from the high salience assigned to aversive events, which propagates through replay to neighboring states—capturing the well-documented rapid avoidance learning in hippocampal-dependent paradigms.

## Why BTSP?

BTSP is a recently discovered plasticity rule in CA1 and CA3 pyramidal neurons in which large, behaviorally relevant calcium plateau potentials can drive rapid, one-trial synaptic changes. Unlike traditional Hebbian STDP, BTSP can update synapses based on activity that occurred seconds earlier—well-suited to associating a current location with the delayed consequences of past actions. Our model uses:

- **Symmetric BTSP** in CA3 to form a bidirectional map of the environment.
- **Asymmetric BTSP** in CA1 to compute forward-looking successor representations, weighted by salience.

## Implications

This work bridges computational cognitive neuroscience and reinforcement learning by demonstrating that a biologically plausible plasticity rule (BTSP) combined with motivational salience can explain a range of rapid learning phenomena. The model makes testable predictions about CA3/CA1 dynamics during rest, the role of replay in updating value representations, and the relationship between perceived salience and hippocampal encoding.

## Paper

**Capturing rapid learning in an extended successor representation theory of the cognitive map**  
Suhee Cho & James L. McClelland  
*bioRxiv* (2026) — [https://doi.org/10.64898/2025.12.25.696522](https://doi.org/10.64898/2025.12.25.696522)
