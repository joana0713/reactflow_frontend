# Frontend – DAG Workflow Builder (Client)

## Overview

This frontend is a visual workflow builder built with React and ReactFlow.

It allows users to:

- Create nodes (Input, LLM, Output, Text)
- Connect nodes visually
- Construct arbitrary directed graphs
- Submit the graph structure to the backend for validation

The purpose is not only UI rendering, but enabling proper Directed Acyclic Graph (DAG) testing.

---

## Tech Stack

- React
- ReactFlow
- Zustand (state management)

---

## Architecture

Graph state is stored in Zustand:

- `nodes[]`
- `edges[]`

When the user clicks **Submit**, the frontend sends:

```json
{
  "nodes": [...],
  "edges": [...]
}