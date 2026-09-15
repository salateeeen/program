# ISOLATION

## What is an isolation?

**Isolation:** If you start a transaction, its operations should be isolated from other transactions until the transaction ends.

## Why we thinks in isolation?
We have many TCP connections to the db not only one user(as sqlLite), so each user can start a transaction at any time, then the concurrency can happen, multiple transactions(users) need to read or update the same data, this can rise to several phenomenas.

* # The phenomenas happens because concurrency:
    * **Dirty read:** after start your transaction another transaction changes the data then even before this transaction commit you read the same data
    * **Non repeatable read:** after start your transaction another transaction changes the data and commits this changes and then after that you read the same data
    * **Dirty read:** after start your transaction another transaction insert a new rows and commits this inserts then you read the entire table
    * **Dirty read:** after start your transaction the other transaction changes the data then even before this transaction commit you read the same data
  


