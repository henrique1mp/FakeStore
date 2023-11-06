---
position: 10
---

# User login

This reference shows how to use APIs for the user to log in/sign in.

### [POST] - User login

Schema

```js
// Endpoint
    https://fakestoreapi.com/auth/login

// Body Parameters
    "username": str(),
    "password": str()

// Response
{
    result: array()    
}
```

You can use any of the users' username and password available in users API to get token. Any other usernames return error.

<p class = "p_example">Example</p>

Request URL

```js
https://fakestoreapi.com/auth/login
```

Body Parameters
```js
{
   "username": "mor_2314",
   "password": "83r5^_"
}
```

Responses

- Code 200 - Request Succeeded

```js
result: [
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXIiOiJtb3JfMjMxNCIsImlhdCI6MTY5ODg0MjMwOX0.gWObKE3MsZo_4j7K4KsYu9a7EPfAOcF3QkkJaRqKN1o"
    }
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found