---
sidebar_position: 7
---

# Add a new product

This reference shows how to use APIs to add new products to the cart. 

### [POST] - Adds new products

Schema

```js
// Endpoint
    https://fakestoreapi.com/carts

// Body Parameters
    "userId": int(), // Optional
    "date": str(), // Optional, but if used: -> (YYYY-MM-DD) - Required Format
    "products": array() // Optional

// Response
{
    result: array()
}
```            

If you send an object like the code above, it will return you an object with a new id. remember that nothing in real will insert into the database. so if you want to access the new id you will get a 404 error.

<p class = "p_example">Example</p>

Request URL

```js
https://fakestoreapi.com/carts
```

Body Parameters
```js
{
   "userId":5,
   "date":"2020-02-03",
   "products":[{"productId":5,"quantity":1},{"productId":1,"quantity":5}]
}
```

Responses

- Code 200 - Request Succeeded

```js
result: [ 
{
    "id": 11,
    "userId": 5,
    "date": "2020-02-03",
    "products": [
        {
            "productId": 5,
            "quantity": 1
        },
        {
            "productId": 1,
            "quantity": 5
            }
        ]
    }
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found