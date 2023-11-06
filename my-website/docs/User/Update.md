---
sidebar_position: 6
---

# Update

This reference shows how to use APIs to update user's informations in a database.

### [PUT] - Updates user's information

Schema

```js
// Endpoint
    https://fakestoreapi.com/users/{id}

// Query Parameters
    id: int()

// Body Parameters 
    "email": str(),
    "username": str(),
    "password": str(),
    "name":{
        "firstname": str(),
        "lastname": str()
        },
    "address":{
        "city": str(),
        "street": str(),
        "number": int(),
        "zipcode": str(),
        "geolocation":{
            "lat": str(),
            "long": str()
            }
    },
        "phone": str()

// Response
{
    result: array()
}
```

It will return you an object with sent id. Remember that nothing in real will update in the database.

<p class = "p_example">Example</p>

Request URL
```js
https://fakestoreapi.com/users/7
```

Body Parameters
```js
{
    "email":"John@gmail.com",
    "username":"johnd",
    "password":"m38rmF$",
    "name":{
        "firstname":"John",
        "lastname":"Doe"
        },
    "address":{
        "city":"kilcoole",
        "street":"7835 new road",
        "number":3,
        "zipcode":"12926-3874",
        "geolocation":{
            "lat":"-37.3159",
            "long":"81.1496"
                }
        },
    "phone":"1-570-236-7033"
}
```

Responses 

- Code 200 - Request Succeeded

```js
result: [
    {
    "email": "John@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "address": {
        "city": "kilcoole",
        "street": "7835 new road",
        "number": 3,
        "zipcode": "12926-3874",
        "geolocation": {
            "lat": "-37.3159",
            "long": "81.1496"
        }
    },
    "phone": "1-570-236-7033"
  }
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found