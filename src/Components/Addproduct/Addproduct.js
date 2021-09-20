import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faThLarge,
    faPlus,
    faPencilAlt,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";


const Addproduct = () => {
const { register, handleSubmit, errors } = useForm();
const [imageURL, setIMageURL] = useState(null);
const onSubmit = data =>{
    const productData = {
        name: data.name,
        weight : data.weight,
        price: data.price,
        imageURL: imageURL
      };
      const url = `https://ancient-headland-43589.herokuapp.com/addproduct`;
      
      fetch(url, {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
      })
      .then(res => console.log('server side response', res))
    };


const handleimage = (event) =>{
 console.log(event.target.files[0])
 const imageData = new FormData();
 imageData.set('key', '2c5867f697760b6d72620ee16e2844b8');
 imageData.append('image', event.target.files[0]);
 axios.post('https://api.imgbb.com/1/upload', 
 imageData)
 .then(function (response) {
    setIMageURL(response.data.data.display_url);
 })
 .catch(function (error) {
   console.log(error);
 });

}
    return (
    //   <div style={{textAlign:'center'}}>
        
    //     <div className='nav text-center'>
    //       <nav>
    //         <Link to="/manageproduct">Manage Product</Link>
    //         <Link to= "/addproduct">Add Product</Link>
    //         <Link to="/addproduct">Edit Product</Link>
         
    //       </nav>
    //     </div>
       
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <label htmlFor="Product Name">Product Name</label>
    //     <br />
    //     <input name="name" placeholder="Enter name" ref={register} />
    //     <br />
    //     <label htmlFor="Product Name">Product Weight</label>
    //     <br />
    //     <input name="weight" ref={register} />
    //     <br />
    //     <label htmlFor="Product Name">Product Price</label>
    //     <br />
    //     <input name="price" ref={register} />
    //     <br />
    //     <input name="example" type='file' onChange={handleimage} />

    //     {errors.exampleRequired && <span>This field is required</span>}

    //     <input type="submit" />
    //   </form>
    // </div>








<div className='row s'>

<div className="col-lg-2 p-0">
    <div className="content text-center">
        <h1>Admin</h1>
        <Link className="manage-product" to="/manageproduct">
            <FontAwesomeIcon
                className="admin-icon"
                icon={faThLarge}
            />{" "}
            Manage Product
        </Link>
        <Link className="admin-btn" to="/addproduct">
            <FontAwesomeIcon
                className="admin-icon"
                icon={faPlus}
            />{" "}
            Add Product
        </Link>
        <h6 className="admin-btn">
            <FontAwesomeIcon
                className="admin-icon"
                icon={faPencilAlt}
            />{" "}
            Edit Product
        </h6>
    </div>
</div>
<div className="col-lg-10 p-0">
<div style={{textAlign:'center'}}>
        
        <div className='nav text-center'>
          <nav>
            <Link to="/manageproduct">Manage Product</Link>
            <Link to= "/addproduct">Add Product</Link>
            <Link to="/addproduct">Edit Product</Link>
         
          </nav>
        </div>
       
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Product Name">Product Name</label>
        <br />
        <input name="name" placeholder="Enter name" ref={register} />
        <br />
        <label htmlFor="Product Name">Product Weight</label>
        <br />
        <input name="weight" ref={register} />
        <br />
        <label htmlFor="Product Name">Product Price</label>
        <br />
        <input name="price" ref={register} />
        <br />
        <input name="example" type='file' onChange={handleimage} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>

</div>
</div>










       
    );
    
};

export default Addproduct;