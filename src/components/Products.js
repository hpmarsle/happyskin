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
                ingredients={product.ingredients} 
                description={product.description}
                size={product.size}
                price={product.price}
                qty={product.quantity}
                reviews={product.reviews[0].star_rating}
                /> 
            )}
        </div>
    )
}

