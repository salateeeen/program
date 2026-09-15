# ATOMICITY

## What is a atomicity?

**Atomicity:** From the word *atom*, meaning it cannot be divided. The entire transaction is completed successfully, or nothing is committed at all.

If the server goes down before the commit is successfully completed, all operations done before the server goes down should be rolled back.

**LACK OF ATOMICITY LEADS TO LACK OF CONSISTENCY.**
