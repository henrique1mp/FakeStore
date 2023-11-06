---
sidebar_position: 9
---

# Delete a cart

This reference shows that this API will not delete the cart from the database, but shows that if you successfully send data, it will return you the fake deleted cart.

### [DELETE] - The DELETE method removes a specific resource

Schema

```js
// Endpoint
    https://fakestoreapi.com/carts/{id}

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
https://fakestoreapi.com/carts/3
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