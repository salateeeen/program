# PRIMARY VS SECONDARY KEY

## Primary Key (Clustered)

The heap is organized based on the primary key. Therefore, when writing, it can take more time to reorganize and shift the rows inside the pages to keep them ordered by the key.

This is also called an **IOT (Index-Organized Table)**.

DBMSs are smart enough to leave some space between the rows to avoid shifting entire pages when inserting new values. For example, if we have `id = 1` and then insert `id = 8`, it doesn't necessarily put the new row in the same page.

In an IOT, range queries work efficiently because all values close to each other are stored in nearby pages.

## Secondary Key

A secondary key is like a normal index that is stored separately on the disk and mapped to the rows in the heap pages.

The entry of each index is mapped to the primary key in some DBs (e.g., **MySQL**). In other databases (e.g., **PostgreSQL**), when there is no primary key, the index entry can be mapped to the `row_id`.
