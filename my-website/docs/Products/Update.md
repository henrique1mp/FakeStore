--- 
sidebar_position: 9 
---

# Update a product

This reference shows how to use APIs to update information of a product from the database.

### [PUT] - Updates information of a product

Schema

```js
// Endpoint
    https://fakestoreapi.com/products/{id}  

// Query Parameters
    id: int()

// Body Parameters
   "title": str(), 
   "price": float(),
   "image": str(),
   "description": array(),
   "category": str()

// Response
{
    result: array()
}
```

It will return you an object with sent id. Remember that nothing in real will update in the database.

<p class = "p_example">Example</p>


Request URL

```js
https://fakestoreapi.com/products/7
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
    "id": 7,
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