# TRANSACTION

## What is a Transaction?

**Transaction:** A collection of operations that represents one unit of work.

> Example: Account deposit (`SELECT`, `UPDATE`, `UPDATE`)

![Transaction Example](./images/transaction.png)

## How Can a Rollback Be Done?

Rollback can be done manually by the user, or automatically by the server if any operation fails.

If any operation fails, everything is rolled back.

We always have an implicit transaction in DBMSs. For example, in an **`INSERT`**, we need to insert all fields.

## When Does the Commit or Write to Disk Happen?

* Anything before `COMMIT` happens inside memory (not at all).

  * Optimistic DBs, such as PostgreSQL, pass all changes to disk while the transaction is still running.

  * Pessimistic DBs, such as SQL Server, wait until the entire transaction ends and then pass the changes to disk.

Rollback from memory before the changes are written to disk is easier than rolling them back from disk.

## Where Do We Really Want to Use Transactions?

The concept of a transaction is usually used to **change** and **modify** data.

However, it can also be used for **reading** data, such as when we need to fetch sensitive data and then create a report or perform analytics on this data, and we want to get a consistent snapshot based on the state of the data at the time of the transaction.
