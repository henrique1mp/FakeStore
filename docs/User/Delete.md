---
sidebar_position: 7
---

# Delete

This reference shows that this API will not delete the user from the database, but shows that if you successfully send data, it will return you the fake deleted user.

### [DELETE] - The DELETE method removes a specific resource

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
https://fakestoreapi.com/users/9
```

Responses

- Code 200 - Request Succeeded

```js
result: [
    {
    "address": {
        "geolocation": {
            "lat": "40.12456",
            "long": "20.5419"
        },
        "city": "miami",
        "street": "avondale ave",
        "number": 345,
        "zipcode": "96378-0245"
    },
    "id": 9,
    "email": "kate@gmail.com",
    "username": "kate_h",
    "password": "kfejk@*_",
    "name": {
        "firstname": "kate",
        "lastname": "hale"
    },
    "phone": "1-678-456-1934",
    "__v": 0
    }
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found