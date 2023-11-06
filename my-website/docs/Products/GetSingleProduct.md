---
sidebar_position: 1
---

# Get a single product

This reference shows how to use APIs to get a single product in a database.

### [GET] - Gets a single product 

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
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        
        }
    }
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found