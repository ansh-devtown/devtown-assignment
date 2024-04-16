# Devtown-assignment

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USER`

`DB_PASS`

`DB_HOST`

`DB_NAME`

`PORT`

`NODE_ENV`


## Installation

Install nodemon 

```bash
  npm install -g nodemon
  npm install
```

To Run

```bash
  npm run dev
```

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