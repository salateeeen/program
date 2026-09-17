# CONCURRENCY

## why the concerrency happen?
since we have cloude server databases otlp and many users can request the database and create many transactions then this can lead to modify or read the same row from many transaction then maybe we can get race condition

# what is the race condition
many threads or processes update the same value in the same time and last one finsh executed is win that lead to data inconsistency