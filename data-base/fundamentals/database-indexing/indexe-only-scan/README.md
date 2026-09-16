# INDEX ONLY SCAN

## Index Scan

In an **index scan**, we need to fetch the index first. Then, for the matching rows, we use the `row_id` to go to the heap and fetch the other information.

We have an index only on `name`:

```sql
SELECT name, age
FROM user
WHERE name = sultan;
```

So, we need to go to the heap to fetch the entire row, and then select only the `name`.

## Index-Only Scan

All the columns we select exist in the index, so we don't need to go to the heap.

We have an index on `name` and `age`:

```sql
SELECT name, age
FROM user
WHERE name = sultan;
```

All the selected columns exist in the index.
