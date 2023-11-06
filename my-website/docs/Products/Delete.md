---
sidebar_position: 10
---

# Delete a product

This reference shows that this API will not delete the product from the database, but shows that if you successfully send data, it will return you the fake deleted product.

### [DELETE] - The DELETE method removes a specific resource.

Schema
```js
// Endpoint
    https://fakestoreapi.com/products/{id}

// Query Parameters
    id: int() // Required

// Response
{
    result: array()
}
```

<p class = "p_example">Example</p>

Request URL

```js
https://fakestoreapi.com/products/6
```

Responses

- Code 200 - Request Succeeded

```js
result: [
    {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
       }
    }
]
```

Possible Errors

- Code 400 - Bad Request
- Code 401 - Request Unauthorized
- Code 404 - The specified resource was not found