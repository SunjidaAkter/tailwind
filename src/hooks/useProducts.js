import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setPrducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setPrducts(data));
    }, [])
    return [products, setPrducts];
}
export default useProducts;