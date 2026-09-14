---
day: 1
title: Understanding the SO-101
summary: Starting with the physical machine before asking it to move.
draft: false
---

## Why this project

I am starting a long-term project to learn robotics from first principles and document the process in public. I already know machine learning; now I want to understand how software connects to a real robot.

The machine at the center of this project is a SO-101 robot arm. The goal is not to present a finished system, but to make each small step clear enough to reproduce and question.

## Today’s focus

Before writing control code, I want to identify what is physically there:

- the links that make up the arm;
- the joints and their axes of rotation;
- the six degrees of freedom;
- the gripper, or end-effector;
- the difference between joint space and Cartesian space.

The first question is simple: how do the angles of the joints determine the position of the gripper in space?

## What comes next

Next I will map the coordinate frames around the arm and implement the rotations needed to describe them. The first code experiments will stay small and explicit, with visual checks before adding a robotics library.

This is the beginning of the log. Future entries will include diagrams, images, videos and links to the Python experiments as they become available.
