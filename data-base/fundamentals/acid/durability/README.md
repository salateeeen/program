# DURABILITY

## What is Durability?

**Durability:** If the client receives an acknowledgment from the DBMS for a write, the DBMS guarantees that the changes will not be lost and must be persisted in **non volatile storage**.

## Durability Techniques

* **Asynchronous Snapshot:** Write everything to memory and then flush the entire set of changes to disk at once.

* **WAL (Write Ahead Log):** Write all changes as a log before applying the actual changes to the database files. The log is flushed to persistent storage first, and then the actual changes can be written to disk. Once the work is completed, the corresponding log records can be marked as completed.

### Why Do We Need WAL?

Because applying the actual changes to the database can be more expensive.

For example, if we need to delete a row from an **index organized table (IOT)**, we may need to:

  * Delete the row from the table and indexes.
  * Update the related states and metadata.
  * Modify or reorganize pages on disk.

Instead of immediately performing all these expensive operations, the DBMS can first record the required changes in the WAL. This makes recovery possible if the system crashes before all changes are applied.

## Durability and OS Cache

When we request the OS to write data to disk, the data may first be written to the **OS page cache** rather than immediately reaching the physical storage.

This improves efficiency and performance because the OS can batch multiple writes together.

However, if the machine crashes before the data is actually persisted to the storage device, data that was acknowledged as committed could potentially be lost.

**`fsync()`** forces the OS to flush the relevant buffered data to the storage device, helping ensure that the data is persisted before the DBMS considers the operation durable.
