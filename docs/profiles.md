# Profiles API

Use this API when you need to use the data of the profiles available in Soundbit.

## Table of Contents

- [Create profile](#post-profiles)

## POST: /profiles

Creates a new profile.

### Request Parameters

| Param Name | Param Type | Data Type | Required |
| ---------- | ---------- | --------- | -------- |
| email      | body       | `String`  | **Yes**  |
| password   | body       | `String`  | **Yes**  |

### Request example

```json
{
  "email": "test@soundbit.com",
  "password": "s3cr3t"
}
```

### Response example

<details>
<summary>200 OK</summary>

```json
{
  "message": "New profile created successfully",
  "profile": {
    "id": "string",
    "name": null,
    "username": "string",
    "email": "string"
  }
}
```

</details>
