import os

project = "typescript-features"

features = {
    "node": "node.ts",
}

base = os.path.join(project)

for folder, filename in features.items():

    src_path = os.path.join(base, folder, "src")
    dist_path = os.path.join(base, folder, "dist")

    os.makedirs(src_path, exist_ok=True)
    os.makedirs(dist_path, exist_ok=True)

    ts_file = os.path.join(src_path, filename)

    if not os.path.exists(ts_file):
        with open(ts_file, "w", encoding="utf-8") as f:
            f.write(
                f"""/**
 * Feature: {folder}
 *
 * Write your TypeScript examples here
 */

console.log("{folder}");
"""
            )

    print(f"Created: {src_path}/{filename}")


print("\nProject structure created successfully.")
