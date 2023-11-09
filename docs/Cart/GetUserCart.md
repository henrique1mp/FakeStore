---
sidebar_position: 6
---

# Get user cart

This reference shows how to use APIs to get the user's cart from the database.

### [GET] - Gets user's cart

Schema

```js
// Endpoint
    https://fakestoreapi.com/carts/user/{userId}
    
// Query Parameters
    userId: int()

// Response
{
    result: array()
}
```

You can also use date range as query string to get your ideal results.

<p class = "p_example">Example</p>

Request URL

```js
https://fakestoreapi.com/carts/user/2
```

Responses

- Code 200 - Request Succeeded

```js
result: [
    {
        "id": 3,
        "userId": 2,
        "date": "2020-03-01T00:00:00.000Z",
        "products": [
            {
                "productId": 1,
                "quantity": 2
            },
            {
                "productId": 9,
                "quantity": 1
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