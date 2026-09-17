# MyISAM

## What Is MyISAM?

**MyISAM** stands for **Indexed Sequential Access Method**.

## Main Characteristics of MyISAM

1. **B-Tree Indexes**: Indexes point directly to the rows.

2. **No Transactions**: MyISAM does not support transactions.

3. **Open Source**: MyISAM is open source and owned by Oracle.

4. **Fast Inserts**: Inserts are generally fast.

5. **Fragmentation**: Updates and deletes can cause fragmentation.

6. **Crash Problems**: A database crash can corrupt tables, which may require manual repair.

7. **Table-Level Locking**: MyISAM uses table-level locking.

## Database Support

MyISAM is supported by:

* **MySQL**
* **MariaDB**
* **Percona** (MySQL forks)

## History

MyISAM **used to be the default storage engine for MySQL**.
