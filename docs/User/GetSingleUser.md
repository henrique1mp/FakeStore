---
sidebar_position: 2
---

# Get a single

This reference shows how to use APIs to get a single user from the database.

### [GET] - Gets a single user 

Schema

```js
// Endpoint
    https://fakestoreapi.com/users/{id}

// Query Parameters
    id: int()
    
// Response
{
    result: array()
}        
```

<p class = "p_example">Example</p>

Request URL

```js
https://fakestoreapi.com/users/1
```

Responses 

- Code 200 - Request Succeeded
```js
result: [
    {
    "address": {
        "geolocation": {
            "lat": "-37.3159",
            "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
        "firstname": "john",
        "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
    }
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found