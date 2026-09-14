# ACID

## Transaction

First, let us start by explaining the meaning of a **transaction**.

> **Transaction:** A collection of operations that represents one unit of work.

### ACID Properties

These four letters indicate:

* **Atomicity:** From the word *atom*, meaning it cannot be divided. The entire transaction is completed successfully, or nothing is committed at all.

* **Consistency:** The data must remain valid and consistent before and after the transaction.

* **Isolation:** If you start a transaction, its operations should be isolated from other transactions until the transaction ends.

* **Durability:** If the client receives an acknowledgment from the DBMS for a write, the server guarantees that the changes will not be lost.
