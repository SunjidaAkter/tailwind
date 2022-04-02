import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();
    return (
        <div>
            <p>product :{params.id} </p>
        </div>
    );
};

export default ProductDetail;