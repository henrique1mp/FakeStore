--- 
sidebar_position: 8
---

# Add new product

This reference shows how to use APIs to add new product to a database.

### [POST] - Adds new product 

Schema

```js
// Endpoint
    https://fakestoreapi.com/products

// Body Parameters
    "title": str(),
    "price": float(),
    "description": str(),
    "image": str(),
    "category": str()

// Response
{
    result: array()
}
```

<p class = "p_frase">If you send an object like the code above, it will return you an object with a new id. Remember that nothing in real will insert into the database, so if you want to access the new id you will get a 404 error.</p>

<p class = "p_example">Example</p>

Request URL

```js
https://fakestoreapi.com/products
```

Body Parameters

```js
{
    "title": "test product",
    "price": "13.5",
    "description": "lorem ipsum set",
    "image": "https://i.pravatar.cc",
    "category": "electronic"
}
```

Responses

- Code 200 - Request Succeeded

```js
result: [
     {    
        "id": 21,
        "title": "test product",
        "price": "13.5",
        "description": "lorem ipsum set",
        "image": "https://i.pravatar.cc",
        "category": "electronic"
    }
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found
