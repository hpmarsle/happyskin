import React from 'react'
import ProductCard from './ProductCard'

export default function Products(props) {

    return (
        <div>
            Products here
            <ProductCard />
            {/*props.products.map(product => <li key={product.id}>{product.name}</li>)*/}
        </div>
    )
}

