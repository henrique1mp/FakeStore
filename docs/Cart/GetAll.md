---
sidebar_position: 1
---

# Get all

This reference shows how to use APIs to get all information about the cart.

### [GET] - Gets all carts

Schema

```js
// Endpoint
    https://fakestoreapi.com/carts

// Doesn't have parameters    


// Response
{ 
    result: array()
}
```

<p class = "p_example">Example</p>

Request URL

```js
https://fakestoreapi.com/carts
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
    },
    {
        "id": 2,
        "userId": 1,
        "date": "2020-01-02T00:00:00.000Z",
        "products": [
            {
                "productId": 2,
                "quantity": 4
            },
            {
                "productId": 1,
                "quantity": 10
            },
            {
                "productId": 5,
                "quantity": 2
            }
        ],
        "__v": 0
    },
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
    },
    {
        "id": 4,
        "userId": 3,
        "date": "2020-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": 1,
                "quantity": 4
            }
        ],
        "__v": 0
    },
    {
        "id": 5,
        "userId": 3,
        "date": "2020-03-01T00:00:00.000Z",
        "products": [
            {
                "productId": 7,
                "quantity": 1
            },
            {
                "productId": 8,
                "quantity": 1
            }
        ],
        "__v": 0
    },
    {
        "id": 6,
        "userId": 4,
        "date": "2020-03-01T00:00:00.000Z",
        "products": [
            {
                "productId": 10,
                "quantity": 2
            },
            {
                "productId": 12,
                "quantity": 3
            }
        ],
        "__v": 0
    },
    {
        "id": 7,
        "userId": 8,
        "date": "2020-03-01T00:00:00.000Z",
        "products": [
            {
                "productId": 18,
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