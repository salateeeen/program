# COMPOSITE INDEXES

## Why Do We Need Indexes?

In some cases, we need to query multiple columns frequently. Instead of creating separate indexes for each column, we can create one **composite index**.

A composite index can be used for **searching, sorting, range queries, and covered queries**.

## The Left Hand Side (Leftmost) Concept

```sql
CREATE INDEX idx_grades_name_age
ON grades (name, age);
```

This creates an index ordered by `name` and then by `age`. Because of this, the composite index can be efficiently used starting from its **leftmost column(s)**.

| row_id | name   | age |
| ------ | ------ | --: |
| 2      | ahmad  |  23 |
| 1      | ahmad  |  25 |
| 4      | omar   |  44 |
| 3      | sultan |  22 |

```sql
SELECT name, age
FROM user
WHERE age > 22;
```

Here, if we search only by `age`, as you can see in the index table, the `age` values are ordered depending on the `name`.

Therefore, if we don't include `name` in the filter, the index cannot be efficiently searched by `age` alone.

So here, we need to use a **sequential scan**.

## ESR (Equality, Sort, Range)

In composite indexes, we have a concept called **ESR**.

**ESR** stands for:

* **E — Equality:** Columns used with equality conditions such as `=`.
* **S — Sort:** Columns used for sorting with `ORDER BY`.
* **R — Range:** Columns used with range conditions such as `>`, `<`, `>=`, `<=`, or `BETWEEN`.

The general idea is to put **equality columns first**, then **sort columns**, and finally **range columns**.

```sql
CREATE INDEX idx_grades_class_name_age
ON grades (class, name, age);
```

If our query is:

```sql
SELECT *
FROM grades
WHERE class = 'db-fundamentals'
  AND age > 20
ORDER BY name;
```

The index follows the ESR idea:

```text
class → name → age
  E       S      R
```

The **equality** condition narrows down the search first, the **sort** column keeps the required order, and the **range** condition comes after them.

### Why Does the Order Matter?

The order of columns in a composite index is important because the database can efficiently use the index from the **leftmost columns**.

### Composite Index vs Multiple Indexes

```sql
CREATE INDEX idx_test_A_B
ON test (A, B);
```

```sql
SELECT *
FROM test
WHERE A = a AND B = b;
```

A composite index on `(A, B)` can be more efficient for this query than creating two separate indexes on `A` and `B`.

With two separate indexes:

```sql
CREATE INDEX idx_test_A
ON test (A);
```

```sql
CREATE INDEX idx_test_B
ON test (B);
```

```sql
SELECT *
FROM test
WHERE A = a AND B = b;
```

The SQL planner may use both indexes with a **Bitmap Index Scan**, combine the resulting bitmaps, and then perform a **Bitmap Heap Scan** to fetch the required table pages and apply any remaining filters.

## Summary

> **Composite indexes:** The column order matters. Start from the **leftmost columns**, and use **ESR** to choose a suitable order for equality, sorting, and range conditions.
