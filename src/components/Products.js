import React from 'react'
import ProductCard from './ProductCard'

export default function Products(props) {

    return (
        <div>
            Products here
            {props.products.map(product => 
                < ProductCard 
                key={product.id} 
                name={product.name} 
                brand={product.brand} 
                image={product.image} 
                price={product.price}
                reviews={product.reviews[0].star_rating}
                /> 
            )}
        </div>
    )
}

