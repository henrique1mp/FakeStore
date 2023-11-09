---
sidebar_position: 6
---

# Get all categories

This reference shows how to use APIs to get all categories of products in a database.

### [GET] - Gets all categories 

Schema
```js
// Endpoint
    https://fakestoreapi.com/products/categories

// Doesn't have parameters
   

// Response
{
    result: array()
}
```

<p class = "p_example">Example</p>

Request URL

```js
https://fakestoreapi.com/products/categories
```

Responses

- Code 200 - Request Succeeded
```js
result: [   
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found