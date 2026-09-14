import os
import random
import networkx as nx
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

# ================================================
#   ROUTER NETWORK SHORTEST PATH FINDER
#   Internet Protocols Course — Assignment 1
# ================================================

OUTPUT_DIR   = "the output"
NUM_ROUTERS  = 7
EXTRA_LINKS  = 5
RANDOM_SEED  = 42

COLOR_ROUTER      = "#A8DADC"
COLOR_SOURCE      = "#E63946"
COLOR_ACTIVE_LINK = "#457B9D"
COLOR_DEAD_LINK   = "#DDDDDD"


# ================================================
# BUILD TOPOLOGY
# ================================================
def build_topology(num_routers, extra_links, seed):
    """
    Construct a random connected graph representing a router network.
    A chain guarantees full connectivity; extra_links add redundancy.
    """
    random.seed(seed)
    topology = nx.Graph()

    topology.add_nodes_from(range(num_routers))

    for i in range(num_routers - 1):
        topology.add_edge(i, i + 1, weight=random.randint(1, 10))

    added = 0
    while added < extra_links:
        a = random.randint(0, num_routers - 1)
        b = random.randint(0, num_routers - 1)
        if a != b and not topology.has_edge(a, b):
            topology.add_edge(a, b, weight=random.randint(1, 10))
            added += 1

    return topology


# ================================================
# COMPUTE SHORTEST PATHS
# ================================================
def compute_all_shortest_paths(topology):
    """
    Run Dijkstra from every router and collect the resulting
    shortest path tree (SPT) edges, distances, and full paths.
    """
    spt_data = {}

    for src in topology.nodes():
        dist_map, path_map = nx.single_source_dijkstra(topology, src)

        spt_edges = set()
        for dst, hop_list in path_map.items():
            for k in range(len(hop_list) - 1):
                link = tuple(sorted((hop_list[k], hop_list[k + 1])))
                spt_edges.add(link)

        spt_data[src] = {
            "dist":  dist_map,
            "paths": path_map,
            "tree":  list(spt_edges),
        }

    return spt_data


# ================================================
# DRAW FULL TOPOLOGY MAP
# ================================================
def draw_topology_map(topology, layout, save_dir):
    fig, ax = plt.subplots(figsize=(9, 6))
    ax.set_facecolor("#F8F9FA")
    fig.patch.set_facecolor("#F8F9FA")

    link_weights = nx.get_edge_attributes(topology, "weight")

    nx.draw_networkx_nodes(topology, layout, ax=ax,
                           node_color=COLOR_ROUTER, node_size=850, linewidths=1.5,
                           edgecolors="#457B9D")
    nx.draw_networkx_labels(topology, layout, ax=ax,
                            font_size=11, font_weight="bold", font_color="#1D3557")
    nx.draw_networkx_edges(topology, layout, ax=ax,
                           width=2.0, edge_color="#888888", alpha=0.7)
    nx.draw_networkx_edge_labels(topology, layout, edge_labels=link_weights,
                                 ax=ax, font_size=8, font_color="#333333")

    ax.set_title("Router Network Topology — All Links & Weights",
                 fontsize=14, fontweight="bold", color="#1D3557", pad=14)
    ax.axis("off")
    plt.tight_layout()

    out_path = os.path.join(save_dir, "network_graph.png")
    plt.savefig(out_path, dpi=150, bbox_inches="tight")
    plt.show()
    print(f"  [Saved] {out_path}")


# ================================================
# DRAW SHORTEST PATH TREE FOR ONE SOURCE
# ================================================
def draw_spt(topology, spt_edges, dist_map, src_node, layout, save_dir):
    fig, ax = plt.subplots(figsize=(9, 6))
    ax.set_facecolor("#FDFCFB")
    fig.patch.set_facecolor("#FDFCFB")

    link_weights   = nx.get_edge_attributes(topology, "weight")
    all_edge_set   = {tuple(sorted(e)) for e in topology.edges()}
    spt_edge_set   = {tuple(sorted(e)) for e in spt_edges}
    inactive_links = [e for e in topology.edges()
                      if tuple(sorted(e)) not in spt_edge_set]

    # Inactive links
    nx.draw_networkx_edges(topology, layout, edgelist=inactive_links, ax=ax,
                           width=1.0, edge_color=COLOR_DEAD_LINK, style="dashed")

    # Active SPT links
    nx.draw_networkx_edges(topology, layout, edgelist=spt_edges, ax=ax,
                           width=3.5, edge_color=COLOR_ACTIVE_LINK)

    # All routers
    nx.draw_networkx_nodes(topology, layout, ax=ax,
                           node_color="#D0E8F2", node_size=850,
                           edgecolors="#457B9D", linewidths=1.5)

    # Source router highlighted
    nx.draw_networkx_nodes(topology, layout, nodelist=[src_node], ax=ax,
                           node_color=COLOR_SOURCE, node_size=1050,
                           edgecolors="#C1121F", linewidths=2.0)

    node_labels = {
        r: f"R{r}\n(d={dist_map[r]})" for r in topology.nodes()
    }
    nx.draw_networkx_labels(topology, layout, labels=node_labels, ax=ax,
                            font_size=7.5, font_weight="bold", font_color="#1D3557")

    nx.draw_networkx_edge_labels(topology, layout, edge_labels=link_weights,
                                 ax=ax, font_size=8, font_color="#555555")

    legend_items = [
        mpatches.Patch(color=COLOR_SOURCE,      label=f"Source Router (R{src_node})"),
        mpatches.Patch(color=COLOR_ACTIVE_LINK, label="SPT Active Links"),
        mpatches.Patch(color=COLOR_DEAD_LINK,   label="Unused Links"),
    ]
    ax.legend(handles=legend_items, loc="upper left", fontsize=8, framealpha=0.85)

    ax.set_title(f"Shortest Path Tree — Source: Router {src_node}",
                 fontsize=14, fontweight="bold", color="#1D3557", pad=14)
    ax.axis("off")
    plt.tight_layout()

    out_path = os.path.join(save_dir, f"tree_source_{src_node}.png")
    plt.savefig(out_path, dpi=150, bbox_inches="tight")
    plt.show()
    print(f"  [Saved] {out_path}")


# ================================================
# PRINT ROUTING TABLE TO CONSOLE
# ================================================
def display_routing_tables(topology, spt_data):
    DIVIDER = "=" * 65

    print(f"\n{DIVIDER}")
    print("  LINK TABLE — Router Network")
    print(DIVIDER)
    for u, v, attr in topology.edges(data=True):
        print(f"  R{u}  <-->  R{v}    cost = {attr['weight']}")

    for src in sorted(spt_data):
        print(f"\n{DIVIDER}")
        print(f"  ROUTING TABLE  |  Source: Router {src}")
        print(DIVIDER)
        print(f"  {'Dest':<10} {'Total Cost':<16} {'Route'}")
        print(f"  {'-' * 50}")

        for dst in sorted(spt_data[src]["dist"]):
            cost  = spt_data[src]["dist"][dst]
            hops  = spt_data[src]["paths"][dst]
            route = " -> ".join(f"R{h}" for h in hops)
            print(f"  R{dst:<9} {cost:<16} {route}")

        print(f"\n  Active Tree Links:")
        for link in sorted(spt_data[src]["tree"]):
            print(f"    R{link[0]}  --  R{link[1]}")


# ================================================
# ENTRY POINT
# ================================================
def main():
    DIVIDER = "=" * 65
    print(f"\n{DIVIDER}")
    print("  Router Network Shortest Path Finder")
    print("  Internet Protocols Course — Assignment 1")
    print(DIVIDER)

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"\n  Output directory: '{OUTPUT_DIR}/'")

    print("\n  [1/4] Building network topology...")
    topology = build_topology(NUM_ROUTERS, EXTRA_LINKS, RANDOM_SEED)
    layout   = nx.spring_layout(topology, seed=RANDOM_SEED)

    print("  [2/4] Drawing full topology map...")
    draw_topology_map(topology, layout, OUTPUT_DIR)

    print("  [3/4] Computing shortest paths from every router...")
    spt_data = compute_all_shortest_paths(topology)
    display_routing_tables(topology, spt_data)

    print("\n  [4/4] Generating SPT diagrams...")
    for src in sorted(spt_data):
        print(f"\n  -> Router {src}:")
        draw_spt(
            topology,
            spt_data[src]["tree"],
            spt_data[src]["dist"],
            src,
            layout,
            OUTPUT_DIR,
        )

    print(f"\n{DIVIDER}")
    print(f"  Complete! All figures saved in '{OUTPUT_DIR}/'")
    print(DIVIDER)


if __name__ == "__main__":
    main()