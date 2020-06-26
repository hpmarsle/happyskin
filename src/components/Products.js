import React from 'react'

export default function Products(props) {

    return (
        <div>
            Products here
            {props.products.map(product => <li key={product.id}>{product.name}</li>)}
        </div>
    )
}
