# CURSOR

## What Is a Cursor?

A **cursor** is a database object used to retrieve query results row by row instead of returning all the rows at once.

## Pros of Using a Cursor

1. **Streaming**: Process data gradually
2. **Paging**: Fetch data in small batches

## Cons of Using a Cursor

1. **Stateful**: The cursor state is maintained on the database server. Therefore, if we have replicas and the query is sent to another server, the cursor state may not be available there, especially in server side.

2. **Long Transactions**: A cursor can keep a transaction open for a long time. Depending on the database and the operations performed, this can hold locks or maintain transaction state and may prevent other transactions from working with the same data.

## Client Side vs Server Side Cursor

### Client-Side

```sql
SELECT name
FROM grade
WHERE age > 17;
```

Here, the DBMS executes the query and returns the result to the backend client, such as **Node.js**, **Java**, etc.

The client receives the result and can process it from its own memory.

### Server-Side

In PostgreSQL, we can create a server-side cursor inside a transaction:

```sql
BEGIN;

DECLARE grade_cursor CURSOR FOR
SELECT name
FROM grade
WHERE age > 17;
```

Then, we can fetch the data gradually:

```sql
FETCH NEXT FROM grade_cursor;
```

```sql
FETCH 10 FROM grade_cursor;
```

```sql
FETCH LAST FROM grade_cursor;
```

When we finish:

```sql
CLOSE grade_cursor;

COMMIT;
```

Here, the cursor is created on the **database server**, and we fetch the results in smaller parts instead of retrieving everything at once.

When the client and server establish the cursor, the query is planned and the cursor is established, while rows are retrieved through the **FETCH** operations.

In a normal query, executing a query can take a long time because we need to read the data and send the results through the TCP connection to the client.

With a server-side cursor, we can fetch the data in smaller batches. However, each fetch requires communication over the network.

## Pros of Server Side Cursors

1. **Less client memory**: Only part of the result is kept by the client.
2. **Less bandwidth at once**: Results are transferred in smaller batches.
3. **Streaming**: Process large result sets gradually.

## Cons of Server Side Cursors

1. **Long transactions**: The transaction may remain open for a long time.
2. **Server side state**: The database needs to maintain the cursor state.
3. **Network round trips**: Multiple `FETCH` operations require multiple requests.

## Pros of Client Side Cursors

1. **Fast fetching**: Data is already available in the client's memory.
2. **No server side cursor state**: The client manages the retrieved data.

## Cons of Client Side Cursors

1. **More memory usage**: Large result sets may consume a lot of client memory.
2. **More bandwidth at once**: A large amount of data may need to be transferred to the client.
