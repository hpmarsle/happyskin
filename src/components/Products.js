import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

export default function Products(props) {

    return (
        <div>
            Products here
            {props.products.map(product => 
                <Link to ={`/products/${product.id}`}>
                < ProductCard 
                id={product.id} 
                name={product.name} 
                brand={product.brand} 
                image={product.image} 
                price={product.price}
                reviews={product.reviews[0].star_rating}
                /> 
                </Link>
            )}
        </div>
    )
}

