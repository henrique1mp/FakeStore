---
sidebar_position: 2
---

# Get a single 

This reference shows how to get a single cart from the database.

### [GET] - Gets a single cart

Schema

```js
// Endpoint
    https://fakestoreapi.com/products/{id}

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
https://fakestoreapi.com/products/1
```

Responses
 
- Code 200 - Request Succeeded

```js
result: [
    {
        "id": 1,
        "userId": 1,
        "date": "2020-03-02T00:00:00.000Z",
        "products": [
            {
                "productId": 1,
                "quantity": 4
            },
            {
                "productId": 2,
                "quantity": 1
            },
            {
                "productId": 3,
                "quantity": 6
            }
        ],
        "__v": 0
    }
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found