---
sidebar_position: 8
---

# Update a cart


This reference show how to use APIs to update a cart from the database.

### [PUT] - Updates a cart

Schema

```js
// Endpoint
    https://fakestoreapi.com/carts/{id}

// Query Parameters
    id: int()
    
// Body Parameters
    "userId": int(), // Optional
    "date": str(), // Optional, but if used: -> (YYYY-MM-DD) - Required Format
    "products": array() // Optional
    
// Response
{    
    result: array()        
}
```

It will return you an object with sent id. Remember that nothing in real will update in the database.


<p class = "p_example">Example</p>

Request URL

```js
https://fakestoreapi.com/carts/7
```

Body Parameters
```js
{
  "userId":3,
  "date":"2019-12-10",
  "products":[{"productId":1,"quantity":3}]
}
```

Responses

- Code 200 - Request Succeeded

```js
result: [
    {
        "id": 7,
        "userId": 3,
        "date": "2019-12-10",
        "products": [
            {
                "productId": 1,
                "quantity": 3
            }
        ]
    }
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found