import React from 'react';
import './Manageproduct.css'
import  { useEffect, useState } from 'react';
import Data from '../Data/Data';
import AddProductData from '../AddProductData/AddProductData';
const Manageproduct = () => {
    const [product , setProduct] = useState([])
    useEffect(()=>{
        fetch('https://ancient-headland-43589.herokuapp.com/product')
        .then(res => res.json())
      
        .then(data => setProduct(data))
    },[])
    return (
        <div className=''>
            {
             product.map(pd =><Data pd={pd}></Data>)
            }
      
        </div>
    );
};

export default Manageproduct;