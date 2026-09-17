# INNODB

## What Is InnoDB?

**InnoDB** is a storage engine used by MySQL and MariaDB for storing and managing relational data.

## InnoDB Features

1. **B-Tree**: Uses B-Tree indexes. Secondary indexes point to the **primary key**, while the primary key points to the actual row.

2. **Replaces MyISAM**: Became the main replacement for the MyISAM storage engine.

3. **Default Storage Engine**: The default storage engine for **MySQL** and **MariaDB**.

4. **ACID Transactions**: Supports **ACID-compliant transactions**.

5. **Foreign Keys**: Supports **foreign key constraints**.

6. **Tablespaces**: Supports tablespaces for managing how table data is stored.

7. **Row-Level Locking**: Uses row-level locking, allowing better concurrency between transactions.

8. **Spatial Operations**: Supports spatial data and spatial operations.

9. **Owned by Oracle**: InnoDB is developed and maintained under **Oracle**.
