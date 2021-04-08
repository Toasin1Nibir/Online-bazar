import { Button } from 'bootstrap';
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Header.css'


const Header = (props) => {
    const { imageURL, price, _id, name, weight } = props.products
    // {products}
    const history = useHistory();
    const handleClick = (_id) => {
        const url = `/checkout/${_id}`
        history.push(url)
    }
    return (
        // <div className="col-md-4 container">
        //     <img style={{ height: '250px' }} src={imageURL} alt="" />
        //     <h3>{name}-{weight}</h3>
        //     <div className='footer d-flex'>
        //         <h1>${price}</h1>
        //         <button type="button" class="btn btn-primary" onClick={() => handleClick(_id)}>Buy now</button>
        //     </div>
        // </div>

        <div class="card text-center col-md-4">
            <div>
                <img style={{ height: '250px' }} src={imageURL} alt="" />
                <h3>{name}-{weight}</h3>
                <div class="card-body d-flex justify-content-between">
                    <h1>${price}</h1>
                    <button type="button" class="btn btn-success" onClick={() => handleClick(_id)}>Buy now</button>
                </div>
            </div>
        </div>


      


      

    
    );
};

export default Header;