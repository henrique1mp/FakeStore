---
sidebar_position: 5
---

# Add 

This reference shows how to use APIs to add users in a database.

### [POST] - Adds users in the database

Schema

```js
// Endpoint
    https://fakestoreapi.com/users

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

If you send an object like the code above, it will return you an object with a new id, remember that nothing in real will insert into the database, so if you want to access the new id you will get a 404 error.

<p class = "p_example">Example</p>

Request URL

```js
https://fakestoreapi.com/users
```

Body Parameters
```js
{
    "email":"John@gmail.com",
    "username":"johnd",
    "password": "m38rmF$",
    "name" :{
        "firstname":"John",
        "lastname":"Doe"
        },
    "address":{
        "city":"kilcoole",
        "street":"7835 new road",
        "number":"3",
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
    id:11,
    email:'John@gmail.com',
    username:'johnd',
    password:'m38rmF$',
        name:{
        firstname:'John',
        lastname:'Doe'
        },
    address:{
        city:'kilcoole',
        street:'7835 new road',
        number:3,
        zipcode:'12926-3874',
        geolocation:{
            lat:'-37.3159',
            long:'81.1496'
            }
    },
        phone:'1-570-236-7033'
            }
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found