import React from 'react'
import Product from './Product'

export default function Products(props) {

    return (
        <div>
            Products here
            <Product />
            {/*props.products.map(product => <li key={product.id}>{product.name}</li>)*/}
        </div>
    )
}

