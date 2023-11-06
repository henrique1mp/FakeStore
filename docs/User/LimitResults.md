---
sidebar_position: 3
---

# Limit results

This reference shows how to limit results of user request in a database.

### [GET] - Gets limited results

Schema

```js
// Endpoint
    https://fakestoreapi.com/users

// Parameters
    limit: int() // Optional

// Response
{
    result: array()    
}
```
If not entered any value in the parameter limit, it will get you a list with every user in the database (10).

<p class = "p_example">Example</p>

Request URL

```js
https://fakestoreapi.com/users?limit=5
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
    },
    {
        "address": {
            "geolocation": {
                "lat": "-37.3159",
                "long": "81.1496"
            },
            "city": "kilcoole",
            "street": "Lovers Ln",
            "number": 7267,
            "zipcode": "12926-3874"
        },
        "id": 2,
        "email": "morrison@gmail.com",
        "username": "mor_2314",
        "password": "83r5^_",
        "name": {
            "firstname": "david",
            "lastname": "morrison"
        },
        "phone": "1-570-236-7033",
        "__v": 0
    },
    {
        "address": {
            "geolocation": {
                "lat": "40.3467",
                "long": "-30.1310"
            },
            "city": "Cullman",
            "street": "Frances Ct",
            "number": 86,
            "zipcode": "29567-1452"
        },
        "id": 3,
        "email": "kevin@gmail.com",
        "username": "kevinryan",
        "password": "kev02937@",
        "name": {
            "firstname": "kevin",
            "lastname": "ryan"
        },
        "phone": "1-567-094-1345",
        "__v": 0
    },
    {
        "address": {
            "geolocation": {
                "lat": "50.3467",
                "long": "-20.1310"
            },
            "city": "San Antonio",
            "street": "Hunters Creek Dr",
            "number": 6454,
            "zipcode": "98234-1734"
        },
        "id": 4,
        "email": "don@gmail.com",
        "username": "donero",
        "password": "ewedon",
        "name": {
            "firstname": "don",
            "lastname": "romer"
        },
        "phone": "1-765-789-6734",
        "__v": 0
    },
    {
        "address": {
            "geolocation": {
                "lat": "40.3467",
                "long": "-40.1310"
            },
            "city": "san Antonio",
            "street": "adams St",
            "number": 245,
            "zipcode": "80796-1234"
        },
        "id": 5,
        "email": "derek@gmail.com",
        "username": "derek",
        "password": "jklg*_56",
        "name": {
            "firstname": "derek",
            "lastname": "powell"
        },
        "phone": "1-956-001-1945",
        "__v": 0
    }
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found