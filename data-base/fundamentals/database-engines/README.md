# ENGINES

## What Are Engines?

An **engine** is a software library inside the DBMS that is responsible for the low level storage and retrieval of data from the disk.

It can be simple, such as a **key-value store**, or more complex to support **ACID** and **transactions**.

DBMSs use storage engines and build higher level features on top of them, such as **replication** and many other database features.

Some databases give us the flexibility to switch between different storage engines, such as **MySQL**.


## Why Do We Need Different Storage Engines?

Different storage engines are optimized for different workloads and requirements.

Some engines focus on **transactions**, while others may focus on **performance**, **simplicity**, or specific storage models.

## What Does a Storage Engine Handle?

A storage engine can be responsible for:

* **Data Storage**
* **Indexes**
* **Transactions**
* **Concurrency and Locks**
* **Recovery**

## DBMS and Storage Engine

```text
Application → DBMS → Storage Engine → Disk
```

The **DBMS** provides higher level database features, while the **storage engine** handles low level data storage and retrieval.
