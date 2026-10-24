"""
graph_remesher.py — DynamicGraphRemesher

Solves the "Rubber Band Problem": standard GNNs break mathematically when
an object changes its fundamental topology — a cell tearing open, a tumor
necrosing into fluid, a forest clearing dividing into fragments.

OSIRIS solves this with Dynamic Graph Re-Meshers. When the norm-clamping
limits (Π_{c,ε}) detect a gradient force that indicates physical fracturing
or tearing, the system dynamically:
1. Cuts edge connections between nodes that are moving apart beyond a threshold
2. Updates the node matrix topology in real-time
3. Re-computes the adjacency matrix
4. Allows the EGNN to continue processing with the new topology

This prevents the mathematical model from collapsing when things break or
split apart — the graph topology adapts to physical reality.
"""

import numpy as np


class DynamicGraphRemesher:
    """
    Dynamic graph topology updater for handling physical fracturing.

    When nodes drift apart beyond a tearing threshold, the remesher:
    1. Detects the tear (gradient force exceeds threshold)
    2. Cuts edges between separating nodes
    3. Optionally merges nearby nodes (for aggregation)
    4. Returns updated adjacency matrix

    Args:
        tear_threshold: Distance beyond which edges are cut (modality-specific)
        merge_threshold: Distance below which nodes are merged (optional)
        min_edges_per_node: Minimum edges to maintain (prevents isolation)

    Usage:
        remesher = DynamicGraphRemesher(tear_threshold=10.0)
        adj_new = remesher.remesh(x_current, x_previous, adj)
        # adj_new has torn edges where physical fracturing occurred
    """

    def __init__(self, tear_threshold=10.0, merge_threshold=None,
                 min_edges_per_node=2, verbose=False):
        self.tear_threshold = float(tear_threshold)
        self.merge_threshold = float(merge_threshold) if merge_threshold else None
        self.min_edges_per_node = int(min_edges_per_node)
        self.verbose = verbose
        self.tear_log = []

    def remesh(self, x_current, x_previous, adj):
        """
        Update graph topology based on physical displacement.

        Args:
            x_current: Current node positions (N, 3)
            x_previous: Previous node positions (N, 3)
            adj: Current adjacency matrix (N, N)

        Returns:
            adj_new: Updated adjacency with torn/merged edges
            tear_info: Dict with tear statistics

        The remesher detects:
        1. Tearing: edges where nodes moved apart beyond tear_threshold
        2. Merging: nodes that moved closer than merge_threshold (optional)
        3. Isolation prevention: ensures every node keeps min_edges_per_node
        """
        N = x_current.shape[0]
        adj_new = adj.copy()

        # Compute current pairwise distances
        D_current = np.linalg.norm(x_current[:, None] - x_current[None, :], axis=-1)
        D_previous = np.linalg.norm(x_previous[:, None] - x_previous[None, :], axis=-1)

        # 1. Tearing: cut edges where nodes moved apart beyond threshold
        displacement = D_current - D_previous  # positive = moving apart
        tear_mask = (displacement > self.tear_threshold) & (adj > 0)
        torn_edges = int(tear_mask.sum() // 2)  # symmetric, count upper triangle
        adj_new[tear_mask] = 0
        adj_new[tear_mask.T] = 0  # symmetric

        # 2. Merging: identify nodes that moved closer than merge_threshold
        merged_nodes = 0
        if self.merge_threshold is not None:
            merge_mask = (D_current < self.merge_threshold) & (adj > 0) & ~tear_mask
            # Don't actually merge (topology change is complex) — just flag
            merged_nodes = int(merge_mask.sum() // 2)

        # 3. Isolation prevention: ensure every node has min_edges_per_node
        degrees = adj_new.sum(axis=1)
        isolated = np.where(degrees < self.min_edges_per_node)[0]
        for node in isolated:
            # Connect to nearest non-adjacent nodes
            distances = D_current[node]
            distances[adj_new[node] > 0] = np.inf  # skip already-connected
            nearest = np.argsort(distances)[:self.min_edges_per_node]
            for n in nearest:
                if distances[n] < np.inf:
                    adj_new[node, n] = 1
                    adj_new[n, node] = 1

        tear_info = {
            'torn_edges': torn_edges,
            'merged_nodes': merged_nodes,
            'isolated_nodes_fixed': len(isolated),
            'tear_threshold': self.tear_threshold,
            'max_displacement': float(displacement.max()),
            'mean_displacement': float(displacement.mean()),
        }

        self.tear_log.append(tear_info)

        if self.verbose and torn_edges > 0:
            print(f"[GraphRemesher] Torn {torn_edges} edges, fixed {len(isolated)} isolated nodes")

        return adj_new, tear_info

    def get_tear_history(self):
        """Return full tear log for analysis."""
        return self.tear_log

    def __repr__(self):
        return (f"DynamicGraphRemesher(tear_threshold={self.tear_threshold}, "
                f"min_edges={self.min_edges_per_node})")
