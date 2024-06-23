import React, { useState, useEffect } from 'react'

import '../styles/ProductCards.scss'

// import icons
import PlusSign from '../assets/icons/plus.svg'
// import thumbnails of card
import Shirt from '../assets/images/cardThumbnails/shirt.png'
import Shoe from '../assets/images/cardThumbnails/shoe.png'
import Watch from '../assets/images/cardThumbnails/watch.png'

const ProductCards = () => {

    const products = [
        {
            image: Shirt,
            productName: 'T-Shirt',
            description: 'Here goes some information about the product.',
            price: 100
        },
        {
            image: Shoe,
            productName: 'Shoe',
            description: 'Here goes some information about the product.',
            price: 200
        },
        {
            image: Watch,
            productName: 'Watch',
            description: 'Here goes some information about the product.',
            price: 400
        },
    ];

    const [productCards, setProductCards] = useState(products);

    useEffect(() => {
        setProductCards([...productCards.sort((a, b) => { return a.price - b.price })]);
    }, []);

    // Sort Product by price 
    function sortProductsByPrice(e) {
        e.stopPropagation();
        if (e.target.value === 'LowToHigh') {
            // Sorting Test by price -  Low To High 
            setProductCards([...productCards.sort((a, b) => { return a.price - b.price })]);
        }

        if (e.target.value === 'HighToLow') {
            // Sorting Test by price -  High To Low 
            setProductCards([...productCards.sort((a, b) => { return b.price - a.price })]);
        }
    }

    return (
        // Following "BEM" convention for className.
        // To learn more visit : https://getbem.com/
        <div className='product-cards'>

            <div className="product-cards__header">
                <h1>Filter By Price</h1>
                <div className="product-cards__price-filter">
                    <span> Price : &nbsp;</span>
                    <select class="form-select form-select-sm" data-bs-theme="light" aria-label=".form-select-sm" name="price" id="test-price" onChange={(e) => sortProductsByPrice(e)}>
                        <option value="LowToHigh">Low To High</option>
                        <option value="HighToLow">High To Low</option>
                    </select>
                </div>
            </div>

            <div className="product-cards__cards-container">
                {
                    productCards.map(product => <div key={product.description} className="product-cards__card-outer-box" >
                        <div className="product-cards__card">
                            <div className="product-cards__image-box">
                                <img className="product-cards__thumbnail" src={product.image} alt="thumbnail" />
                            </div>
                            <div className="product-cards__details">
                                <h3>{product.productName}</h3>
                                <p>{product.description}</p>
                                <div className="product-cards__price-box">
                                    <p><span>$</span> {product.price}</p>
                                    <button className='product-cards__atc-button'><img src={PlusSign} alt="plus sign" />Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProductCards