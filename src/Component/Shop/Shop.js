import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <p>products shop:{products.length}</p>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Shop;