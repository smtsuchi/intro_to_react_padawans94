import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Product from '../components/Product';

export default function Shop({addToCart}) {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        console.log('hi2')
        const res = await fetch('http://127.0.0.1:5000/api/products');
        const data = await res.json();
        setProducts(data.products)

    }
    useEffect(() => {
        console.log('hi')
        getProducts()
    }, [])

    const showProducts = () => {
        return products.map(p=><Product addToCart={addToCart} product={p}/>)
    }

    return (
        <div className='row'>
            {showProducts()}
        </div>
    )
}