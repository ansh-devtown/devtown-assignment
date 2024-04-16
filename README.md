# Devtown-assignment

#### Add User

```http
  Post /v1/users
```

| Body key | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required** User email |

#### Delete user

```http
  Delete /v1/users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required** user id|

#### Add Log

```http
  Post /v1/logs
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `level`      | `number` | **Required** |
| `message`      | `string` | **Required**|
| `userEmail`      | `string` | **Required**|

#### Get All Logs

```http
  Get /v1/logs
```

#### Get All Logs By level

```http
  Get /v1/logs/:levelId
```

| Body key | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `levelId` | `number` | **Required** |