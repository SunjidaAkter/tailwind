import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, category, price, id } = product;
    const navigate = useNavigate();
    const showDetail = () => {
        const path = `/product/${id}`;
        navigate(path);
    }
    return (
        <div className='my-6 bg-slate-700 text-white w-4/5 mx-auto'>
            <p className='text-4xl  '>{name}</p>
            <p className='text-3xl  '>{category}</p>
            <p className='text-2xl  '>Price : {price}</p>
            <button onClick={showDetail} className='bg-zinc-50 text-slate-900 m-5 p-2 border-gray-900 border-2 rounded-lg'>id:{id}</button>
        </div>
    );
};

export default Product;