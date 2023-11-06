---
sidebar_position: 4
---

# Sort results

This reference shows how to use APIs to get sorted results from a database.

### [GET] - Gets sorted results 

Schema

```js
// Endpoint
    https://fakestoreapi.com/products

// Parameters
    sort: str() // Optional - asc() || desc()
    
// Response
{
    result: array()    
}
```

The default value is in ascending mode, you can use it with 'desc' or 'asc' as you want.

<p class = "p_example">Example</p>

Request URL

```js
https://fakestoreapi.com/products?sort=desc
```

Responses 

- Code 200 - Request Succeeded

```js
result: [
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