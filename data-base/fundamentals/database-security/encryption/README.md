# ENCRYPTION

Encryption adds another layer of security by encrypting the actual data stored on the disk.

Even if a physical attack occurs and someone steals the disk, they cannot read the data without the required decryption key.

## Symmetric Encryption

In **symmetric encryption**, we use the same key to encrypt and decrypt data.

This type of encryption is commonly used to provide **confidentiality** for stored data.

![Symmetric](images/symmetric.png)

## Asymmetric Encryption

In **asymmetric encryption**, we have two keys:

* **Public Key**

  ![Public](images/puplic-non-symmetric.png)

* **Private Key**

  ![Private](images/private-non-symmetric.png)

Each key can be used in a cryptographic operation involving the corresponding key.

```text
Encrypt with Public Key A → Decrypt with Private Key A
```

This is used for **confidentiality**.

For authentication and integrity, we use a **digital signature**:

```text
Sign with Private Key A → Verify with Public Key A
```

This is used to verify the **authenticity** and **integrity** of the data.

## Why Can't We Always Encrypt Data in the Database?

1. **Querying:** Many queries require the data to be available in plaintext, especially when performing comparisons or calculations.

2. **Analysis and Indexing:** Data analysis and indexing may require access to the actual data values, which can be difficult when the data is encrypted.
