--- 
sidebar_position: 3
---

# Limit results

This reference shows how to use APIs to limit results from a database.

### [GET] - Gets limited results

Schema

```js
// Endpoint
    https://fakestoreapi.com/carts

// Parameters
    limit: int() // Optional

// Response
{ 
    result: array()    
}
```
If not entered any value in the parameter **limit**, it will get you a list with every cart in the database (7).

<p class = "p_example">Example</p>

Request URL

```js
https://fakestoreapi.com/carts?limit=5
```

Responses

- Code 200 - Request succeeded

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
    }
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found